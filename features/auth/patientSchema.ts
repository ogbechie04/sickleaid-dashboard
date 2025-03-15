import z from "zod";

export const patientSchema = z.object({
  fullName: z.string().min(2, { message: "Patient name is required" }),
  gender: z.string().min(2, { message: "Patient gender is required" }),
  contact: z
    .string()
    .length(11, { message: "Enter patients contact" })
    .regex(/^\d{11}$/, "Contact must contain only digits."),
  address: z.string().min(2, { message: "Patient address is required" }),
  state: z.string().min(2, { message: "Patient state is required" }),
  id: z.string().min(2, { message: "Patient id is required" }),
  bloodType: z.string().min(2, { message: "Patient blood type is required" }),
  age: z.string().min(1, { message: "Patient age is required" }),
  allergies: z.string().min(2, { message: "Patient allergies is required" }),
  weight: z.string().min(2, { message: "Patiernt weight is required" }),
  joinedDate: z.string().min(2, { message: "Patient joined date is required" }),
  height: z.string().min(2, { message: "Patient height is required" }),
});

export type patientFormData = z.infer<typeof patientSchema>;
