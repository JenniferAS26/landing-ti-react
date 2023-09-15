import './styles.sass'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from '@nextui-org/react'

export default function NavBarTailWindNextUI() {
    return (
        <Navbar
            className='bg-transparent absolute blur-0'
            classNames={{
                item: [
                    'flex',
                    'relative',
                    'h-full',
                    'items-center',
                    "data-[active=true]:after:content-['']",
                    'data-[active=true]:after:absolute',
                    'data-[active=true]:after:bottom-0',
                    'data-[active=true]:after:left-0',
                    'data-[active=true]:after:right-0',
                    'data-[active=true]:after:h-[2px]',
                    'data-[active=true]:after:rounded-[2px]',
                    'data-[active=true]:after:bg-primary',
                ],
            }}>
            <NavbarBrand>
                <p className='font-bold text-black'>loopstudios</p>
            </NavbarBrand>
            <NavbarContent
                className='hidden sm:flex gap-4'
                justify='center'>
                <NavbarItem>
                    <Link
                        color='foreground'
                        href='#'>
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link
                        href='#'
                        aria-current='page'>
                        Careers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        color='foreground'
                        href='#'>
                        Events
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        color='foreground'
                        href='#'>
                        Products
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        color='foreground'
                        href='#'>
                        Support
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
