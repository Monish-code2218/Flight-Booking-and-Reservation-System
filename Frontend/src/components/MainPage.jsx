
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const MainPage = () => {
       
    return (

        <body class="bg-gradient-to-b from-gray-100 to-gray-100 flex  space-x-4   items-center justify-center h-screen ">
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