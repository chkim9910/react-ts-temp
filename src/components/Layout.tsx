import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const Layout: React.FC = () => {
    const products = [
        { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
        { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
        {
            name: 'Security',
            description: 'Your customers’ data will be safe and secure',
            href: '#',
            icon: FingerPrintIcon,
        },
        { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
        {
            name: 'Automations',
            description: 'Build strategic funnels that will convert',
            href: '#',
            icon: ArrowPathIcon,
        },
    ]
    const callsToAction = [
        { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
        { name: 'Contact sales', href: '#', icon: PhoneIcon },
    ]
    return (
        <>
            <Header products={products} callsToAction={callsToAction} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export const LayoutNone: React.FC = () => (
    <div>
        <Outlet />
    </div>
)

export default Layout
