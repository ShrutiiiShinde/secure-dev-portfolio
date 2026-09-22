import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import { ratelimit } from "@/lib/ratelimit";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Honeypot Spam Protection Check
    // If the hidden website field is filled, it's a bot submission.
    // Return 200 OK to silently drop without letting the bot know.
    if (body.website && body.website.trim() !== "") {
      console.warn("🛡️ Honeypot triggered: Silent bot submission dropped.");
      return NextResponse.json(
        { success: true, message: "Your message has been received." },
        { status: 200 }
      );
    }

    // 2. Upstash Redis Rate Limiting Check
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";

    if (ratelimit) {
      const { success, limit, remaining, reset } = await ratelimit.limit(ip);
      if (!success) {
        return NextResponse.json(
          {
            error: "Too many contact submissions.",
            message: "Rate limit exceeded. Please wait 10 minutes before sending another message.",
          },
          {
            status: 429,
            headers: {
              "X-RateLimit-Limit": limit.toString(),
              "X-RateLimit-Remaining": remaining.toString(),
              "X-RateLimit-Reset": reset.toString(),
            },
          }
        );
      }
    }

    // 3. Server-Side Validation (Zero Trust - Never trust client inputs)
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      const formattedErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          error: "Validation error",
          details: formattedErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    // 4. Send Email via Resend
    if (resend) {
      const recipientEmail = process.env.CONTACT_EMAIL || "shindeshrutivijay@gmail.com";

      const emailResponse = await resend.emails.send({
        from: "Portfolio Contact Form <onboarding@resend.dev>",
        to: [recipientEmail],
        replyTo: email,
        subject: `[Portfolio Contact] ${subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px;">
            <h2 style="color: #06B6D4;">New Contact Form Message</h2>
            <p><strong>From:</strong> ${name} (&lt;${email}&gt;)</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: 0; border-top: 1px solid #cbd5e1; margin: 20px 0;" />
            <p style="white-space: pre-wrap; font-size: 15px; line-height: 1.6; color: #334155;">${message}</p>
            <hr style="border: 0; border-top: 1px solid #cbd5e1; margin: 20px 0;" />
            <p style="font-size: 12px; color: #94a3b8;">Sent securely from Shruti Vijay Shinde Developer Portfolio.</p>
          </div>
        `,
      });

      if (emailResponse.error) {
        console.error("Resend delivery failed:", emailResponse.error);
        return NextResponse.json(
          { error: "Email delivery failed. Please try again later." },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { success: true, message: "Thank you! Your message has been sent successfully." },
        { status: 200 }
      );
    }

    // Fallback if Resend API key is not configured in local environment
    console.log("📬 [Local Dev Contact Submission Logged]:");
    console.log({ name, email, subject, message });

    return NextResponse.json(
      {
        success: true,
        message: "Message received! (Local dev mode active — set RESEND_API_KEY to send actual emails).",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
