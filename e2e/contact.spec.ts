import { test, expect } from "@playwright/test";

test.describe("Contact Form Validation & Submission Flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#contact");
  });

  test("should display validation errors when submitting empty form", async ({ page }) => {
    // Click submit button without filling fields
    const submitBtn = page.getByRole("button", { name: /send message/i });
    await submitBtn.click();

    // Verify inline error messages appear for Name, Email, Subject, Message
    await expect(page.getByText(/name must be at least 2 characters/i)).toBeVisible();
    await expect(page.getByText(/please enter a valid email/i)).toBeVisible();
    await expect(page.getByText(/subject must be at least 4 characters/i)).toBeVisible();
    await expect(page.getByText(/message must be at least 10 characters/i)).toBeVisible();
  });

  test("should successfully submit valid contact form", async ({ page }) => {
    // Fill out valid contact form fields
    await page.getByLabel(/full name/i).fill("Shruti Tester");
    await page.getByLabel(/email address/i).fill("test@example.com");
    await page.getByLabel(/subject/i).fill("Playwright E2E Security Test");
    await page.getByLabel(/message/i).fill("This is an automated Playwright E2E validation test message.");

    // Submit form
    const submitBtn = page.getByRole("button", { name: /send message/i });
    await submitBtn.click();

    // Expect success response notification banner
    await expect(page.getByText(/thank you! your message has been sent successfully/i)).toBeVisible({
      timeout: 10000,
    });
  });

  test("should silently drop submission when honeypot field is filled by bot", async ({ page }) => {
    // Fill out valid fields plus honeypot field
    await page.getByLabel(/full name/i).fill("Bot Tester");
    await page.getByLabel(/email address/i).fill("bot@example.com");
    await page.getByLabel(/subject/i).fill("Spam Submission");
    await page.getByLabel(/message/i).fill("Automated spam attempt payload content.");

    // Fill honeypot field directly via script evaluation
    await page.evaluate(() => {
      const honeypotInput = document.querySelector('input[name="website"]') as HTMLInputElement;
      if (honeypotInput) honeypotInput.value = "http://spam-trap.com";
    });

    // Submit form
    const submitBtn = page.getByRole("button", { name: /send message/i });
    await submitBtn.click();

    // Server should return 200 OK silent success
    await expect(page.getByText(/message has been received/i)).toBeVisible();
  });
});
