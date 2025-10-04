import { Order, OrderProducts } from '@prisma/client'

export type OrderItem = Pick<Product, 'id' | 'name' | 'price'> & {
    quantity: number,
    subtotal: number
}

export type OrderWithProducts = Order & {
    orderProducts: (OrderProducts & {
        product: Product
    })[]
}

export type Product = {
    name: string;
    id: number;
    price: number;
    image: string;
    categoryId: number;
}