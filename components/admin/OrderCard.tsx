'use client'
import { OrderWithProducts } from '@/src/lib/types'
import { formatCurrency } from '@/src/utils'
import { motion } from 'framer-motion'

type OrderCardProps = {
    order: OrderWithProducts
    index: number
}

export default function OrderCard({ order, index }: OrderCardProps) {

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
                className='rounded-2xl bg-white border border-gray-100 h-80 flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200'>
                <div className="flex-grow p-6 space-y-4 minimal-scroll overflow-y-auto">
                    {/* Cliente */}
                    <div className="pb-3 border-b border-gray-100">
                        <h2 className="text-sm font-medium text-gray-900 mb-1">Cliente</h2>
                        <p className="text-base font-semibold text-gray-900">{order.name}</p>
                    </div>

                    {/* Productos */}
                    <div className="pb-3 border-b border-gray-100">
                        <h2 className="text-sm font-medium text-gray-900 mb-2">Productos</h2>
                        <div className="space-y-2">
                            {order.orderProducts.map(product => (
                                <div key={product.id} className="flex justify-between items-center">
                                    <div className="flex-1">
                                        <span className="text-xs text-gray-500 mr-2">×{product.quantity}</span>
                                        <span className="text-sm text-gray-900">{product.product.name}</span>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">
                                        {formatCurrency(product.product.price)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Total */}
                    <div>
                        <h2 className="text-sm font-medium text-gray-900 mb-1">Total</h2>
                        <p className="text-lg font-bold text-gray-900">{formatCurrency(order.total)}</p>
                    </div>
                </div>

                {/* Botón */}
                <div className="p-4 border-t border-gray-100">
                    <button className="w-full py-3 px-4 rounded-xl font-medium bg-green-600 text-white hover:bg-green-700 active:bg-green-800 transition-colors duration-200">
                        Marcar como completado
                    </button>
                </div>
            </motion.div>
        </>
    )
}