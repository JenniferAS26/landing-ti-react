import './styles.sass'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
} from '@nextui-org/react'

export default function NavBarTailWindNextUI() {
    return (
        <Navbar
            className='bg-transparent absolute text-white top-20 navbar-height'
            style={{
                backdropFilter: 'none !important',
                WebkitBackdropFilter: 'none !important',
            }}
            classNames={{
                item: [
                    'flex',
                    'relative',
                    'h-full',
                    'items-center',
                    "data-[active=true]:after:content-['']",
                    'data-[active=true]:after:absolute',
                    'data-[active=true]:after:bg-white',
                    'data-[active=true]:after:top-7',
                    'data-[active=true]:after:top-7',
                    'data-[active=true]:after:left-0',
                    'data-[active=true]:after:right-0',
                    'data-[active=true]:after:h-[4px]',
                    'data-[active=true]:after:rounded-[2px]',
                    'data-[active=true]:after:bg-primary',
                ],
            }}>
            <NavbarBrand>
                <p className='font-bold'>loopstudios</p>
            </NavbarBrand>
            <NavbarContent
                className='hidden sm:flex gap-4'
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
