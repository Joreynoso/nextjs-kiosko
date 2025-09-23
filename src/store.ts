import { create } from "zustand"
import { OrderItem } from './lib/types'
import { Product } from '@prisma/client'

interface Store {
    order: OrderItem[]
    addToCart: (product: Product) => void
    increaseQuantity: (id: Product['id']) => void
    decreaseQuantity: (id: Product['id']) => void
    removeFromOrder: (id: Product['id']) => void
    getTotal: () => number
}

export const useStore = create<Store>((set, get) => ({
    order: [],
    addToCart: (product) => {

        const { categoryId, image, ...data } = product
        let order: OrderItem[] = []

        if (get().order.find(item => item.id === product.id)) {
            order = get().order.map(item => item.id === product.id ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: item.price * (item.quantity + 1)
            } : item)
        } else {
            order = [...get().order, {
                ...data,
                quantity: 1,
                subtotal: 1 * product.price
            }]
        }

        set(() => ({
            order: order
        }))
    },
    increaseQuantity: (id) => {
        set((state) => ({
            order: state.order.map(item => item.id === id ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: item.price * (item.quantity + 1)
            } : item)
        }))
    },
    decreaseQuantity: (id) => {
        set((state) => ({
            order: state.order.map(item => item.id === id ? {
                ...item,
                quantity: item.quantity - 1,
                subtotal: item.price * (item.quantity - 1)
            } : item)
        }))
    },
    removeFromOrder: (id) => {
        set((state) => ({
            order: state.order.filter(item => item.id !== id)
        }))
    },
     getTotal: () => {
        return get().order.reduce((total, item) => 
            total + (item.price * item.quantity), 0
        )
    }
}))