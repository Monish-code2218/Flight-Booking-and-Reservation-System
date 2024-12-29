import React, { useState,useEffect } from 'react'
import './Tab.css'
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {loadStripe} from '@stripe/stripe-js'








const Deck = () => {
  const { id: _id } = useParams();
  const [flight, setFlight] = useState([]);
  const [Passengers, setPassengers] = useState([{ passengers: " " }]);
  const [name, setName] = useState([])
  const [gender, setGender] = useState([])
  const [reservedSeat, setReservedSeat] = useState(["1A", "2A", "2B", "3B", "4A", "5C", "6A", "7B", "7C", '8B', "9B", "9C"])
  const [seatNumber, setSeatnumber] = useState([])



  



  
  const fetchFlight = async () => {
    try{
    const response = await axios.get(`https://flightbackend-tbsa.onrender.com/flights/${_id}`)
    setFlight(response.data);
    }catch(error){
      console.log(error)

    }
  }


  useEffect(()=>{    
  fetchFlight();
  },[])

  

  const handleRemovePassenger = (index) => {
    const list = [...Passengers];
    list.splice(index, 1);
    setPassengers(list);
  };

  const getSeatNumber = (e) => {
    renderPassengerData(seatNumber)
    let newSeat = e.target.value
    if (reservedSeat.includes(newSeat)) {
      e.disabled = true
      if (seatNumber.includes(newSeat)) {
        setSeatnumber(seatNumber.filter(seat => seat !== newSeat))
      }
    } else {
      setSeatnumber([...seatNumber, newSeat])
      setReservedSeat([...reservedSeat, newSeat])
      console.log(seatNumber)
    }
  }
  const handleGender = (e, seatNo) => {
    const { value } = e.target
    setGender(gender.concat(value))

  }
  const handlePassengerName = (e, seatNo) => {
    e.preventDefault()
    let value = e.target.value

    if (!value) {
      return (setName("name is required"))
    } else {
      setName(name.concat(value))

    }
  }
  const handleSubmitDetails = e => {
    e.preventDefault()
    localStorage.setItem("reservedSeats", JSON.stringify(seatNumber))
    localStorage.setItem("nameData", JSON.stringify(name))
    console.log(name)
    console.log(gender)
  }

  const renderPassengerData = (seatArray) => {
    return seatArray.map((seat, idx) => {
      return (
        <form key={idx} className="max-w-sm ">

          <br />
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <p class="text-capitalize text-center">Seat No:{seat}</p>
            {Passengers.map((passenger, index) => (
              <div key={index}>
                <input type="name" onBlur={e => handlePassengerName(e, seat)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required />
                <fieldset>
                  <legend className="sr-only">Gender</legend>
                  <div className="flex items-center mb-4">
                    <input className="form-check-input w-4 m-3 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" type="radio" name={`gender-${index}`} id={`male-${index}`} value="Male" />
                    <label className="form-check-label block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor={`male-${index}`} onClick={e => handleGender(e, seat)}>Male</label>
                    <input className="form-check-input w-4 m-3 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" type="radio" name={`gender-${index}`} id={`female-${index}`} value="Female" />
                    <label className="form-check-label block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor={`female-${index}`} onClick={e => handleGender(e, seat)} >Female</label>
                  </div>
                </fieldset>
              </div>
            ))}

          </div>
        </form>



      )

    })
  }

  return (
    <div>
      <div className="ss">
        <h1 className='font-bold m-6  '>Add Passengers</h1>
        <div className="row">
          <div className="column1">
            <div className="plane">
              <form onChange={e => getSeatNumber(e)}  >
                <ol className="">
                  <li className="row row--1">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" disabled value="1A" id="1A" />
                        <label htmlFor="1A">1A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" id="1B" value="1B" />
                        <label htmlFor="1B">1B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="1C" id="1C" />
                        <label htmlFor="1C">1C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--2">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" disabled value="2A" id="2A" />
                        <label htmlFor="2A">2A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" disabled value="2B" id="2B" />
                        <label htmlFor="2B">2B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="2C" id="2C" />
                        <label htmlFor="2C">2C</label>
                      </li>

                    </ol>
                  </li>
                  <li className="row row--3">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="3A" id="3A" />
                        <label htmlFor="3A">3A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" disabled value="3B" id="3B" />
                        <label htmlFor="3B">3B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="3C" id="3C" />
                        <label htmlFor="3C">3C</label>
                      </li>

                    </ol>
                  </li>
                  <li className="row row--4">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" disabled value="4A" id="4A" />
                        <label htmlFor="4A">4A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="4B" id="4B" />
                        <label htmlFor="4B">4B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="4C" id="4C" />
                        <label htmlFor="4C">4C</label>
                      </li>

                    </ol>
                  </li>
                  <li className="row row--5">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="5A" id="5A" />
                        <label htmlFor="5A">5A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="5B" id="5B" />
                        <label htmlFor="5B">5B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" disabled value="5C" id="5C" />
                        <label htmlFor="5C">5C</label>
                      </li>

                    </ol>
                  </li>
                  <li className="row row--6">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" disabled value="6A" id="6A" />
                        <label htmlFor="6A">6A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="6B" id="6B" />
                        <label htmlFor="6B">6B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="6C" id="6C" />
                        <label htmlFor="6C">6C</label>
                      </li>

                    </ol>
                  </li>
                  <li className="row row--7">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="7A" id="7A" />
                        <label htmlFor="7A">7A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" disabled value="7B" id="7B" />
                        <label htmlFor="7B">7B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" disabled value="7C" id="7C" />
                        <label htmlFor="7C">7C</label>
                      </li>

                    </ol>
                  </li>
                  <li className="row row--8">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="8A" id="8A" />
                        <label htmlFor="8A">8A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" disabled value="8B" id="8B" />
                        <label htmlFor="8B">8B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="8C" id="8C" />
                        <label htmlFor="8C">8C</label>
                      </li>

                    </ol>
                  </li>
                  <li className="row row--9">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="9A" id="9A" />
                        <label htmlFor="9A">9A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" disabled value="9B" id="9B" />
                        <label htmlFor="9B">9B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" disabled value="9C" id="9C" />
                        <label htmlFor="9C">9C</label>
                      </li>

                    </ol>
                  </li>
                  <li className="row row--10">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="10A" id="10A" />
                        <label htmlFor="10A">10A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="10B" id="10B" />
                        <label htmlFor="10B">10B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="10C" id="10C" />
                        <label htmlFor="10C">10C</label>
                      </li>
                    </ol>
                  </li>
                </ol>
              </form>
            </div>
          </div>
          <div className="column1">
          <Table>
  
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Airlines</TableHead>
      <TableHead>From</TableHead>
      <TableHead>To</TableHead>
      <TableHead className="text-right">Price</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">{flight.airlines}</TableCell>
      <TableCell>{flight.from}</TableCell>
      <TableCell>{flight.to}</TableCell>
      <TableCell className="text-right">₹ {flight.fare}</TableCell>
    </TableRow>
  </TableBody>
</Table>

            </div>
          <div className="column2">
          
              
            <div className="seatInfo">
              <form className="form-group">
                {renderPassengerData(seatNumber)}
              </form>              
                <div className='flex justify-center '>      
                
   
                <button onClick={ handleRemovePassenger }>remove</button>
                <button onClick={e => handleSubmitDetails(e)} className="btn btn-info seatBT">
                                Confirm Details
                            </button>
                            <Link to={"/payment"}>
                            <Button></Button>
                            </Link>
                
                
                
              </div>
              <div >

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Deck