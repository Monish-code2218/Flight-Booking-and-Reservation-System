import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './ui/button'
import { useAuth } from '@/services/AuthProvider'



const Navbar = () => {
    const {logout } = useAuth();
    const navigate = useNavigate();

    return (
        <nav className='bg-white flex-wrap  p-4 flex justify-between items-center'>
            <div className="">
                <Link to="/home">
                    <img src="/assets/images/icon.png" alt="" className='w-36' />
                </Link>
            </div>
            <div>
                <ul className='hidden md:flex space-x-4'>
                    <li className='flex space-x-20 font-semibold'>
                        <Link to="/home">Home</Link>
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
                    <Button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {
                            logout();
                            navigate("/");
                        }}
                        className="items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-lg py-1.5 px-3 shadow-sm hover:shadow  relative  text-white rounded-lg hover:bg-gradient-to-b hover:from-red-600 hover:to-red-600 hover:border-red-700 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased  lg:ml-auto lg:inline-block"
                        >
                        Logout
                    </Button>
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