import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(4, { message: "Subject must be at least 4 characters long." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
  // Honeypot field for bot protection (should be empty when submitted by humans)
  website: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
