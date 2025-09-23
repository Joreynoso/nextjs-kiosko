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

    // render return
    return (
        <>
            <div
                className='flex items-center gap-4 w-full hover:bg-gray-100 transition-colors duration-100 ease-in cursor-pointer'
            >

                <div className={`w-10 h-10 relative rounded-md ${category.slug === params.category ? 'bg-gray-900' : 'bg-gray-100'}`}>
                    <Image
                        src={`/icon_${category.slug}.svg`}
                        alt='Imagen Categoria'
                        fill
                    />
                </div>

                <Link
                    href={`/order/${category.slug}`}
                    className='font-medium text-lg'>{category.name}</Link>
            </div>
        </>
    )
}