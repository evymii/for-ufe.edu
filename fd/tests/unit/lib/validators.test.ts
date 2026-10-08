import { describe, expect, it } from "vitest";

import { loginSchema, registerSchema } from "@/lib/validators/auth";

/** The form validation shared in spirit with bd/src/validators. */
describe("auth validators", () => {
  describe("loginSchema", () => {
    it("accepts a valid login", () => {
      const parsed = loginSchema.parse({
        email: "Ada@Example.com",
        password: "Password123!",
      });
      expect(parsed).toEqual({
        email: "Ada@Example.com",
        password: "Password123!",
      });
    });

    it("rejects a malformed email", () => {
      const result = loginSchema.safeParse({
        email: "not-an-email",
        password: "Password123!",
      });
      expect(result.success).toBe(false);
    });

    it("rejects an empty password", () => {
      const result = loginSchema.safeParse({
        email: "ada@example.com",
        password: "",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(
          result.error.issues.some((issue) => issue.path[0] === "password"),
        ).toBe(true);
      }
    });
  });

  describe("registerSchema", () => {
    const valid = {
      name: "Ada Lovelace",
      email: "ada@example.com",
      password: "Password123!",
      confirmPassword: "Password123!",
    };

    it("accepts a matching pair of passwords", () => {
      expect(registerSchema.safeParse(valid).success).toBe(true);
    });

    it("flags mismatched passwords on the confirmPassword field", () => {
      const result = registerSchema.safeParse({
        ...valid,
        confirmPassword: "Different123!",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        const issue = result.error.issues.find(
          (i) => i.path[0] === "confirmPassword",
        );
        expect(issue?.message).toBe("Нууц үгүүд таарахгүй байна");
      }
    });

    it("enforces the shared 8-character minimum (same as the backend)", () => {
      const result = registerSchema.safeParse({
        ...valid,
        password: "short",
        confirmPassword: "short",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(
          result.error.issues.some((issue) =>
            issue.message.includes("8 тэмдэгт"),
          ),
        ).toBe(true);
      }
    });

    it("requires a name", () => {
      const result = registerSchema.safeParse({ ...valid, name: "   " });
      expect(result.success).toBe(false);
    });
  });
});
