import test, { describe, it } from "node:test";
import assert from "node:assert/strict";
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
    assert.equal(result.success, true);
  });

  it("should reject invalid email formats", () => {
    const invalidEmailData = {
      name: "Shruti Shinde",
      email: "invalid-email-string",
      subject: "Security Inquiry",
      message: "This is a test message for email validation.",
    };

    const result = contactSchema.safeParse(invalidEmailData);
    assert.equal(result.success, false);
    if (!result.success) {
      assert.ok(result.error.flatten().fieldErrors.email);
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
    assert.equal(result.success, false);
    if (!result.success) {
      assert.ok(result.error.flatten().fieldErrors.name);
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
    assert.equal(result.success, false);
    if (!result.success) {
      assert.ok(result.error.flatten().fieldErrors.message);
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
    assert.equal(result.success, true);
    if (result.success) {
      assert.equal(result.data.website, "http://malicious-bot-trap.com");
    }
  });
});
