import Head from 'next/head'
import React,{useRef,useEffect} from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import bio from '../public/bio.jpg'
import butt from '../public/background.jpg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Expand from '@mui/icons-material/ExpandMore'
import Shopping from '@mui/icons-material/ShoppingCartCheckout'
import { IconButton,Chip,Button } from '@mui/material'
import AttachMoney  from '@mui/icons-material/AttachMoney'
import women from '../public/women.png'
import romance from '../public/romance.png'
import suspense from '../public/crime.png'
import disavowed from '../public/disavowed.png'
import fiction from '../public/book.png'
import exile from '../public/exile.jpg'
// import author from '../public/author.png'
// import author2 from '../public/author2.png'
import Contact from '../components/contact'
import axios from 'axios'
import Navbar from '../components/navbar'
import client from '../components/client'
import HomeCard from '../components/homeCard'
import Footer from '../components/footer'
import qs from 'qs'



export default function Home({posts}) {

  const booksRef=useRef()
  const contactRef=useRef()

  const booksScroll=()=>booksRef.current.scrollIntoView()
  const contactScroll=()=>contactRef.current.scrollIntoView()
  //workRef.current.scrollIntoView()

  const query = qs.stringify({ 
    populate: '*',
    fields: '*',
    publicationState: 'live',
    locale: ['en',],
  }, {
    encodeValuesOnly: true, // prettify url
  });

  // useEffect(()=>{
  //   axios.get(`http://localhost:1337/api/articles?${query}`)
  //   .then((res)=>{
  //     console.log('test')
  //     console.log(res.data.data.slice(0,3))
  //   })
  // },[])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-[#5274A6] '>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

         
          
        <div className=' hero h-[225px]  md:h-[600px] bg-cover md:bg-contain md:col-span-3'>
          <div className='p-9 md:h-[100%]' style={{backgroundColor:'rgba(0,0,0,0.3)',}}>
            
        <div className='mt-[-30px] md:mt-[-50px]'>
            <Navbar books={booksScroll} contact={contactScroll} />
          </div>
        
          
         <div className=' grid grid-cols-5'>
         {/* <div className=' col-span-1 grid md:justify-end'>
            <Image width={100} height={100} src={author2} />
          </div> */}

          <div className='col-span-4'>
          {/* <h1 className='md:text-7xl md:mt-0 mt-[20px] text-2xl  text-white'>
            Uju the storyteller
          </h1> */}
          <p className='text-slate-100 font-bold md:text-2xl mt-6'>
            A keen observer of human interest happenings from different parts of the world.
          </p>
          </div>
         </div>


        
        
          </div>
        </div>


        <div className='grid md:col-span-1  md:pl-0  md:h-0 h-[600px]'>
          <h4 className='text-center text-2xl font-semibold text-white md:m-0 m-6 mt-[20px] md:mt-0'>
            Recent posts
          </h4>
        <div className='md:mt-[1px] mt-[-180px] grid  md:grid-rows-2 gap-8 justify-items-center  '>
          {/* <div className='rounded shadow-md w-[280px] h-[200px] bg-[#9BAFCD]'>

          </div>

          <div className='rounded shadow-md w-[280px] h-[200px] bg-[#9BAFCD]'>

          </div> */}
          {
                posts.map((data)=>(
                  <div className='mb-10'>
                    <HomeCard title={data.attributes.title} body={data.attributes.description} id={data.id} image={data.attributes.image.data.attributes.url} slug={data.attributes.slug} date={data.attributes.publishedAt} />
                  </div>
                ))
              }
        </div>
        </div>
        
      
        </div>


        <div className='bg-[#2D5797] p-8'>

        <h3 className='text-center text-white text-2xl m-9'>
            About Grace
          </h3>

        
        <div className='grid  grid-cols-1 md:grid-cols-4 justify-center  m:my-0 my-10'>

<div className='pi md:grid md:justify-end md:mx-8 m:m-0 md:col-span-2  rounded'>
  <Image className='rounded' src={bio} width={500} height={400} layout='intrinsic' />
</div>

<div className=' md:ml-[-50px] md:mx-8  md:col-span-2 justify-items-center md:grid md:place-self-center'>
  <div className='bg-[#9BAFCD] md:w-[400px] md:h-150 md:rounded-md rounded-b-md '>
  <p className='md:p-8 p-3'>
    Grace is a foremost Sociologist and An Anthropologist.
                 She is interested in gender-related issues. She is a practising Attorney,
                 a solicitor and an Advocate. A keen observer of human rights and social justice. Grace a natural storyteller,
                 believes she has more  than a thousand stories running amok in her head. She devotes her spare time between Breast
                 and Cervical Cancer advocacy, and her Garden
    </p>
  </div>
</div>

</div>
        </div>


        <div className='justify-items-center py-10 grid md:grid-cols-4 grid-cols-2 gap-4'>
            <div className=' md:w-[200px] md:h-[200px] w-[150px] h-[150px] md:col-span-1 bg-[#2D5797] pt-4 px-4 md:px-12 md:pt-8 grid place-self-center rounded-md shadow-md'>
            <Image layout='intrinsic' width={100} height={100} src={fiction} />
            <p className='p-0 text-center text-white'>
              General fiction
            </p>
            </div>

            <div className='md:w-[200px] md:h-[200px] w-[150px] h-[150px] md:col-span-1  bg-[#9BAFCD] pt-4 px-4 md:px-12 md:pt-8 grid place-self-center rounded-md shadow-md'>
              <Image layout='intrinsic' width={100} height={100} src={women} />
              <p className='p-0 text-center'>
              Women fiction
            </p>
            </div>

            <div className='md:w-[200px] md:h-[200px] w-[150px] h-[150px] md:col-span-1 md:bg-[#2D5797] bg-[#9BAFCD] pt-4 px-2 md:px-10 md:pt-8 grid place-self-center rounded-md shadow-md'>
            <Image layout='intrinsic' width={100} height={100} src={suspense} />
            <p className='p-0 text-center text-white '>
              Suspense
            </p>
            </div>

            <div className='md:w-[200px] md:h-[200px] w-[150px] h-[150px] md:col-span-1 bg-[#2D5797] md:bg-[#9BAFCD] pt-4 px-4 md:px-12 md:pt-8 grid place-self-center  rounded-md shadow-md'>
            <Image layout='intrinsic' width={100} height={100} src={romance} />
            <p className='p-0 text-center text-black'>
              Romance
            </p>
            </div>

        </div>

        <div ref={booksRef} className='bg-[#9BAFCD] my-8 py-6'>

        <h3 className='text-center text-2xl m-9'>
            Her most recent work
          </h3>

        <div className='grid md:grid-cols-3 grid-cols-1 justify-items-center '>

            
<div className='w-[90%] md:w-[330px] md:h-[300px] h-[300px] md:col-span-1 bg-[#2D5797] grid grid-cols-2 my-6 m:m-0 rounded-md shadow-md'>
    <Image className='rounded-tl-md col-span-1' src={butt} width={150} height={200} layout='intrinsic' />
       <div>
         <h3 className='text-xl py-2 px-4 text-white'>
           Gone with the Butterfly
         </h3>
       <p className='col-span-1 m:text-base text-sm p-2 text-white'>

Betina has seen it all. Crushing poverty, beaten and marred by a jealous boyfriend who caught her with a man she met through one of the Escort Service providers,

</p>
       </div>

      <div className='col-span-2 rounded-b-md bg-blue-700'>
      
      <Chip className='bg-blue-400 w-[100px] m-2' icon={<Image layout='intrinsic' width={50} height={50} src={women} />} label='Women fiction'  />

       <Chip className='bg-blue-400 w-[100px] m-2' icon={<AttachMoney style={{color:'white'}}/>} label='0.99'  />
      
      <IconButton href='https://www.amazon.co.uk/dp/B093G3CNV3' className='bg-blue-400 rounded-md h-[30px] w-[70px] '>
      <Shopping />
      </IconButton>
    </div>
    
</div>


<div className='w-[90%] md:w-[330px] md:h-[300px] h-[300px] md:col-span-1 bg-[#2D5797] grid grid-cols-2 my-6 m:m-0 rounded-md shadow-md'>
    <Image className='rounded-tl-md col-span-1' src={exile} width={150} height={200} layout='intrinsic' />
       <div>
         <h3 className='text-xl mb-7 py-2 px-4 text-white'>
           House of exile
         </h3>
       <p className='col-span-1 m:text-base text-sm p-2 text-white'>

Betina has seen it all. Crushing poverty, beaten and marred by a jealous boyfriend who caught her with a man she met through one of the Escort Service providers,

</p>
       </div>

      <div className='col-span-2 rounded-b-md bg-blue-700'>
      
      <Chip className='bg-blue-400 w-[100px] m-2' icon={<Image layout='intrinsic' width={50} height={50} src={women} />} label='Women fiction'  />

       <Chip className='bg-blue-400 w-[100px] m-2' icon={<AttachMoney style={{color:'white'}}/>} label='0.99'  />
      
      <IconButton href='https://www.amazon.com/dp/B097RYBYP2' className='bg-blue-400 rounded-md h-[30px] w-[70px] '>
      <Shopping />
      </IconButton>
    </div>
    
</div>


<div className='w-[90%] md:w-[330px] m:h-[300px] h-[300px] md:col-span-1 bg-[#2D5797] grid grid-cols-2 my-6 m:m-0 rounded-md shadow-md'>
    <Image className='rounded-tl-md col-span-1' src={disavowed} width={150} height={200} layout='intrinsic' />
       <div>
         <h3 className='text-xl mb-7 py-2 px-4 text-white'>
           Disavowed
         </h3>
       <p className='col-span-1 m:text-base text-sm p-2 text-white'>

Betina has seen it all. Crushing poverty, beaten and marred by a jealous boyfriend who caught her with a man she met through one of the Escort Service providers,

</p>
       </div>

      <div className='col-span-2 rounded-b-md bg-blue-700'>
      
      <Chip className='bg-blue-400 w-[100px] m-2' icon={<Image layout='intrinsic' width={50} height={50} src={women} />} label='Women fiction'  />

       <Chip className='bg-blue-400 w-[100px] m-2' icon={<AttachMoney style={{color:'white'}}/>} label='0.99'  />
      
      <IconButton href='https://www.amazon.co.uk/dp/B093G3CNV3' className='bg-blue-400 rounded-md h-[30px] w-[70px] '>
      <Shopping />
      </IconButton>
    </div>
    
</div>

</div>

<div ref={contactRef}>
  <Contact />
</div>
        </div>
      </main>
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
  const posts=data.data.slice(0,2)
  
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