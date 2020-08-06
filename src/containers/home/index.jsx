import '../home/style.css'

import { Breadcrumb, Card, Col, Input, Layout, Menu, PageHeader, Row, Switch } from 'antd';
import React, { Component } from 'react';

import { LogoutOutlined } from '@ant-design/icons';
import MeetingCard from '../../components/meetingcard';
import MenuItem from '../../components/menuitem';
import Sider from '../../components/sider';
import cal from '../assets/cal.png'
import logo from '../assets/logo.png'
import logout from '../assets/logout.png'
import user from '../assets/user.png'

const { Search } = Input;

class Home extends Component {
  state = {
    meetingData:[]
  };

  componentDidMount=()=>{
    fetch('https://f661aeec-ce10-4340-a688-9eb3a82cd9a0.mock.pstmn.io/srcum')
    .then((res)=>res.json())
    .then((res)=>this.setState({meetingData:res}))
  }

  render() {
    console.log(this.state.meetingData)
    return (
      <div>
        <PageHeader className="header" 
        title={<img style={{height:"3rem",width:"6rem"}}  src={logo}/>} 
        extra={[
          <span style={{marginRight:"3px",color:"black"}}><span style={{fontSize:"1rem"}}>Logout </span> <img style={{height:"1.5rem",width:"1.5rem"}}  src={logout}/></span>,
          <img style={{height:"2rem",width:"2rem"}}  src={user}/>
        ]}/>
        <Row> 
              <Col span={4} style={{borderRight:"1px solid #f6f6f6",height:"87vh",backgroundColor:"white"}}>
                  <Sider/>
              </Col>
              <Col span={20} style={{backgroundColor:"#f5f5f5",padding:"1%"}}>
              <Row style={{marginBottom:"10px"}}>
                <Col span={12} style={{textAlign:"left"}}>
                     <Switch checkedChildren="Upcoming task" unCheckedChildren="Completed" defaultChecked />
                </Col>
                <Col span={12} style={{textAlign:"right"}}>
                    <Search
                      placeholder="input search text"
                      onSearch={value => console.log(value)}
                      style={{ width: 300 }}
                    />
                </Col>
              </Row>
              <Row style={{marginBottom:"10px"}}>
                  <img src={cal}/>
                 <span style={{fontSize:"0.6rem",color:"red",textAlign:"left",lineHeight:"1rem",marginTop:"8px"}}>July 2020<div style={{fontSize:"1.2rem",color:"black"}}>Today's Task</div></span> 
              </Row>
              
          <Row>
                  <Col span={16} style={{paddingRight:"1%"}}>
                          {this.state.meetingData.map((meetData,key)=>(
                        <MeetingCard time={meetData.time} assigned={meetData.assigned_to} title={meetData.purpose} date={meetData.date} purpose={meetData.meeting_title}/>
                      ))}
                  </Col>
                  <Col span={8} style={{textAlign:"right"}}>
                  <Card title={<div style={{textAlign:"left",fontSize:"1.5rem"}}>Recent Activity</div>}>
                  {this.state.meetingData.map((meetData,key)=>(
                    <MenuItem  title={meetData.meeting_title} purpose={meetData.purpose}/>
                  ))}
                  </Card>
                  </Col>
              </Row>
            </Col>
        </Row>

      </div>
    );
  }
}

export default Home;