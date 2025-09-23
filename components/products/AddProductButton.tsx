'use client'

import { Product } from '@prisma/client'
import { useStore } from '@/src/store'

type AddProductButtonProps = {
    product: Product
}

export default function AddProductButton({product} : AddProductButtonProps) {
    const addToCart = useStore((state) => state.addToCart)

    // render return
    return (
        <>
            <button 
            onClick={() => addToCart(product)}
            className='w-full py-2 text-sm text-gray-900 border border-gray-200 rounded-lg
                     hover:bg-gray-50 cursor-pointer'>
                Agregar
            </button>
        </>
    )
}