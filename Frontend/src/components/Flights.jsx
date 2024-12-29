import { Button } from './ui/button'
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom'


import axios from 'axios'


const Flights = () => {
  const [flights, setFlights] = useState([])
  //console.log(flights)


  const fetchFlights = async () => {
    try {
      const response = await axios.get(`https://flightbackend-tbsa.onrender.com/flights`);
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching :', error);
    }
  };
  useEffect(() => {
    fetchFlights();
  }, []);

  return (



    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

      <thead class="">
        <tr>
          <th scope="col" class="px-6 py-3">
            Airlines
          </th>
          <th scope="col" class="px-16 py-3">
            Model
          </th>
          <th scope="col" class="px-16 py-3">
            date
          </th>
          <th scope="col" class="px-16 py-3">
            from
          </th>
          <th scope="col" class="px-0 py-0">
            to
          </th>
          <th scope="col" class="px-11 py-3">
            Price
          </th>
        </tr>
      </thead>
      {flights.map((flight) => (
        <div className=" text-gray-900 whitespace-nowrap dark:text-white">
          <tr>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {flight.airlines}
            </th>
            <td class="px-6 py-4 ">
              {flight.name}
            </td>
            <td class="px-6 py-4">
              {flight.date}
            </td>
            <td class="px-6 py-4">
              {flight.from}
            </td>
            <td class="px-6 py-4">
              {flight.to}
            </td>
            <td class="px-6 py-4">
              {flight.fare}
            </td>
            <Link to={`/flights/${flight._id}`}>
              <Button>Book Now</Button>
            </Link>
          </tr>


        </div>


      ))
      }


    </div >



  )
}
export default Flights