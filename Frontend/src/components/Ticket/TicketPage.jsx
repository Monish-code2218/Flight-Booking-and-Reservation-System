import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
'./TicketPage.css'
export default function TicketPage() {
	const getLocationData = () => {
		let from = localStorage.getItem("from")
		let to = localStorage.getItem("to")
		return (
			<div><p>From:  {from}</p><p>To:  {to}</p></div>
		)
	}

    const { id: _id } = useParams();
    const [flight, setFlight] = useState([]);


    const fetchFlight = async () => {
        try {
          const response = await axios.get(`https://flightbackend-1.onrender.com/flights/${_id}`)
          setFlight(response.data);
        } catch (error) {
          console.log(error)
    
        }
      }
    
    
      useEffect(() => {
        fetchFlight();
      }, [])
    

	const getPassengerData = () => {
		let nameArray = localStorage.getItem("nameData")
		let names = JSON.parse(nameArray)
		return names.map((name, idx) => {
			return (
				<div key={idx}>
					<p className="names">{name}</p>
				</div>
			)
		})
	}

	const getSeatNumbers = () => {
		let noArray = localStorage.getItem("reservedSeats")
		let arr = JSON.parse(noArray)
		return arr.map((element, idx) => {
			return (
				<div key={idx}>
					<p className="seatNo">{element}</p>
				</div>
			)
		})
	}

	const getIdNumber = () => {
		let tokenData = localStorage.getItem("selectedBusId")
		return (
			<p className="idData">
				{tokenData}
			</p>
		)
	}

	const getDateValue = () => {
		let dat = localStorage.getItem("date")
		return <p>On: {dat}, 10 AM (Hourly commute)</p>
	}

	return (
		<div className="">
			<div>
				{/* component */}
				
				<style>
					{`
					.barcode {
						left: 50%;
						box-shadow: 1px 0 0 1px, 5px 0 0 1px, 10px 0 0 1px, 11px 0 0 1px, 15px 0 0 1px, 18px 0 0 1px, 22px 0 0 1px, 23px 0 0 1px, 26px 0 0 1px, 30px 0 0 1px, 35px 0 0 1px, 37px 0 0 1px, 41px 0 0 1px, 44px 0 0 1px, 47px 0 0 1px, 51px 0 0 1px, 56px 0 0 1px, 59px 0 0 1px, 64px 0 0 1px, 68px 0 0 1px, 72px 0 0 1px, 74px 0 0 1px, 77px 0 0 1px, 81px 0 0 1px, 85px 0 0 1px, 88px 0 0 1px, 92px 0 0 1px, 95px 0 0 1px, 96px 0 0 1px, 97px 0 0 1px, 101px 0 0 1px, 105px 0 0 1px, 109px 0 0 1px, 110px 0 0 1px, 113px 0 0 1px, 116px 0 0 1px, 120px 0 0 1px, 123px 0 0 1px, 127px 0 0 1px, 130px 0 0 1px, 131px 0 0 1px, 134px 0 0 1px, 135px 0 0 1px, 138px 0 0 1px, 141px 0 0 1px, 144px 0 0 1px, 147px 0 0 1px, 148px 0 0 1px, 151px 0 0 1px, 155px 0 0 1px, 158px 0 0 1px, 162px 0 0 1px, 165px 0 0 1px, 168px 0 0 1px, 173px 0 0 1px, 176px 0 0 1px, 177px 0 0 1px, 180px 0 0 1px;
						display: inline-block;
						transform: translateX(-90px);
					}
					`}
				</style>
				<div className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover">
					
					<div className="absolute   opacity-80 inset-0 z-0"></div>
					<div className="max-w-md w-full h-full mx-auto z-10 bg-blue-900 rounded-3xl">
						<div className="flex flex-col">
							<div className="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
								<div className="flex-none sm:flex">
									<div className=" relative h-32 w-32   sm:mb-0 mb-3 hidden">
										
										
									</div>
									<div className="flex-auto justify-evenly">
										<div className="flex items-center justify-between">
											<div className="flex items-center  my-1">
												<span className="mr-3 rounded-full bg-white w-8 h-8">
													<img src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&fakeurl=1" className="h-8 p-1" alt="Airindia" />
												</span>
												<h2 className="font-medium">{flight.airlines}</h2>
											</div>
											<div className="ml-auto text-blue-800">{flight.name}</div>
										</div>
										<div className="border-b border-dashed my-5"></div>
										<div className="flex items-center">
											<div className="flex flex-col">
												<div className="flex-auto text-xs text-gray-400 my-1">
													<span className="mr-1 "></span><span></span>
												</div>
												<div className="w-full flex-none text-lg text-blue-800 font-bold leading-none">{flight.from}</div>
												<div className="text-xs"></div>
											</div>
											<div className="flex flex-col mx-auto">
												<img src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&fakeurl=1" className="w-20 p-1" alt="Airindia" />
											</div>
											<div className="flex flex-col ">
												<div className="flex-auto text-xs text-gray-400 my-1">
													<span className="mr-1"></span><span></span>
												</div>
												<div className="w-full flex-none text-lg text-blue-800 font-bold leading-none">{flight.to}</div>
												<div className="text-xs"></div>
											</div>
										</div>
										<div className="border-b border-dashed my-5 pt-5">
											<div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
											<div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
										</div>
										<div className="flex items-center mb-5 p-5 text-sm">
											<div className="flex flex-col">
												<span className="text-sm">Flight</span>
												<div className="font-semibold">{flight.name}</div>
											</div>
											<div className="flex flex-col ml-auto">
												<span className="text-sm">Gate</span>
												<div className="font-semibold">B3</div>
											</div>
										</div>
										<div className="flex items-center mb-4 px-5">
											<div className="flex flex-col text-sm">
												<span className="">Board</span>
												<div className="font-semibold">11:50AM</div>
											</div>
											<div className="flex flex-col mx-auto text-sm">
												<span className="">Departs</span>
												<div className="font-semibold">11:30Am</div>
											</div>
											<div className="flex flex-col text-sm">
												<span className="">Arrived</span>
												<div className="font-semibold">2:00PM</div>
											</div>
										</div>
										<div className="border-b border-dashed my-5 pt-5">
											<div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
											<div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
										</div>
										<div className="flex items-center px-5 pt-3 text-sm">
											<div className="flex flex-col">
												<span className="">Passenger</span>
												<div className="font-semibold">{getPassengerData()}</div>
											</div>
											<div className="flex flex-col mx-auto">
												<span className="">Class</span>
												<div className="font-semibold">Economic</div>
											</div>
											<div className="flex flex-col">
												<span className="">Seat</span>
												<div className="font-semibold">{getSeatNumbers()}</div>
											</div>
										</div>
										<div className="flex flex-col py-5  justify-center text-sm ">
											<h6 className="font-bold text-center">Boarding Pass</h6>
											<div className="barcode h-14 w-0 inline-block mt-4 relative left-auto"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
	)
}

