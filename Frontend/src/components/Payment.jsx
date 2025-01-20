import React, { useState, useEffect } from 'react'
import Card from 'react-credit-cards'
import './PaymentTab.css'
import axios from 'axios'
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData
} from './utils'
import 'react-credit-cards/es/styles-compiled.css'
import { Button } from './ui/button'
import { Link, useParams } from 'react-router-dom'
import Flights from './Flights'


const Payment = () => {
    const { id: _id } = useParams();
    const [flights, setFlight] = useState([]);
    const [state, setState] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        issuer: '',
        focused: '',
        formData: '',
        token: ''
    });

    const handleCallback = ({ issuer }, isValid) => {
        if (isValid) {
            setState(prevState => ({ ...prevState, issuer }));
        }
    }

    const handleInputFocus = ({ target }) => {
        setState(prevState => ({
            ...prevState,
            focused: target.name
        }));
    }

    const handleInputChange = ({ target }) => {
        if (target.name === 'number') {
            target.value = formatCreditCardNumber(target.value);
        } else if (target.name === 'expiry') {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === 'cvc') {
            target.value = formatCVC(target.value);
        }

        setState(prevState => ({
            ...prevState,
            [target.name]: target.value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { issuer } = state;
        const formData = [...e.target.elements]
            .filter(d => d.name)
            .reduce((acc, d) => {
                acc[d.name] = d.value;
                return acc;
            }, {});

        setState(prevState => ({ ...prevState, formData }));
        e.target.reset();
    }


    const renderNamesOfPassenger = () => {
        let passArray = localStorage.getItem('nameData');
        if (passArray) {
            let nameArray = JSON.parse(passArray);
            return nameArray.map((name, idx) => {
                return <p key={idx}> {name} </p>
            });
        }
    }

    const renderSeatNumbers = () => {
        let seatArray = localStorage.getItem('reservedSeats');
        if (seatArray) {
            let seaArr = JSON.parse(seatArray);
            return seaArr.map((seat, idx) => {
                return <p key={idx}> {seat} </p>
            });
        }
    }

    const fetchFlight = async () => {
        try {
            const response = await axios.get(`https://flightbackend-2.onrender.com/flights/${_id}`)
            setFlight(response.data);
        } catch (error) {
            console.log(error)

        }
    }


    useEffect(() => {
        fetchFlight();
    }, [])


    const getSumTotal = () => {
        let count = 0;
        let tax = 150;
        let seatArray = localStorage.getItem('reservedSeats');
        if (seatArray) {
            let seaArr = JSON.parse(seatArray);
            for (let i = 0; i < seaArr.length; i++) {
                count++;
            }
            return (
                <div>
                    <hr className='hr3' />
                    <p> {1000 * count} </p> <p> +{tax} </p> <p> {1000 * count + tax} </p>{' '}
                </div>
            );
        }
    }

    const {
        name,
        number,
        expiry,
        cvc,
        focused,
        issuer,
        token
    } = state;

    return (
        <div className='paym bg-gray-100 p-10'>
            <div className='flex items-center'>
                <div key='Payment'>
                    <div className='App-payment cl-1'>
                        <p className='pPayment'> Enter Credit card details </p>{' '}
                        <br />

                        <Card number={number}
                            name={name}
                            expiry={expiry}
                            cvc={cvc}
                            focused={focused}
                            callback={handleCallback} />{' '}
                        <form className='credit-form'
                            // ref={c => (formRef = c)}
                            onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <input type='tel'
                                    name='number'
                                    className='frm-ctrl'
                                    placeholder='Card Number'
                                    pattern='[\d| ]{16,22}'
                                    required onChange={handleInputChange}
                                    onFocus={handleInputFocus} />{' '}
                            </div>{' '}
                            <div className='form-group'>
                                <input type='text'
                                    name='name'
                                    className='frm-ctrl'
                                    placeholder='Name'
                                    required onChange={handleInputChange}
                                    onFocus={handleInputFocus} />{' '}
                            </div>{' '}
                            <div className='form-group'>
                                <input type='tel'
                                    name='expiry'
                                    className='frm-ctrl'
                                    placeholder='Valid Thru'
                                    pattern='\d\d/\d\d'
                                    required onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                />{' '}
                            </div>{' '}
                            <div className='form-group'>
                                <input type='tel'
                                    name='cvc'
                                    className='frm-ctrl cvc'
                                    placeholder='CVC'
                                    pattern='\d{3,4}'
                                    required onChange={handleInputChange}
                                    onFocus={handleInputFocus} />{' '}
                            </div>{' '}
                            <input type='hidden'
                                name='issuer'
                                value={issuer}
                            />{' '}

                            <div className=''>
                            
                            
                                    <div>
                                        <Link to={`/payment/getTicket/${_id}`}>
                                            <Button>
                                                PAY
                                            </Button>
                                        </Link>
                                    </div>
                             
                
                            </div>
                        </form>{' '}
                    </div>{' '}
                </div>{' '}
                <div className='columnTwo p-10 '>
                    <h3 className='w-full  text-center text-gray-900 text-2xl font-bold font-manrope leading-9'> KABOOM Airlines </h3>{' '}
                    <div>
                        <p className='w-full  text-center text-gray-900 text-xl  font-manrope leading-9'> BOOKING DETAILS </p>{' '}
                        <div className='row'>
                            <div className='col-6 pt'>
                                <p className='hdng'>  </p> <hr className='hr3' />
                                <p className='hdng'> Date:    {flights.date} </p> <p className='hdng'> From:    {flights.from} </p>
                                <p className='hdng'> To:       {flights.to}  </p> 
                                <p className='hdng'> Passengers : {renderNamesOfPassenger()} </p>{' '}  
                                <p className='hdng'> Ticket price :           {flights.fare} </p>{' '}
                                <p className='hdng'> Tax : 12% </p>{' '}
                                <p className='hdng'> Total Sum :{flights.fare}  </p>{' '} </div>{' '}
                            <div className='col-6'>
                                <br></br>
                                <hr className='hr3' />
                              
                                <hr className='hr3' />
                                <p className='hdng'>Seat No {' '} </p> {renderSeatNumbers()}
                                
                            </div>{' '}
                        </div>{' '}
                    </div>{' '}
                </div>{' '}
            </div>{' '}
        </div>
    );}


export default Payment;