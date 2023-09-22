import React, { useEffect,useState } from 'react'
import Navbar from '../components/Navbar'
import { ethers} from 'ethers'
import {abi} from '../agro'
import Modal from '../components/Modal'
import '../Styles/verify.css';
import bigInt from "big-integer";

function Verify() {
    const[contractadd,setcontractadd]=useState();
    const[pendingaddress,setpendingadd]=useState("");
    const[userid,setuserid]=useState();
    const[inflation,setinflation]=useState();
    const[bool,setbool]=useState(false);
    const[newprice,setnewprice]= useState();
    useEffect(()=>{
        inContract();
    })
    async function inContract(){
        try{
        const provider =  new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);

        const contract_address= '0x9f14C0F90cF75bF93B682913e64F40Ae9B2d3d85';
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
            const data = await contractadd.get_order(userid);
            let org = data.price
            const ind = await contractadd.get_index(pendingaddress,userid);
            let inf = data.inflation[ind];
            let newprice = Math.round(org + (inf*org/100));
            await contractadd.to_verify(pendingaddress,userid,newprice);
            setbool(true);
        }

        catch(err){
            console.log(err);
        }
    }


  return (
    
    <div >
        <Navbar/>
        <form className='form2'>
        <input className='input-box2' onChange={e=>setpendingadd(e.target.value)} placeholder='Enter the addresss of the vendor'/> <br/>
        <input  className='input-box2' onChange={e=>setuserid(e.target.value)} placeholder='Enter id of the product'/><br/>
        <input  className='input-box2' onChange={e=>setnewprice(e.target.value)} placeholder='Enter any inflation rate'/><br/>

        <button   className='btn2' onClick={e=>toverify(e)}>click here to verify</button>
        </form>
        <Modal open={bool} onclose={()=>setbool(false)} value={`You have successfully verified, Go to timeline page for more information`}/>

        

    </div>
  )
}

export default Verify