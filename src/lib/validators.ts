import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/jpeg",
  "image/png",
];

export const leadSchema = z.object({
  type: z.enum(["CONTACT", "EXPRESS"]).default("CONTACT"),
  fullName: z.string().min(3),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().min(6).max(20),
  subject: z.string().min(3),
  message: z.string().min(10),
  attachment: z
    .custom<File | undefined>()
    .refine(
      (file) => !file || file.size <= MAX_FILE_SIZE,
      "Pièce jointe trop lourde (5 Mo max).",
    )
    .refine(
      (file) => !file || ALLOWED_TYPES.includes(file.type),
      "Extension non autorisée.",
    )
    .optional(),
});

export type LeadPayload = z.infer<typeof leadSchema>;






