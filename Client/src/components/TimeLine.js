import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { abi } from '../agro';
import Modal from './Modal'

function TimeLine() {
  const [signeraddress, setsigneraddress] = useState("You haven't logged in yet");
  const [contract, setcontract] = useState();
  const [searchid, setsearchid] = useState();

  // Variable initialization
  const [owner, setowner] = useState('');
  const [pendingaddress, setpendingaddress] = useState([]);
  const [qty, setqty] = useState();
  const [price, setprice] = useState();
  const [inflation, setinflation] = useState();
  const [prodname, setprodname] = useState('');
  const [verifiedaddress, setverifiedaddress] = useState([]);
  const [bool, setbool] = useState(false);

  useEffect(() => {
    iscontract();
  }, []);

  async function iscontract() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);

      const signer = provider.getSigner();
      const contractaddress = '0xe01003eC9147Af717DAd7283f9918FCC3377E70B';
      setcontract(new ethers.Contract(contractaddress, abi, signer));

      setsigneraddress(signer.address);
    } catch (err) {
      console.log(err.reason);
    }
  }

  async function get() {
    try {
      const data = await contract.get_order(searchid);
      setowner(data.item_owner);
      setpendingaddress(data.pending_address);
      setqty(data.qty.toString());
      setprice(data.price.toString());
      setinflation(data.inflation.toString());
      setprodname(data.product_name);
      setverifiedaddress(data.verified_address);
    } catch (err) {
      console.log(err);
      setbool(true);
    }
  }
  return (
    <div>
      <input type="number" placeholder="enter the product id" onChange={e => setsearchid(e.target.value)} />
      <button onClick={get}>Search for the product</button>

      <h1>Timeline of {prodname}</h1>
      <h1>Owner: {owner}</h1>

      <VerticalTimeline>
        {pendingaddress.map((data, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={data.date}
            quantity={qty}
            
            iconStyle={{ background: pendingaddress[index] === '0x0000000000000000000000000000000000000000' ? 'green' : 'red', color: '#fff' }}
            icon={<AgricultureIcon />}
          >
            <h4 className="vertical-timeline-element-subtitle">ID: {pendingaddress[index]}</h4>
            <h4 className="vertical-timeline-element-subtitle">Price: {price} rs</h4>
            <h4 className="vertical-timeline-element-subtitle">Inflation: {inflation}%</h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <Modal open={bool} onclose={()=>setbool(false)} value={"No Such order has been initiated yet, Try again"}/>

    </div>
  );
}

export default TimeLine;
