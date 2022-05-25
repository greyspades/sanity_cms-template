import client from '../../components/client'
import React,{useEffect,useState} from 'react'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import Navbar from '../../components/navbar'
import { Button, Divider, TextField, InputAdornment, Input, CircularProgress } from '@mui/material'
import Card from '../../components/card'
import Person from '@mui/icons-material/Person'
import Mail from '@mui/icons-material/Email'
import Comment from '@mui/icons-material/Comment'
import { Formik } from 'formik'
import Email from '@mui/icons-material/Email'
import Axios from 'axios'
import Footer from '../../components/footer'
import qs from 'qs'
import { ArticleSharp } from '@mui/icons-material'
import postcss from 'postcss'



const Post = ({post}) => {

  const [loading,setLoading]=useState({
    pending:false,
    done:false
})
const [similar,setSimilar]=useState()

const query = qs.stringify({ 
  populate: '*',
  fields: '*',
  publicationState: 'live',
  locale: ['en',],
}, {
  encodeValuesOnly: true, // prettify url
});

useEffect(()=>{
  Axios.get(`https://storyteller-strapi.herokuapp.com/api/articles?${query}`)
  .then((res)=>{
    setSimilar(res.data.data)
  })
  console.log(post.id)
},[])


  const {attributes:data}=post

  // const getImage=(src)=>{
  //   if(post){
  //     return imageUrlBuilder(client)?.image(src)
  //   }
  // }
  
  return (
    <div >
      <article className='bg-[#5274A6] md:mt-[-30px] p-3 md:p-6'  >

<div>
<Navbar />
</div>

  <div className='grid md:grid-cols-4 md:gap-4'>
  
  <div className='bg-[#9BAFCD] md:px-10 md:p-6 md:col-span-3 rounded-lg'>
  
  <div className='justify-center grid'>
      <img className='w-[500px] h-[200px] md:w-[950px] md:h-[450px]' src={`http://localhost:1337${data?.image.data.attributes.url}`} />
  </div>

  <h1 className='md:text-3xl text-2xl font-bold m-4'>
    {data?.title}
  </h1>

  <div className='text-xl m-6'>
    {data?.content}
  </div>
  
  <Divider className='my-6' style={{backgroundColor:'#5274A6'}} variant='fullWidth' />

  <div className='p-6 px-8'>
    
    <h3 className='text-start text-2xl mb-6 font-bold'>
      Comment
    </h3>
    <form>
      <Formik initialValues={{name:'',email:'',comment:''}} onSubmit={(value)=>{

          if(value.name && value.email && value.comment){
              setLoading({
                pending:true,
                done:false,
                
              })

              

              let data={
                id:post.id,
                info:{
                  author:{
                  name:value.name,
                  id:'1',
                  email:value.email,
                  avatar:'nill',
                  },
                  content:value.comment,
                  slug:post.id

                }
              }
              Axios.post('/api/comment',{data})
              .then((res)=>{
                console.log(res)
                if(res.data=='SUCCESS'){
                  setLoading({
                    pending:false,
                    done:false
                  })
                  alert('your comment has been submitted successfuly')
                }
                
              })
              .catch((err)=>{
                if(err){
                  console.log(err)
                  alert('A problem occured could not contact the server please check your internet connection and try again')
                }
              })
          }
          else {
            alert('Please fill out all input fields')
          }

      }}>
        {({handleSubmit,handleChange,values})=>(
          <div className='my-6'>
           <div className=' grid justify-center md:grid-cols-2'>
           <Input
                disableUnderline={true}
            //className='mail-input'
            placeholder='Name'
            className='bg-[#5274A6]  w-[300px]  rounded-md'
            type='text'
            value={values.name}
            onChange={handleChange('name')}
            startAdornment={<Person style={{color:'#9BAFCD'}} />}
        />

       <Input
                disableUnderline={true}
            //className='mail-input'
            placeholder='Email address'
            className='bg-[#5274A6] md:my-0 my-4 w-[300px] rounded-md'
            type='email'
            value={values.email}
            onChange={handleChange('email')}
            startAdornment={<Email style={{color:'#9BAFCD'}} />}
        />
           </div>

               <div className='mt-[40px]'>
               <TextField
                                className='bg-[#5274A6] my-6 rounded-md w-full'
                                multiline
                                rows={4}
                                type='text'
                                placeholder='Comment'
                                value={values.comment}
                                onChange={handleChange('comment')}
                                />

               </div>
               <div className='justify-center grid'>
                                    {
                                        !loading.pending && !loading.done
                                        ?
                                        <Button onClick={handleSubmit} className='bg-[#2D5797] text-white w-[80%] justify-self-center'>
                                        Send
                                       </Button>
                                       :
                                       loading.pending && !loading.done
                                       ?
                                       <CircularProgress />
                                       :
                                       null
                                    }
                                </div>
          </div>
        )}

      </Formik>
    </form>

  </div>

  </div>


  <div className='md:m-8 '>
    
    <div className=' grid justify-center md:h-[700px] md:w-[300px] md:mt-[-50px] rounded-lg md:p-4 '>
        {/* <Card /> */}
        <div>
          <p className='text-center text-2xl font-semibold text-white md:m-0 m-6 mt-[50px] md:mt-0'>
            Worth checking out
            </p>
        {
               similar ?
               similar.map((data)=>(
                <div className='mb-10 mt-4 grid'>
                  <Card title={data.attributes.title} body={data.attributes.description} id={data.id} image={data.attributes.image.data.attributes.url} slug={data.attributes.slug} date={data.attributes.publishedAt} />
                </div>
              ))
              :
              null
              }
        </div>
    </div>


  </div>



  </div>
</article>
<Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const query = qs.stringify({ 
    populate: '*',
    fields: '*',
    publicationState: 'live',
    locale: ['en',],
  }, {
    encodeValuesOnly: true, // prettify url
  });

  const strap=await fetch(`https://storyteller-strapi.herokuapp.com/api/articles`)

  const data=await strap.json()
  const path=data.data.map((item) => ({params: {slug:item.id.toString()}}))

  return {
    paths: path,
    //paths:paths,
    fallback: true,
  }
}


export async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    
    const { slug} = context.params
    
    const query = qs.stringify({ 
      populate: '*',
      fields: '*',
      publicationState: 'live',
      locale: ['en',],
    }, {
      encodeValuesOnly: true, // prettify url
    });
  
    const strap=await fetch(`https://storyteller-strapi.herokuapp.com/api/articles/${slug}?${query}`)
  
    const data=await strap.json()
    const post=data.data

    return {
      props: {
       
        post
      }
    }
  }
  
  export default Post
