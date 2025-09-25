import AboutCard from '../about/AboutCard'
import Logo from '../ui/Logo'
import AdminRoute from './AdminRoute'

const adminNavigation = [
    { url: '/admin/orders', text: 'Ordenes', blank: false },
    { url: '/admin/products', text: 'Productos', blank: false },
    { url: '/order/cafe', text: 'Ver Quiosco', blank: true },
]

export default function AdminSidebar() {

    return (
        <>
            <div className="h-auto sm:h-screen bg-white px-4 py-4 sm:py-6 sm:px-6 flex flex-col items-start sm:justify-between sm:items-center">
                <Logo />
                <div className='space-y-2 mb-4'>
                    { adminNavigation.map(link => (
                        <AdminRoute 
                        key={link.url}
                        link={link}/>
                    ))}
                </div>

                <AboutCard />
            </div>
        </>

    )
}