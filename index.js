const express = require('express');

require('dotenv').config();
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hello");
})

// const options = {
//     'Name':'Sougata Bhowmick',
//     'Email':'sougata1381.be21@chitkara.edu.in',
// }
app.post('/data',(req,res)=>{
    let data = req.headers;
    res.json(data);
})
app.listen(process.env.PORT,()=>{
    console.log("Server started!!");
})