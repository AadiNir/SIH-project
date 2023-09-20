import React,{useEffect} from 'react'
import { useState } from 'react';
import { ethers } from 'ethers';
import {abi} from '../agro';


function Postdetails() {
    const[signeraddress,setsigneraddress]=useState("You haven't logged in yet");
    const[contract,setcontract]=useState();
    const[pendingadd,setpendingadd]= useState([]);
    const[quandity,setquanidty]= useState();
    const[price,setprice]= useState();
    const[inflation,setinflation]= useState();
    const[prodnam,setprodname]= useState('');



    useEffect(()=>{

      iscontract();
    },[])
    async function iscontract(){
        try{
        const  provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", []);

        const signer =  provider.getSigner();
        const contractaddress =  '0xE5716b256306c44f63BF9d45d097871A48c9d70A'
        setcontract(new ethers.Contract(contractaddress,abi,signer))


        setsigneraddress(signer.address);
        }catch(err){
            console.log(err.reason);
        }
    }
    const add= async (e)=>{
      e.preventDefault();
      try{
        await contract.initiate_order(pendingadd,quandity,price,inflation,prodnam,[]);
      }catch(err){
        console.log(err);
      }
      }
    async function get(){
        const data=await contract.get_order(1);
        console.log(data.id.toString());

    }
  

  return (
    <div>
    <form onSubmit={(e)=>add(e)}>
      <input type='text' placeholder="Enter all of your distribution address in the format ['address1','address2'....]" onChange={e=>{setpendingadd(e.target.value)}}></input><br/>
      <input type='number' placeholder='enter the quandity in terms of Kg' onChange={e=>{setquanidty(e.target.value)}}></input><br/>
      <input type='number' placeholder='enter the price in terms of Rs'  onChange={e=>{setprice(e.target.value)}}></input><br/>
      <input type='number' placeholder='enter the inflactuation percentage'  onChange={e=>{setinflation(e.target.value)}}></input><br/>
      <input type='text' placeholder='enter the Product Name'  onChange={e=>{setprodname(e.target.value)}}></input><br/>

      <button  type="submit">submit contract</button>
      </form>
    </div>
  )
}

export default Postdetails

