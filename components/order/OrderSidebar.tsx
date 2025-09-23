import { prisma } from "@/src/lib/prisma"
import CategoryIcon from '../ui/CategoryIcon'

async function getCategories() {
  return await prisma.category.findMany()
}

export default async function OrderSidebar() {
  const categories = await getCategories()
  
  return (
    <div className="md:w-60 h-screen bg-white">
      <div className='p-4 space-y-2'>
        {categories.map(category => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}