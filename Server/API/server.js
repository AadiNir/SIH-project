const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors);

//middleware for post and get request to json
app.use(express.json());

app.listen(3001,()=>{
    console.log("server is been hosted on 3001")
})