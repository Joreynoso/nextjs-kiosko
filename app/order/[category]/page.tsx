import ProductCard from '@/components/products/ProductCard';
import { prisma } from "@/src/lib/prisma"

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  })

  return products
}

export default async function PageOrder({ params }: { params: Promise<{ category: string }> }) {
  // Await params primero
  const { category } = await params;

  // Luego usar category
  const products = await getProducts(category);

  return (
    <>
    <h1 className='text-xl font-semibold leading-tight mb-10'>Elige y personaliza <br /> tu pedido! 👋</h1>
      <div className='grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 items-start'>
        {products.map(product => (
          <ProductCard 
          key={product.id}
          product={product}/>
        ))}
      </div>
    </>
  )
}