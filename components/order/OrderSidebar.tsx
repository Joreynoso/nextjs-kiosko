import { prisma } from "@/src/lib/prisma"
import CategoryIcon from '../ui/CategoryIcon'
import AboutCard from '../about/AboutCard'

async function getCategories() {
  return await prisma.category.findMany()
}

export default async function OrderSidebar() {
  const categories = await getCategories()
  
  return (
    <div className="md:w-60 h-auto sm:h-screen bg-white px-4 py-4 sm:py-6 sm:px-6 flex flex-col items-start sm:justify-between sm:items-center">
      <div className='space-y-2 mb-4'>
        {categories.map(category => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </div>

      <AboutCard />
    </div>
  )
}