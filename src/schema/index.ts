import { z } from 'zod'

export const OrderSchema = z.object({
    name: z
        .string()
        .min(3, 'tu nombre es obligatorio'),

    total: z
        .number()
        .min(1, 'Hay errores en la orden'),

    order: z.array(z.object({
        name: z.string(),
        id: z.number(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number()
    }))
})

// trabajando con inputs (son todos string) pero debo comparar numeros ?
export const OrderIdSchema = z.object({
    orderId: z.string().transform((value) => parseInt(value))
        .refine(value => value > 0, { message: 'hay erroresF' })
})

export const SearchSchema = z.object({
    search: z.string()
        .trim()
        .min(1, { message: 'La búsqueda no puede estar vacia' })
})