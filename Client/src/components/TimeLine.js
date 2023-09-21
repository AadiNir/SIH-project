import React from "react"
import {VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AgricultureIcon from '@mui/icons-material/Agriculture';

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

    }catch(err){
      console.log(err);
    }

}

    return (
        <div>
        <input type='number' placeholder="enter the product id" onChange={e=>setsearchid(e.target.value)}/> 
        <button onClick={get}>Search for the product </button>
        {prodname}

        


            <h1>Timeline</h1>
            
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"

    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AgricultureIcon />}
  >
    <h3 className="vertical-timeline-element-title">Farmer 1</h3>
    <h4 className="vertical-timeline-element-subtitle">Madurai, Tamilnadu</h4>
    <p>
      Paddy
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AgricultureIcon />}
  >
    <h3 className="vertical-timeline-element-title">APMC</h3>
    <h4 className="vertical-timeline-element-subtitle">Chennai,India</h4>
    <p>
      Paddy,Tomato,Wheat
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AgricultureIcon />}
  >
    <h3 className="vertical-timeline-element-title">Distributor</h3>
    <h4 className="vertical-timeline-element-subtitle">Jabalpur,MP</h4>
    <p>
        Paddy,Tomato,Wheat
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AgricultureIcon />}
  >
    <h3 className="vertical-timeline-element-title">Wholeseller</h3>
    <h4 className="vertical-timeline-element-subtitle">Surat,Gujarat</h4>
    <p>
        Paddy,Tomato,Wheat,Barley,Maize
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<AgricultureIcon />}
  >
    <h3 className="vertical-timeline-element-title">Delhi Market Retailer</h3>
    <h4 className="vertical-timeline-element-subtitle">Paddy</h4>
    <p>
      Chandini Chowk,Delhi
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<AgricultureIcon />}
  />
</VerticalTimeline>
        </div>
        
    )
}
export default TimeLine;

