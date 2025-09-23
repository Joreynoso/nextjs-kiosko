import { z } from 'zod'

export const OrderSchema = z.object({
    name: z
    .string()
    .min(3, 'tu nombre es obligatorio')
})
