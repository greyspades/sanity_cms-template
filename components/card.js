import React,{useState} from 'react'
import Image from 'next/image'
import but from '../public/blog.jpg' 
import {Button,Typography } from '@mui/material'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../components/client'


const Card = (props) => {

    const {title,image,date,body,slug,id}=props

    

    // function urlFor (source) {
    //     return imageUrlBuilder(client).image(source)
    //   }
    const main_date=date.slice(0,10)
    //const url=slug.current
    return (
        <div className='grid  bg-[#9BAFCD] rounded-md shadow-md w-[300px] h-[300px]'>
            <img className='row-span-2 h-[140px] w-full'  src={`https://storyteller-strapi.herokuapp.com${image}`} />

               
            <div className='bg-[#2D5797] row-span-1 divide-y p-2 w-[300px] text-white h-[100px]'>
            <h3 className='text-xl mb-2  truncate ...'>
                    {
                        title
                    }
            </h3>
            <p className='h-[55px] text-white  overflow-hidden ...'>
            {/* <BlockContent
            className='mt-4 '
          blocks={body}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          {...client.config()}
        /> */}
            {body}
            </p>
            </div>
               <div className='mt-[5px] p-2 grid grid-cols-3'>
                <p>
                    {main_date}
                </p>

               <a 
      className='bg-[#2D5797] w-[100px] text-white text-center rounded-lg col-end-4'
       href={`/blog/${id}`}
       >
         
         
          Read more
       </a>
       
               </div>
            
        </div>
    )
}

export default Card
