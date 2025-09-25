'use client'
import Link from 'next/link'
import { ClipboardDocumentListIcon, CubeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'

type AdminRouteProps = {
    link: {
        url: string
        text: string
        blank: boolean
    }
}

export default function AdminRoute({ link }: AdminRouteProps) {
    const pathname = usePathname()
    const isActive = pathname.startsWith(link.url)
    
    // Elegimos el ícono en base a la ruta
    const getIcon = () => {
        if (link.url.includes('/admin/orders')) return <ClipboardDocumentListIcon className="w-6 h-6" />
        if (link.url.includes('/admin/products')) return <CubeIcon className="w-6 h-6" />
        if (link.url.includes('/order')) return <ShoppingCartIcon className="w-6 h-6" />
        return null
    }

    return (
        <Link
            href={link.url}
            target={link.blank ? '_blank' : undefined}
            className="flex items-center gap-4 w-full hover:bg-gray-100 hover:rounded-lg transition-colors duration-100 ease-in cursor-pointer p-2"
        >
            <div
                className={`w-10 h-10 relative rounded-md flex items-center justify-center ${isActive ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
                    }`}
            >
                {getIcon()}
            </div>


            <span className="hidden md:inline font-medium text-lg">
                {link.text}
            </span>
        </Link>
    )
}
