import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Login from './components/Login'
import Flights from './components/Flights'
import Forgetpassword from './pages/Forgetpassword'
import Signup from './pages/Signup'
import Deck from './components/Deck'
import Payments from './components/Payment'
import TicketPage from './components/Ticket/TicketPage'


export default function Home() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/flights" element={<Flights />} />
          <Route path='/forgetpassword' element={<Forgetpassword />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/flights/:id' element={<Deck />} />
          <Route path='/payment' element={<Payments />} />
          <Route path='/getTicket' element={<TicketPage />} />
        </Routes>
      </Router>
    </div>




  )
}
