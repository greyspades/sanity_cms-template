

const comment=async(req,res)=>{
    let data=req.body.data
    const options={
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data.info),
    }
    
    fetch(`https://storyteller-strapi.herokuapp.com/api/comments/api::article.article:${data.id}`,options)
      .then((info)=>{
          console.log(info)
          res.send('SUCCESS')
          console.log('commented')
      })
    .catch((err)=>{
        console.log(err)
        res.send(err)
    })
}
export default comment