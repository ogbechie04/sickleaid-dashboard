import z from "zod";

export const forgotPasswordSchema = z
  .object({
    hospitalEmail: z.string().email("Invalid email address, try again"),
    hospitalPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    hospitalConfirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.hospitalPassword === data.hospitalConfirmPassword, {
    message: "Re-enter the password correctly",
    path: ["hospitalConfirmPassword"],
  })
//   .transform(({ hospitalConfirmPassword, ...rest }) => rest);

export type forgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
