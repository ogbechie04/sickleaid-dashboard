import z from "zod";

export const loginSchema = z
  .object({
    hospitalEmail: z.string().email("Invalid email address, try again"),
    hospitalPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  });

export type loginFormData = z.infer<typeof loginSchema>;
