'use client'
import { SearchSchema } from '@/src/schema'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function ProductsSearch() {

    const router = useRouter()

    function handleSearchForm(formData: FormData) {
        const data = {
            search: formData.get('search')
        }

        const result = SearchSchema.safeParse(data)
        
        if (!result.success) {
            result.error.issues.forEach(issue  => {
                toast.error(issue.message)
            })

            return
        }

        router.push(`/admin/products/search?search=${result.data.search}`)
    }

    // render return
    return (
        <>
            <form
                action={handleSearchForm}
                className='w-full flex flex-1 items-center gap-2 bg-white rounded-xl overflow-hidden'>
                <input
                    type="text"
                    placeholder='Buscar un producto...'
                    className='px-5 p-2 placeholder-gray-400 w-full'
                    name='search' />

                <input
                    type="submit"
                    value='buscar'
                    className='bg-neutral-900 px-4 py-2 flex justify-center items-center rounded-lg w-30 text-white cursor-pointer' />
            </form>
        </>
    )
}