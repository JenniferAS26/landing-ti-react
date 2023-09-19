import { useState } from 'react'
import './styles.sass'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    NavbarMenuToggle,
    NavbarMenu
} from '@nextui-org/react'

export default function NavBarTailWindNextUI({ width }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { text: 'About', href: '#', isActive: false },
        { text: 'Careers', href: '#', isActive: true },
        { text: 'Events', href: '#', isActive: false },
        { text: 'Products', href: '#', isActive: false },
        { text: 'Support', href: '#', isActive: false },
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
                <p className='font-bold fixed left-10vw font-inherit'>
                    loopstudios
                </p>
            </NavbarBrand>
            {width >= 768 && (
                <NavbarContent
                    className='sm:flex gap-5vw fixed right-10vw'
                    justify='center'>
                    {navItems.map((item, index) => (
                        <NavbarItem
                            key={index}
                            isActive={item.isActive}>
                            <Link
                                className='text-white text-4xl'
                                color='foreground'
                                href={item.href}
                                aria-current={
                                    item.isActive ? 'page' : undefined
                                }>
                                {item.text}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
            )}
        </Navbar>
    )
}
