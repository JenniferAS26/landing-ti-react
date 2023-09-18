import { useState } from 'react'
import './styles.sass'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
} from '@nextui-org/react'

export default function NavBarTailWindNextUI() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
      "Profile",
      "Dashboard",
      "Activity",
      "Analytics",
      "System",
      "Deployments",
      "My Settings",
      "Team Settings",
      "Help & Feedback",
      "Log Out",
    ]

    return (
        <Navbar 
            className='bg-transparent absolute text-white top-40'
            classNames={{
                item: [
                    'flex',
                    'relative',
                    'h-full',
                    'items-center',
                    "data-[active=true]:after:content-['']",
                    'data-[active=true]:after:absolute',
                    'data-[active=true]:after:m-auto',
                    'data-[active=true]:after:top-9',
                    'data-[active=true]:after:left-0',
                    'data-[active=true]:after:right-0',
                    'data-[active=true]:after:w-14',
                    'data-[active=true]:after:h-[3px]',
                    'data-[active=true]:after:rounded-[2px]',
                    'data-[active=true]:after:bg-white',
                ],
            }}>
            <NavbarBrand>
                <p className='font-bold fixed left-10vw'>loopstudios</p>
            </NavbarBrand>
            <NavbarContent
                className='sm:flex gap-5vw fixed right-10vw'
                justify='center'>
                <NavbarItem>
                    <Link
                        className='text-white text-4xl'
                        color='foreground'
                        href='#'>
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link
                        className='text-white text-4xl'
                        href='#'
                        aria-current='page'>
                        Careers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        className='text-white text-4xl'
                        color='foreground'
                        href='#'>
                        Events
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        className='text-white text-4xl'
                        color='foreground'
                        href='#'>
                        Products
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        className='text-white text-4xl'
                        color='foreground'
                        href='#'>
                        Support
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
