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

// schema para productos
export const ProductSchema = z.object({
    name: z.string()
        .trim()
        .min(1, { message: 'El Nombre del Producto no puede ir vacio'}),
    price: z.string()
        .trim()
        .transform((value) => parseFloat(value)) 
        .refine((value) => value > 0, { message: 'Precio no válido' })
        .or(z.number().min(1, {message: 'La Categoría es Obligatoria' })),
    categoryId: z.string()
        .trim()
        .transform((value) => parseInt(value)) 
        .refine((value) => value > 0, { message: 'La Categoría es Obligatoria' })
        .or(z.number().min(1, {message: 'La Categoría es Obligatoria' })),
})