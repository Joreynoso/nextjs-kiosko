"use client"
import ProductDetail from "./ProductDetail"
import { useStore } from "@/src/store"
import { formatCurrency } from "@/src/utils"
import { createOrder } from "@/actions/create-order-action"
import { OrderSchema } from "@/src/schema"
import { toast } from "react-toastify"
import { useMemo, useState } from "react"

export default function OrderSummary() {
  const order = useStore((state) => state.order)
  const getTotal = useStore((state) => state.getTotal)
  const clearOrder = useStore((state) => state.clearOrder)
  const [loading, setLoading] = useState(false)

  const total = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  )

  // handle create order
  const handleCreateorder = async (formData: FormData) => {
    setLoading(true)

    const data = {
      name: formData.get("name"),
      total,
      order,
    }

    // validar en el cliente
    const result = OrderSchema.safeParse(data)
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message)
      })
      setLoading(false)
      return
    }

    // validar en el servidor
    const response = await createOrder(data)

    if (response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message)
      })
      setLoading(false)
      return
    }

    // safety area
    toast.success("Pedido realizado correctamente")
    clearOrder()
    setLoading(false)
  }

  // render return
  return (
    <div className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h2 className="text-xl text-center font-semibold">Mi pedido</h2>

      {order.length === 0 ? (
        <p className="text-center mt-10 text-gray-900/70 mb-4">
          Oops! parece que no has agregado nada aún.
        </p>
      ) : (
        <div className="mt-10">
          {order.map((item) => (
            <ProductDetail key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* total order */}
      {order.length !== 0 && (
        <div className="rounded-2xl bg-white border-gray-100 p-4 flex flex-col justify-between">
          <div className="w-full flex justify-between">
            <span className="uppercase font-extrabold">Total</span>
            <span className="uppercase font-extrabold mb-5">
              {formatCurrency(getTotal())}
            </span>
          </div>

          <form action={handleCreateorder}>
            {/* ingresar nombre de cliente */}
            <input
              type="text"
              name="name"
              className="w-full rounded-md py-2 px-3 bg-gray-100 mb-4 placeholder:text-gray-400"
              placeholder="ingrese su nombre..."
            />

            {/* confirmar pedido */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-950 rounded-md text-white uppercase font-medium py-2 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading && (
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              )}
              {loading ? "Procesando..." : "Realizar pedido"}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
