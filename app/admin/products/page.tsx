import ProductsPagination from '@/components/admin/ProductsPagination'
import ProductTable from "@/components/admin/ProductsTable"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import type { JSX } from "react"
import { redirect } from 'next/navigation'
import Link from 'next/link'
import ProductsSearch from '@/components/admin/ProductsSearch'

async function productCount() {
  return await prisma.product.count()
}

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

  if (page < 0) {
    redirect('/admin/products')
  }

  const productsData = getProducts(page, pageSize)
  const totalProductsData = productCount()

  // esperar a que se resuelvan ambas consultas
  const [products, totalProducts] = await Promise.all([productsData, totalProductsData])
  const totalPages = Math.ceil(totalProducts / pageSize)

  // forzar redirección si la pagina actual es mayor al total de paginas
  if (page > totalPages) {
    redirect('/admin/products')
  }

  // render return
  return (
    <>
      <Heading>Organiza tus productos</Heading>

      <div className='w-full flex flex-col gap-4'>

        <div className='flex justify-center items-center gap-3'>
          <ProductsSearch />

          <Link
            className='bg-neutral-900 px-4 py-2 flex justify-center items-center rounded-lg w-30 text-white'
            href={'/admin/products/new'}>
            crear nuevo
          </Link>

        </div>


        <ProductTable products={products} />
        <ProductsPagination
          totalPages={totalPages}
          page={page} />
      </div>
    </>
  )
}
