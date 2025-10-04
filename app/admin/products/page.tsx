import ProductTable from "@/components/admin/ProductsTable"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import type { JSX } from "react"

async function getProducts(page: number, pageSize: number) {
  const skip = (page - 1) * pageSize
  const products = await prisma.product.findMany({
    take: pageSize,
    skip: skip,
    include: {
      category: true,
    },
  })

  return products
}

type searchParamsProps = {
  searchParams: { page: string }
}
export type ProductsWithCategories = Awaited<ReturnType<typeof getProducts>>

export default async function ProductsPage({
  searchParams,
}: searchParamsProps): Promise<JSX.Element> {
  const page = +searchParams.page || 1
  const pageSize = 10

  const products = await getProducts(page, pageSize)

  // render return
  return (
    <>
      <Heading>New Products Page</Heading>

      <div>
        <ProductTable products={products} />
      </div>
    </>
  )
}
