import React, { createContext, useContext, useState } from 'react'

const Authcontext = createContext()
export const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)


    const login = (userData, userRole) => {
        if (userData) {
            localStorage.setItem("userData", JSON.stringify(userData));

            setUser(userData);

        }
    };
    const logout = () => {
        localStorage.removeItem("userData");

        setUser(null);

    };


    return (
        <Authcontext.Provider value={{ user, login, logout }}>
            {children}
        </Authcontext.Provider>
    )
};

export const useAuth = () => useContext(Authcontext)


