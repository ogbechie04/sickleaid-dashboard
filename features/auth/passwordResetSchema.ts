import z from "zod";

export const passwordResetSchema = z
  .object({
    currentPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Re-enter the password correctly",
    path: ["hospitalConfirmPassword"],
  });
//   .transform(({ hospitalConfirmPassword, ...rest }) => rest);

export type twoFactorAuthentificationFormData = {
  pin1: string;
  pin2: string;
  pin3: string;
  pin4: string;
  pin5: string;
  pin6: string;
  confirmPin1: string;
  confirmPin2: string;
  confirmPin3: string;
  confirmPin4: string;
  confirmPin5: string;
  confirmPin6: string;
  fullpin?: string;
};

export const twoFactorAuthentificationSchema = z
  .object({
    pin1: z.string().length(1).regex(/^\d+$/),
    pin2: z.string().length(1).regex(/^\d+$/),
    pin3: z.string().length(1).regex(/^\d+$/),
    pin4: z.string().length(1).regex(/^\d+$/),
    pin5: z.string().length(1).regex(/^\d+$/),
    pin6: z.string().length(1).regex(/^\d+$/),
    confirmPin1: z.string().length(1).regex(/^\d+$/),
    confirmPin2: z.string().length(1).regex(/^\d+$/),
    confirmPin3: z.string().length(1).regex(/^\d+$/),
    confirmPin4: z.string().length(1).regex(/^\d+$/),
    confirmPin5: z.string().length(1).regex(/^\d+$/),
    confirmPin6: z.string().length(1).regex(/^\d+$/),
  })
  .refine(
    (data) => {
      const mainPin = `${data.pin1}${data.pin2}${data.pin3}${data.pin4}${data.pin5}${data.pin6}`;
      const confirmPin = `${data.confirmPin1}${data.confirmPin2}${data.confirmPin3}${data.confirmPin4}${data.confirmPin5}${data.confirmPin6}`;
      return mainPin === confirmPin;
    },
    {
      message: "Re-enter the pin correctly",
      path: ["confirmPin1"],
    }
  );

export type passwordResetFormData = z.infer<typeof passwordResetSchema>;
