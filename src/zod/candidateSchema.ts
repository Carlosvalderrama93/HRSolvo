import { z } from "zod";

const candidateSchema = z.object({
  languages: z.string(),
  name: z.string(),
  email: z.string().email(),
  whatsapp: z.string(),
  address: z.string(),
  vacancyInfo: z.string(),
  yearsOfExperience: z.number().min(0),
  educationInfo: z.string(),
  salary: z.string().refine((value) => !isNaN(parseFloat(value)), {
    message: "Salary must be a valid number",
  }),
});

// Type inference for TypeScript
export type Candidate = z.infer<typeof candidateSchema>;
