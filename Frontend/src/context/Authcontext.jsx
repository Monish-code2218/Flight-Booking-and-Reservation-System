import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Authcontext = createContext()


export const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()


    const login = (userData) => {
        setUser(userData)
        navigate('/')
    }
    const logout = () => {
        localStorage.removeItem('token')
        setUser(null);
        navigate('/login')
    }


    return (
        <Authcontext.Provider value={{ user, login, logout }}>
            {children}
        </Authcontext.Provider>
    )
};

export const useAuth = () => useContext(Authcontext)


