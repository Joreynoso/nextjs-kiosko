'use client'

import { formatCurrency } from '@/src/utils'
import { Product } from '@prisma/client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import AddProductButton from './AddProductButton'

type ProductCardProps = {
    product: Product
    index: number
}


export default function ProductCard({ product, index }: ProductCardProps) {


    // render return
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut",
                    delay: index * 0.07
                }}
                className='rounded-2xl bg-white border border-gray-100 h-80 flex flex-col overflow-hidden'>

                <div className='relative w-full h-48 bg-gray-50'>
                    <Image
                        className='object-cover'
                        src={`/products/${product.image}.jpg`}
                        alt={product.name}
                        fill
                        sizes='300px' />
                </div>

                <div className='flex flex-col flex-grow p-4 justify-between'>
                    <div>
                        <h3 className='text-sm font-medium text-gray-900 mb-1'>{product.name}</h3>
                        <p className='text-base font-semibold text-gray-900'>{formatCurrency(product.price)}</p>
                    </div>

                    <AddProductButton
                        product={product} />
                </div>
            </motion.div>
        </>
    )
}