import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ethers } from 'ethers';
import { abi } from '../agro';

function Modal2({ open, onclose, decayPercent, rotArea, userid, children }) {
  const [humidity, sethumidity] = useState();
  const [tempc, settempc] = useState();
  const [tempf, settempf] = useState();
  const [gassensor, setgassensor] = useState();
  const [pirsensor, setpirsensor] = useState();
  const [flamesensor, setflamesensor] = useState();
  const [ultrasonic, setultrasonic] = useState();
  const [pendingaddress, setpendingadd] = useState();
  const [contract, setcontract] = useState();
  const [emai, setemai] = useState('');
  const [name, setname] = useState('');
  const [lastAlertTime, setLastAlertTime] = useState(null); // To track the last alert time

  useEffect(() => {
    iscontract();

    const interval = setInterval(async () => {
      let detailsn = await axios.get('https://api.thingspeak.com/channels/2276275/feeds/last.json');
      let alld = await axios.get('https://api.thingspeak.com/channels/2276275/feeds.json');
      console.log(alld.data.feeds.length);

      settempc(detailsn.data.field2);
      settempf(detailsn.data.field3);
      setgassensor(detailsn.data.field4);
      setpirsensor(detailsn.data.field5);
      setflamesensor(detailsn.data.field6);
      setultrasonic(detailsn.data.field7);

      // Check if tempc crosses the threshold and if at least 10 minutes have passed since the last alert
      if (tempc > 35 && (!lastAlertTime || Date.now() - lastAlertTime >= 100000)) {
        await alert("temperature", tempc.toString(),userid);
        setLastAlertTime(Date.now()); // Update the last alert time
      }

    }, 10000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [lastAlertTime]); // Include lastAlertTime in the dependency array

  async function alert(valname, val,userid1) {
    try {
      const datas = await contract.get_order(userid1);
      console.log();

        const headers = {
          "Content-type": "application/json"
        }
        const data = {
          "email": datas.latestemailid,
          "name": datas.latestname,
          "valname": valname,
          "val": val
        }
        const details = await axios.post('http://localhost:5000/send-courier-message', data, headers);
        console.log("email sent to", datas.latestemailid);
    
    } catch (err) {
      console.log(err);
    }
  }

  async function iscontract() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      const contract_address = '0xa6e141d56D85d8EF9540Ead769a6a53D3CeE7Dc5';
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contract_address, abi, signer);
      setcontract(contract);
      let a = await signer.getAddress()
      setpendingadd(a);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div onClick={onclose} className={`fixed inset-0 justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"} `}>
        <div onClick={(e) => e.stopPropagation()} className={`  h-{64}  absolute inset-0 bg-white rounded-xl shadow p-8 transition-all   text-5xl ${open ? "scale-50 opacity-100" : "scale-125-opacity-0"}`} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div><h1>Humidity: {humidity} </h1></div> <br />
          <div><h1>Temperature in Celsius: {tempc} </h1> </div><br />
          <div><h1>Temperature in Fahrenheit: {tempf} </h1></div><br />
          <div><h1>Gas Sensor: {gassensor} </h1> </div> <br />
          <div><h1>Flame Sensor: {pirsensor} </h1> </div> <br />
          <div><h1>PIR Sensor: {flamesensor} </h1></div> <br />
          <div><h1>Ultrasonic Sensor: {ultrasonic} </h1></div> <br />
          <div><h1>Percentage of Decay: {decayPercent} </h1></div> <br />
          <div><h1>Number of Rotten Areas: {rotArea} </h1></div> <br />

          <button onClick={onclose} type="button" className="absolute top-0 right-0 h-16 w-20 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 text-5xl">X</button>
        </div>
      </div>
    </div>
  );
}

export default Modal2;

