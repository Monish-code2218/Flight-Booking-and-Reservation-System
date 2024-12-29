import React from 'react'
import { Link } from 'react-router-dom'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './ui/button'


const Navbar = () => {
    
    return (
        <nav className='bg-white flex-wrap  p-4 flex justify-between items-center'>
            <div className="">
                <Link to="/">
                    <img src="/assets/images/icon.png" alt="" className='w-36' />
                </Link>
            </div>
            <div>
                <ul className='hidden md:flex space-x-4'>
                    <li className='flex space-x-20 font-semibold'>
                        <Link to="/">Home</Link>
                        <Link to="/MyBookings">My Bookings</Link>
                        <Link to='/flights' >Book a flight</Link>
                    </li>
                </ul>
            </div>
            <div className='flex items-center space-x-4'>
                <div className="flex-wrap items-center">
                    <div className="flex flex-col items-center flex-wrap space-y-4">
                        <ul className="flex flex-col flex-basis space-y-4">
                            <li >
                                <Link
                                    className="text-gray-800 hover:text-blue-500"
                                >
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <>
                    <Button><Link to="/login">Login</Link></Button>
                    <nav className="md:hidden items-center justify-center">
                        <Sheet>
                            <SheetTrigger>
                                <img src="assets/icons/menu.svg" alt="" />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>
                                        <div className='flex justify-center'>
                                            <Link to="/">
                                                <img src="/assets/images/icon.png" alt="" className='w-36' />
                                            </Link>
                                        </div>
                                    </SheetTitle>
                                    <SheetDescription>
                                        <div className='flex flex-col space-y-4 text-black font-sans font-semibold'>
                                            <Link to="/">Home</Link>
                                            <Link to="/my bookings">My Bookings</Link>
                                            <Link to='/flights' >Book a flight</Link>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </nav>
                </>
            </div>
        </nav>
    )
}



export default Navbar