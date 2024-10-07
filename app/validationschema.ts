import { z } from "zod";

export const IssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(65535),
});
export const PatchIssueSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().min(1).max(65535).optional(),
  assignedToUSerId: z
    .string()
    .min(1, "ASsigned to user id required")
    .max(255)
    .optional()
    .nullable(),
});
