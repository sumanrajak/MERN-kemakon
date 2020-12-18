const express = require("express");
const data = require("./deta.js");
const mongoose = require('mongoose')
const con_url='mongodb+srv://suman2:suman@cluster0.dd81x.mongodb.net/hutdb?retryWrites=true&w=majority'
 mongoose.connect(con_url,{
    
     useNewUrlParser:true,
     useUnifiedTopology:true
 })
 const db= mongoose.connection;
 db.once("open",()=>{
   console.log("db conected");})

const app= express();
const port=process.env.PORT || 3001
app.get('/',(req,res)=>{
    res.send('hi')
})
app.get('/api/products',(req,res)=>{
    res.send(data.product)
})






app.use(express.json());





app.listen(port,()=>{
    console.log( `server running at ${port}`);
})
