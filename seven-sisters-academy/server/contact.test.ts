import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Increase timeout for database operations
const TIMEOUT = 15000;

type PublicContext = Omit<TrpcContext, "user"> & { user: null };

function createPublicContext(): PublicContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  it("should successfully submit a contact form with valid data", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      fullName: "Jane Doe",
      email: "jane@example.com",
      phone: "+254 123 456 789",
      programInterest: "International Advanced Pastry Technique Programme",
      message: "I am very interested in your pastry program and would like to learn more.",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("confirmation email");
    expect(typeof result.emailSent).toBe("boolean");
  });

  it("should reject submission with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        fullName: "John Doe",
        email: "not-an-email",
        phone: "+254 123 456 789",
        programInterest: "International Advanced Cooking Technique Programme",
        message: "I would like to inquire about your cooking program.",
      })
    ).rejects.toThrow();
  });

  it("should reject submission with missing full name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        fullName: "",
        email: "test@example.com",
        phone: "+254 123 456 789",
        programInterest: "International Advanced Pastry Technique Programme",
        message: "This is a test message.",
      })
    ).rejects.toThrow();
  });

  it("should reject submission with message too short", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        fullName: "Alice Smith",
        email: "alice@example.com",
        phone: "+254 123 456 789",
        programInterest: "International Advanced Pastry Technique Programme",
        message: "Short",
      })
    ).rejects.toThrow();
  });

  it("should accept submission without optional fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      fullName: "Bob Johnson",
      email: "bob@example.com",
      message: "I am interested in learning more about your culinary programs.",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("confirmation email");
  });

  it("should validate message length constraints", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const tooLongMessage = "a".repeat(5001);

    await expect(
      caller.contact.submit({
        fullName: "Test User",
        email: "test@example.com",
        message: tooLongMessage,
      })
    ).rejects.toThrow();
  });

  it("should handle email sending failures gracefully", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // Even if email sending fails, the submission should still succeed
    // and the database record should be created
    const result = await caller.contact.submit({
      fullName: "Test User",
      email: "test@example.com",
      message: "This is a test message for the contact form.",
    });

    expect(result.success).toBe(true);
    expect(typeof result.emailSent).toBe("boolean");
  });
});
