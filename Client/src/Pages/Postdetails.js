import React,{useEffect} from 'react'
import { useState } from 'react';
import { ethers } from 'ethers';
import {abi} from '../agro';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import '../Styles/form.css';
import "../Styles/form.jpg";

function Postdetails() {
    const[signeraddress,setsigneraddress]=useState("You haven't logged in yet");
    const[contract,setcontract]=useState();
    const[pendingadd,setpendingadd]= useState('');
    const[pending,setpending]= useState([]);


    const[quandity,setquanidty]= useState();
    const[price,setprice]= useState();
    const[inflation,setinflation]= useState();
    const[prodnam,setprodname]= useState('');

    const[bool,setbool]=useState(true);

    useEffect(()=>{

      iscontract();
    },[])
    async function iscontract(){
        try{
        const  provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", []);

        const signer =  provider.getSigner();
        const contractaddress =  '0x1E522651463375f440C58ED84002a95832E7916b'
        setcontract(new ethers.Contract(contractaddress,abi,signer))
        console.log(prodnam)


        setsigneraddress(signer.address);
        }catch(err){
            console.log(err.reason);
        }
    }
    const add= async (e)=>{
      e.preventDefault();
      try{
        await contract.initiate_order(pending,quandity,price,inflation,prodnam,[]);
        setbool(true);
      }catch(err){
        console.log(err);
      }
      }

    async function setq(e){
      e.preventDefault();
      pending.push(pendingadd);
      console.log(pending);

    }
  
  return (
    <div>
    <Navbar/>
    <form onSubmit={(e)=>add(e)} className='form1'>
    <input className='input-box' type='text' placeholder="Enter all of your distribution address in the format" onChange={e=>{setpendingadd(e.target.value)}} ></input>
    <button   className='btn1' onClick={e=>setq(e)}>+</button>
    <input className='input-box' type='text' placeholder="Enter all of your distribution address in the format" onChange={e=>{setpendingadd(e.target.value)}} ></input><br/><br/>
       
     

      <input className='input-box' type='number' placeholder='Enter the quantity in terms of Kg' onChange={e=>{setquanidty(e.target.value)}}></input><br/><br/>
      
      <input className='input-box' type='number' placeholder='Enter the price in terms of Rs'  onChange={e=>{setprice(e.target.value)}}></input><br/><br/>
      <input  className='input-box' type='number' placeholder='Enter the inflactuation percentage'  onChange={e=>{setinflation(e.target.value)}}></input><br/><br/>
      <input className='input-box' type='text' placeholder='Enter the Product Name'  onChange={e=>{setprodname(e.target.value)}}></input><br/><br/>

      <button  className='btn' type="submit">submit contract</button>
      <Modal open={bool} onclose={()=>setbool(false)} value={'You have successfully started the chain'}/>

      </form>
      
    </div>
  )
}

export default Postdetails

