import { z } from "zod";


export const validationSchema = z.object({
    name: z.string({
        required_error: "Name is required"
    }).min(3).max(255),
    email: z.string().email({
        message: "Invalid email address"
    }).optional(),
    subject: z.string().max(255).optional(),
    message: z.string({
        required_error: "Message is required"
    }).min(3).max(255)
})