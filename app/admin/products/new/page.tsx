
import { prisma } from "@/src/lib/prisma"
import { Product } from "@/src/lib/types"

async function getProducts(): Promise<Product[]> {
  const products = await prisma.product.findMany()
  return products
}

export default async function ProductsNew() {

  return (
    <>
      <div>product new page</div>
    </>
  )
}
