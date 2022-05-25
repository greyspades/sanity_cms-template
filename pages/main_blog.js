import React,{useState,useEffect} from 'react'
import Navbar from '../components/navbar'
import Card from '../components/card'
import client from '../components/client'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import {Button} from '@mui/material'
import Footer from '../components/footer'
import qs from 'qs'


const Blog = ({posts}) => {
  function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

  const getImage=(src)=>{
    return imageUrlBuilder(client).image(src)
  }

    return (
        <div className='bg-[#5274A6] grid grid-rows-1'>
            <div className='blog-hero h-[400px] bg-no-repeat md:bg-repeat md:bg-cover bg-contain md:h-[550px] md:mt-[-150px]'>
                <div className='md:mt-[120px] bg-[#2D5797] h-[80px] md:h-[90px] pt-1 '>
                
                <Navbar  />
                
                </div>
            </div>
            <div className='text-center text-2xl font-semibold text-white md:m-0 m-6 mt-[50px] md:mt-8'>
              Blog posts
            </div>
            <div className='grid md:grid-cols-3 justify-items-center justify-center  md:mt-10 md:p-8'>
            
              {/* {
                posts.map(({title='',slug='',body,mainImage,_createdAt,_id})=>slug &&(
                  <div key={_id} className='mb-10'>
                    <Card title={title} slug={slug.current} body={body} image={mainImage} date={_createdAt} id={_id} />

                  </div>
                ))
              } */}
              {
                posts.map((data)=>(
                  <div className='mb-10'>
                    <Card title={data.attributes.title} body={data.attributes.description} id={data.id} image={data.attributes.image.data.attributes.url} slug={data.attributes.slug} date={data.attributes.publishedAt} />
                  </div>
                ))
              }
            </div>
            <div>
              <Footer />
            </div>
        </div>
    )
}

export async function getStaticProps() {

  const query = qs.stringify({ 
    populate: '*',
    fields: '*',
    publicationState: 'live',
    locale: ['en',],
  }, {
    encodeValuesOnly: true, // prettify url
  });

  const strap=await fetch(`https://storyteller-strapi.herokuapp.com/api/articles?${query}`)

  const data=await strap.json()
  const posts=data.data
   console.log(posts[0].attributes.image.data.attributes.url)
    // const posts = await client.fetch(`
    //   *[_type == "post" ]{_id,_createdAt,body,mainImage,title,slug}[0...4]
    // `)

    //console.log(posts[0]._createdAt.slice(0,10))
    return {
      props: {
        posts
      }
    }
}


export default Blog
