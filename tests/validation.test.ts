import { contactSchema } from "../lib/validations/contact";

describe("Contact Form Validation & Honeypot Logic", () => {
  it("should validate correct contact form inputs successfully", () => {
    const validData = {
      name: "Shruti Shinde",
      email: "shruti@example.com",
      subject: "Security Audit Request",
      message: "Hello, I would like to discuss a web application security assessment.",
      website: "",
    };

    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should reject invalid email formats", () => {
    const invalidEmailData = {
      name: "Shruti Shinde",
      email: "invalid-email-string",
      subject: "Security Inquiry",
      message: "This is a test message for email validation.",
    };

    const result = contactSchema.safeParse(invalidEmailData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.email).toBeDefined();
    }
  });

  it("should reject names shorter than 2 characters", () => {
    const shortNameData = {
      name: "S",
      email: "shruti@example.com",
      subject: "Security Inquiry",
      message: "This is a test message for short name validation.",
    };

    const result = contactSchema.safeParse(shortNameData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.name).toBeDefined();
    }
  });

  it("should reject messages shorter than 10 characters", () => {
    const shortMessageData = {
      name: "Shruti Shinde",
      email: "shruti@example.com",
      subject: "Security Inquiry",
      message: "Short",
    };

    const result = contactSchema.safeParse(shortMessageData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.message).toBeDefined();
    }
  });

  it("should parse honeypot website field when empty or populated", () => {
    const botData = {
      name: "Spam Bot",
      email: "bot@spam.com",
      subject: "Spam Topic",
      message: "This is automated spam content.",
      website: "http://malicious-bot-trap.com",
    };

    const result = contactSchema.safeParse(botData);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.website).toBe("http://malicious-bot-trap.com");
    }
  });
});
