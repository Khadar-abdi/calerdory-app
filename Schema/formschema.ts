
import { z } from "zod";

export const EventSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    durationInMinutes: z.coerce.number()
    .int().positive("Duration must greater than 0")
    .max(60*12, `Duration must less than 24 hours ${60*12} minutes`, ),
    clerkUserId: z.string().min(1),
    description: z.string().optional(),
    isActive: z.boolean().default(true),
})