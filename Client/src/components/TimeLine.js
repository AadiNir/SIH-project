import React from "react"
import {VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import {useEffect} from 'react'
import { useState } from 'react';
import { ethers } from 'ethers';
import {abi} from '../agro';

function TimeLine() {
  const[signeraddress,setsigneraddress]=useState("You haven't logged in yet");
  const[contract,setcontract]=useState();
  const[searchid,setsearchid]=useState();

  //variable initilization
  const[owner,setowner]=useState('');
  const[pendingaddress,setpendingaddress]=useState([]);
  const[qty,setqty]=useState();
  const[price,setprice]=useState();
  const[inflation,setinflation]=useState();
  const[prodname,setprodname]=useState();
  const[verifiedaddress,setverifiedaddress]=useState([]);

  const TotElement = pendingaddress.length + verifiedaddress.length;

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


      setsigneraddress(signer.address);
      }catch(err){
          console.log(err.reason);
      }
  }
  async function get(){
    try{
    const data=await contract.get_order(searchid);
    setowner(data.item_owner);
    setpendingaddress(data.pending_address);
    setqty(data.qty.toString());
    setprice(data.price.toString());
    setinflation(data.inflation.toString());
    setprodname(data.product_name);
    setverifiedaddress(data.verified_address);
    console.log(data.qty);
    }catch(err){
      console.log(err);
    }

}

const timelineData = [
    {
        date: "21st September 2023",
        title: "Chennai Farmer",
        location: "VIT Chennai",
        description: "Paddy",
      },

    {
      date: "2011 - present",
      title: "Farmer 1",
      location: "Madurai, Tamilnadu",
      description: "Paddy",
    },
    {
      date: "2010 - 2011",
      title: "APMC",
      location: "Chennai, India",
      description: "Paddy, Tomato, Wheat",
    },
    {
      date: "2008 - 2010",
      title: "Distributor",
      location: "Jabalpur, MP",
      description: "Paddy, Tomato, Wheat",
    },
    {
      date: "2006 - 2008",
      title: "Wholeseller",
      location: "Surat, Gujarat",
      description: "Paddy, Tomato, Wheat, Barley, Maize",
    },
    {
      date: "April 2013",
      title: "Delhi Market Retailer",
      location: "Chandini Chowk, Delhi",
      description: "Paddy",
    },
  ];

  const timelineElements = timelineData.map((data, index) => (
    <VerticalTimelineElement
      key={index}
      className="vertical-timeline-element--work"
      date={data.date}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<AgricultureIcon />}
    >
      <h3 className="vertical-timeline-element-title">{data.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{data.location}</h4>
      <p>{data.description}</p>
    </VerticalTimelineElement>
  ));

    return (
        <div>
      <input type='number' placeholder="enter the product id" onChange={e => setsearchid(e.target.value)} />
      <button onClick={get}>Search for the product </button>
      {pendingaddress}

      <h1>Timeline {prodname}</h1>

      <VerticalTimeline>
        {timelineElements}
      </VerticalTimeline>
    </div>
        
    )
}
export default TimeLine;

