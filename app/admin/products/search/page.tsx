import ProductsSearch from '@/components/admin/ProductsSearch';
import ProductTable from '@/components/admin/ProductsTable';
import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma'

async function searchProducts(searchTerm: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    })

    return products
}

type SearchPageProps = {
    searchParams: {
        search: string
    }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {

    const products = await searchProducts(searchParams.search)

    //render return
    return (
        <>
            <Heading>Resulstados de búsqueda {searchParams.search} </Heading>
            <div className='w-full flex flex-col gap-4'>

                <div className='flex justify-center items-center gap-3'>
                    <ProductsSearch />
                </div>

                {products.length ?
                    (<ProductTable products={products} />)
                    :
                    (<p className='text-center'>no hay Resulstados para {searchParams.search}</p>)
                }

            </div>
        </>
    )
}