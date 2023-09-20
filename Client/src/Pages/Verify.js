import React, { useEffect,useState } from 'react'
import Navbar from '../components/Navbar'
import { ethers} from 'ethers'
import {abi} from '../agro'
import Modal from '../components/Modal'

function Verify() {
    const[contractadd,setcontractadd]=useState();
    const[pendingaddress,setpendingadd]=useState("");
    const[userid,setuserid]=useState();
    const[inflation,setinflation]=useState();
    const[bool,setbool]=useState(true);
    useEffect(()=>{
        inContract();
    })
    async function inContract(){
        try{
        const provider =  new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);

        const contract_address= '0x1E522651463375f440C58ED84002a95832E7916b';
        const signer =  provider.getSigner();
        const contract = new ethers.Contract(contract_address,abi,signer);
        setcontractadd(contract);
        }
        catch(err){
            console.log(err);
        }

    }
    async function toverify(e){
        e.preventDefault();
        try{
        await contractadd.to_verify(pendingaddress,userid,10);
        setbool(true);
        }

        catch(err){
            console.log(err);
        }
    }

  return (
    <div>
        <Navbar/>
        <input onChange={e=>setpendingadd(e.target.value)} placeholder='Enter the id of the product'/>
        <input onChange={e=>setuserid(e.target.value)} placeholder='Enter any inflation rate'/>
        <button onClick={e=>toverify(e)}>click here to verify</button>
        <Modal open={bool} onclose={()=>setbool(false)} value={'You have successfully verified'}/>

        

    </div>
  )
}

export default Verify