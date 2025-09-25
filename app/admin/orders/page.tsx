import OrderCard from '@/components/admin/OrderCard';
import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma';

async function getPendingOrders() {
    const orders = await prisma.order.findMany({
        where: {
            status: false
        }, include: {
            orderProducts: {
                include: {
                    product: true
                }
            }
        }
    })

    return orders
}

export default async function OrdersPage() {
    const orders = await getPendingOrders()

    console.log(JSON.stringify(orders, null, 2))
    // render return
    return (
        <>
            <Heading >
                Bienvenido al panel de <br />administración ⚙
            </Heading>

            {orders.length === 0 ? (
                <p className='font-semibold'>
                    Oops! parece que no tienes pedidos aún.</p>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 items-start">
                    {orders.map((order, index)=> (
                       <OrderCard
                       key={order.id}
                       index={index}
                       order={order} 
                       />
                    ))}
                </div>
            )}
        </>
    )
}