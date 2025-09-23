'use client'
import { Category } from '@prisma/client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

type CategoryIconProps = {
  category: Category
}

export default function CategoryIcon({ category }: CategoryIconProps) {
  const params = useParams<{ category: string }>()

  return (
    <Link
      href={`/order/${category.slug}`}
      className='flex items-center gap-4 w-full hover:bg-gray-100 hover:rounded-lg transition-colors duration-100 ease-in cursor-pointer p-2'
    >
      <div
        className={`w-10 h-10 relative rounded-md flex-shrink-0 ${
          category.slug === params.category ? 'bg-gray-900' : 'bg-gray-100'
        }`}
      >
        <Image
          src={`/icon_${category.slug}.svg`}
          alt='Imagen Categoria'
          fill
        />
      </div>

      {/* Texto visible solo en md+ */}
      <span className='hidden md:inline font-medium text-lg'>
        {category.name}
      </span>
    </Link>
  )
}
