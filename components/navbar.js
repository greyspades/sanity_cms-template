import React from 'react'
import { Button } from '@mui/material'

const Navbar = (props) => {
  const {books,contact}=props
    return (
        <div className='grid justify-end'>
            <div className='grid grid-cols-5 md:grid-cols-4 px-3 py-1 justify-end  md:my-9 justify-items-end '>
            <p className='md:mr-[30px] md:ml-0 ml-[-20px] md:col-span-1 col-span-2 text-xl md:text-3xl text-white font-bold'>
              Uju the Storyteller
            </p>
              
            <Button style={{color:'white'}} href='/' className='text-white md:text-md hover:text-blue-500 md:mr-0   w-[70px] md:mx-4 h-[40px] bg-[#9BAFCD] p-2'>
              Home
            </Button>

            <Button style={{color:'white'}} href='/main_blog' className='text-white md:text-md hover:text-blue-500 md:mr-0   w-[70px] md:mx-4 h-[40px] bg-[#9BAFCD] p-2'>
              Blog
            </Button>

            <Button href='/' style={{color:'white'}} onClick={books} className='text-white md:text-md hover:text-blue-500 md:mr-0   w-[70px] md:mx-4 h-[40px] bg-[#9BAFCD] p-2'>
              Books
            </Button>

            {/* <Button className='text-white md:text-md hover:text-blue-500'>
              Other
            </Button> */}

            {/* <Button href='/' style={{color:'white'}} onClick={contact} className='text-white md:text-md hover:text-blue-500'>
              Contact
            </Button> */}
            
          </div>
        </div>
    )
}

export default Navbar
