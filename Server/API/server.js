const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 5000;
//middleware for post and get request to json
app.use(express.json());

//route_initilization
app.use('/api/itemdetails',require('./Routes-Blockchain/Itemdetails'));
app.get('/',(req,res)=>{
    res.json("hola");
})
app.listen(PORT,()=>{
    console.log("server is been hosted on ",PORT)
})