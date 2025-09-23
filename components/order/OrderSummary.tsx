'use client'
import { useStore } from '@/src/store'

export default function OrderSummary() {
  const order = useStore((state) => state.order)

  // render return
  return (
    <>
      <div className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
        <h2 className="text-xl text-center font-semibold">Mi pedido</h2>

        {order.length === 0 ? (<p className='text-center mt-10 text-gray-900/70'>Oops! parece que no has agregado nada aún.</p>) 
        : 
        (
          <div className='mt-10'>
            si hay algo
          </div>
        )} 
      </div>
    </>
  )
}
