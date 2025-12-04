
import AddProductForm from '@/components/products/AddProductForm'
import ProductForm from '@/components/products/ProductForm'
import Heading from '@/components/ui/Heading'
import { prisma } from "@/src/lib/prisma"
import { Product } from "@/src/lib/types"

async function getProducts(): Promise<Product[]> {
  const products = await prisma.product.findMany()
  return products
}

export default async function ProductsNew() {

  return (
    <>
      <Heading>Crear un nuevo producto</Heading>
      <AddProductForm>
        <ProductForm />
      </AddProductForm>
    </>
  )
}
