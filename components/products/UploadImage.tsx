"use client"
import { CldUploadWidget } from 'next-cloudinary'
import { TbPhotoPlus } from 'react-icons/tb'

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function UploadImage() {
    return (
        <CldUploadWidget
            onSuccess={(result, { widget }) => {
                console.log(result)
                widget.close()
            }}
            uploadPreset="sfxe7vah"
            options={{
                maxFiles: 1,
                multiple: false,
            }}
        >
            {({ open }) => {
                return (
                    <div
                        onClick={() => open()}
                        className='w-full h-[200px] flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-4 cursor-pointer hover:opacity-70 transition'
                    >
                        <TbPhotoPlus className='text-gray-400 text-4xl' />
                        <p className='text-xs text-gray-500 mt-2'>
                            Sube una imagen que represente el producto
                        </p>
                    </div>
                );
            }}
        </CldUploadWidget>
    )
}