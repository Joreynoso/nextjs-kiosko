import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'


type ProductsPaginationProps = {
    page: number
    totalPages: number
}

export default function ProductsPagination({ page, totalPages }: ProductsPaginationProps): React.JSX.Element {

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    // render return
    return (
        <div className="flex items-center justify-center mt-6">
            <nav
                aria-label="Paginación"
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            >
                {/* Botón anterior */}
                {page > 1 ? (
                    <Link
                        href={`/admin/products?page=${page - 1}`}
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                        <span className="sr-only">Anterior</span>
                        <ChevronLeftIcon className="size-5" aria-hidden="true" />
                    </Link>
                ) : (
                    <span className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-300 bg-gray-100 ring-1 ring-inset ring-gray-200 cursor-not-allowed">
                        <ChevronLeftIcon className="size-5" aria-hidden="true" />
                    </span>
                )}

                {/* Páginas */}
                {pages.map((currentPage) => (
                    <Link
                        key={currentPage}
                        href={`/admin/products?page=${currentPage}`}
                        aria-current={page === currentPage ? 'page' : undefined}
                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset 
              ${page === currentPage
                                ? 'z-10 bg-neutral-900 text-white focus-visible:outline-indigo-600'
                                : 'text-gray-900 ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
                            }`}
                    >
                        {currentPage}
                    </Link>
                ))}

                {/* Botón siguiente */}
                {page < totalPages ? (
                    <Link
                        href={`/admin/products?page=${page + 1}`}
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                        <span className="sr-only">Siguiente</span>
                        <ChevronRightIcon className="size-5" aria-hidden="true" />
                    </Link>
                ) : (
                    <span className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-300 bg-gray-100 ring-1 ring-inset ring-gray-200 cursor-not-allowed">
                        <ChevronRightIcon className="size-5" aria-hidden="true" />
                    </span>
                )}
            </nav>
        </div>
    )
}