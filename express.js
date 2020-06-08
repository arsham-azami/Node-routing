const expressfile = ()=>{

    const express =require('express')
    const app = express()
    app.listen(7000, ()=>{
        console.log("Hello guys i am friday and i am listening to port 6000")
    })

    app.use(express.static('html'))

   app.get('/user/:id/:full_name/:age', (req, res)=>{
       const userid = req.params.id
       const fullname = req.params.full_name
       const age = req.params.age

        let result =''
       for(let i=0; i<age; i++){
           result+=`<h1>user id :${userid}-full name:${fullname}-age:${age}</h1><br>`
        
       }
       res.send(result)
   })

}


module.exports= {expressfile}