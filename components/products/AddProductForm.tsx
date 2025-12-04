"use client"

export default function AddProductForm({ children }: { children: React.ReactNode }) {

    // hablde submit
    const handleSubmit = async (formData: FormData) => {
        const data = {
            name: formData.get('name'),
            price: formData.get('price'),
            categoryId: formData.get('categoryId'),
        }
        console.log(data)
    }

    // render return
    return (
        <>
            <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto'>
                <form
                    action={handleSubmit}
                    className='space-y-5'>

                    {children}

                    <input type="submit"
                        className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5
                 p-3 uppercase font-bold cursor-pointer'
                        value="registrar producto" />
                </form>
            </div>
        </>
    )
}