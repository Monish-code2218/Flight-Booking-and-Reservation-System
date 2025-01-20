import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify'
import LoadingButton from "../LoadingButton";
import axios from 'axios'
const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await axios.post('https://flightbackend-2.onrender.com/signin', { email, password });
            localStorage.setItem('token', response.data.token);


            setTimeout(() => {
                toast.success(response.data.message);
                navigate('/admin/dashboard');
            }, 1200);

        } catch (error) {
            setIsLoading(false);
            toast.error('Login Failed');

        }
    }


    return (


        <section className="bg-gray-100 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen  lg:py-0">
                <a href="" className="flex items-center mb-6 text-2xl font-semibold bg-white text-gray-900 ">
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Admin Login
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input type="email" name="email" id="email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" value={password}
                                    onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />

                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <span className='font-semibold'>Click to copy</span>
                            <br />
                            <span className=' m-2'>Email:</span>
                            <span
                                className="text-indigo-600 cursor-pointer hover:text-indigo-700"
                                onClick={() => {
                                    navigator.clipboard.writeText("monishrao011@gmail.com");
                                    toast.success("Email copied to clipboard");
                                }}
                            > monishrao011@gmail.com</span>
                            <br />
                            <span className='m-2'>Pass:</span>
                            <span
                                className="text-indigo-600 cursor-pointer hover:text-indigo-700"
                                onClick={() => {
                                    navigator.clipboard.writeText("monish@1230");
                                    toast.success("Password copied to clipboard");
                                }}
                            > monish@1230</span>

                            <LoadingButton

                                onclick={handleSubmit}
                                isLoading={isLoading}
                                text={"signin"}
                                style={
                                    "w-full text-white py-3 rounded-lg  transition-colors duration-300"
                                }
                            />
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}

export default Login