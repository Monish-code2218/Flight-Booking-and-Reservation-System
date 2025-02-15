import { Button } from './ui/button'
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import axios from 'axios'
import Navbar from './Navbar';


const Flights = () => {
  const [flights, setFlights] = useState([])

  //console.log(flights)


  const fetchFlights = async () => {
    try {

      const response = await axios.get(`https://flightbackend-2.onrender.com/flights`);
      setFlights(response.data);
    } catch (error) {

      console.error('Error fetching :', error);
    }
  };
  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <div className="relative overflow-x-auto bg-gray-100">
      <Navbar />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Airlines
            </th>
            <th scope="col" className="px-6 py-3">
              Model
            </th>
            <th scope="col" className="px-6 py-3">
              date
            </th>
            <th scope="col" className="px-6 py-3">
              from
            </th>
            <th scope="col" className="px-6 py-3">
              to
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight._id}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {flight.airlines}
              </th>
              <td className="px-6 py-4">
                {flight.name}
              </td>
              <td className="px-6 py-4">
                {flight.date}
              </td>
              <td className="px-6 py-4">
                {flight.from}
              </td>
              <td className="px-6 py-4">
                {flight.to}
              </td>
              <td className="px-6 py-4">
              ₹{flight.fare}
              </td>
              <td className="px-6 py-4">
                <Link className='hover:underline'
                  to={`/flights/${flight._id}`}
                  onClick={() => {
                    setTimeout(() => {
                      window.location.reload();
                    }, 3000);
                  }}
                >
                  Book Now
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    </div>
  );
      
  
}
export default Flights