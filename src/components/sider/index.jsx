import '../sider/style.css'

import { FileDoneOutlined, LaptopOutlined, QuestionCircleOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons';
import React, { Component } from 'react';

import { Button } from 'antd';

class Sider extends Component {
  render() {
    return (
      <div style={{marginTop:"15px"}}>
            <Button type="primary" shape="round">+ New Task</Button>
            <div style={{fontSize:"1.2rem",lineHeight:"3rem",color:"#BEBEBE",padding:"20%"}} className="main">
                  <div style={{textAlign:"left"}}><LaptopOutlined /><span style={{fontSize:"1rem"}}>&nbsp;&nbsp;&nbsp;Meeting</span></div>
                  <div style={{textAlign:"left"}}><FileDoneOutlined /><span style={{fontSize:"1rem"}}>&nbsp;&nbsp;&nbsp;Task</span></div>
                  <div style={{textAlign:"left"}}><TeamOutlined /><span style={{fontSize:"1rem"}}>&nbsp;&nbsp;&nbsp;Teams</span></div>
                  <div style={{textAlign:"left"}}><QuestionCircleOutlined /><span style={{fontSize:"1rem"}}>&nbsp;&nbsp;&nbsp;Help</span></div>
                  <div style={{textAlign:"left"}}><SettingOutlined /><span style={{fontSize:"1rem"}}>&nbsp;&nbsp;&nbsp;Settings</span></div>
            </div>
      </div>
    );
  }
}

export default Sider;