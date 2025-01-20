import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Button } from './ui/button'

const MyBookings = () => {
    const { id: _id } = useParams()
    const [flights, setFlights] = useState([]);


    const fetchFlight = async () => {
        try {
            const response = await axios.get(`https://flightbackend-2.onrender.com/flights/${_id}`)
            setFlights(response.data);
        } catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        fetchFlight();
    }, [])

    return (
        <div className='bg-gray-100  ' >
            <section class=" py-8 antialiased  md:py-16">
                <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div class="mx-auto max-w-5xl">
                        <div class="gap-4 sm:flex sm:items-center sm:justify-between">
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">My Bookings</h2>
                            <div class="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
                                <div>
                                </div>
                                <div>
                                </div>
                            </div>
                            </div>
                            
                            <div class="mt-6 flow-root sm:mt-8 bg-gray-100 ">
                                <div class="divide-y bg-gray-100">
                                    <div class="flex flex-wrap items-center gap-y-4 py-6">
                                        <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Airline ID:</dt>
                                            <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                                                <a href="" class="hover:underline">{flights.name}</a>
                                            </dd>
                                        </dl>

                                        <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Date:</dt>
                                            <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">{flights.date}</dd>
                                        </dl>

                                        <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Price:</dt>
                                            <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">₹{flights.fare}</dd>
                                        </dl>

                                        <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Status:</dt>
                                            <dd class="me-2 mt-1.5 inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                                <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z" />
                                                </svg>
                                                On Route
                                            </dd>
                                        </dl>
                                        <Button>
                                            <a href={`/payment/getTicket/${_id}`}>View Ticket</a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            
                      
                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default MyBookings