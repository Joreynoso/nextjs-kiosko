import { XCircleIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
import { OrderItem } from "@/src/lib/types"
import { formatCurrency } from "@/src/utils"
import { useStore } from "@/src/store"
import { useMemo } from "react"

type ProductDetailProps = {
  item: OrderItem
}

export default function ProductDetail({ item }: ProductDetailProps) {
  const increaseQuantity = useStore((state) => state.increaseQuantity)
  const decreaseQuantity = useStore((state) => state.decreaseQuantity)
  const removeFromOrder = useStore((state) => state.removeFromOrder)
  const getTotal = useStore((state) => state.getTotal)
  const decreaseQuantityDisable = useMemo(() => item.quantity === 1, [item])

  // render return
  return (
    <>
      <div
        className="
      border border-dotted border-b-gray-300
      relative rounded-2xl bg-white border-gray-100 p-4"
      >
        {/* círculo derecha */}
        <div className="absolute -bottom-4 -right-4 h-8 w-8 bg-gray-100 rounded-full z-10"></div>

        {/* círculo izquierda */}
        <div className="absolute -bottom-4 -left-4 h-8 w-8 bg-gray-100 rounded-full z-10"></div>

        <div className="space-y-2">
          <div className="flex justify-between items-start">
            {/* remove from order */}
            <p className="text-lg font-medium text-gray-900">{item.name}</p>
            <button
              className="cursor-pointer"
              type="button"
              onClick={() => removeFromOrder(item.id)}
            >
              <XCircleIcon className="text-red-600 h-6 w-6" />
            </button>
          </div>

          <p className="text-xl text-amber-500 font-bold">{item.price}</p>

          <div className="flex gap-3 px-3 py-2 bg-gray-50 w-fit rounded-lg">
            {/* decrease */}
            <button
              className="cursor-pointer disabled:opacity-20"
              type="button"
              onClick={() => decreaseQuantity(item.id)}
              disabled={decreaseQuantityDisable}
            >
              <MinusIcon className="h-5 w-5" />
            </button>

            {/* increase */}
            <p className="text-base font-bold">{item.quantity}</p>
            <button
              className="cursor-pointer"
              type="button"
              onClick={() => increaseQuantity(item.id)}
            >
              <PlusIcon className="h-5 w-5" />
            </button>
          </div>

          <p className="text-base font-medium text-gray-900">
            Subtotal: <span className="font-bold">${formatCurrency(item.subtotal)}</span>
          </p>
        </div>
      </div>
    </>
  )
}
