import React from "react"
import {VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AgricultureIcon from '@mui/icons-material/Agriculture';

function TimeLine() {
    return (
        <div>
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

