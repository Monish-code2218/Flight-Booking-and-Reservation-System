import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Hero from './components/Hero'
import Login from './components/Login'
import Flights from './components/Flights'
import Forgetpassword from './pages/Forgetpassword'
import Signup from './pages/Signup'
import Deck from './components/Deck'
import Payments from './components/Payment'
import TicketPage from './components/Ticket/TicketPage'
import AdminLogin from './components/Admin/AdminLogin'
import Fights from './components/Admin/Fights'
import MainPage from './components/MainPage';
import Admin from './components/Admin/Admin';
import MyBookings from './components/MyBookings'

export default function Home() {
  return (
    <div>
        <Router>
        
        <Routes>
        <Route path='/' element={<MainPage />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/flights" element={<Flights />} />
          <Route path='/forgetpassword' element={<Forgetpassword />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/flights/:id' element={<Deck />} />
          <Route path='/payment/:id' element={<Payments />} />
          <Route path='/payment/getTicket/:id' element={<TicketPage />} />
          <Route path='/admin/dashboard' element={<Admin />} />
          <Route path='/admin/flights' element={<Fights />} />
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/MyBookings/:id' element={<MyBookings />} />
        </Routes>
      </Router>
    </div>




  )
}
