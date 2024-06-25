"use client"

import { z } from "zod"

export const formSchema = z.object({
    prompt: z.string().min(1, {
        message: "Prompt is Required"
    }).max(50),
})
