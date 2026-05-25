import { describe, expect, it } from "vitest";
import { ENV } from "./_core/env";

describe("email service", () => {
  it("should have valid Resend API key configured", async () => {
    // Check that RESEND_API_KEY is set
    expect(ENV.resendApiKey).toBeDefined();
    expect(ENV.resendApiKey).toBeTruthy();
    expect(typeof ENV.resendApiKey).toBe("string");
    expect(ENV.resendApiKey.length).toBeGreaterThan(0);
  });

  it("should validate Resend API key format", async () => {
    // Resend API keys typically start with 're_'
    // This is a basic format check
    expect(ENV.resendApiKey).toMatch(/^re_/);
  });
});
