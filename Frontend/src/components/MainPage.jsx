
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const MainPage = () => {
       
    return (

        <body class=" h-screen md:flex bg-[url(components/f1.jpeg)] flex  space-x-4   items-center justify-center">
            <div class=" ..."></div>
            <div className='space-x-4'>
                <Link to='/login'>
                <Button>
                    User
                </Button> 
                </Link>
               
                
                <Link to='/admin/login'>
                <Button>
                    Admin
                </Button>
                </Link>
            </div>



        </body>


    )
}

export default MainPage