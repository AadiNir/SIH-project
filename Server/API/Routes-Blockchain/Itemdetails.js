const express = require('express');
const router = express.Router();
const app = express();
const ethers=require('ethers');   

router.get('/',(req,res)=>{
    res.json("hola")
})

module.exports = router
