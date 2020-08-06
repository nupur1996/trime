import { Button, Card, Col, Row, Tag } from 'antd';
import React, { Component } from 'react';

import cal from '../../containers/assets/cal.png'
import edit from '../../containers/assets/edit.png'
import message from '../../containers/assets/message.png'
import user from '../../containers/assets/user.png'

class MeetingCard extends Component {
  
  render() {
    return (
      <div>
          <Card style={{marginBottom:"20px"}}>
              <Row>
                  <Col span={4} style={{borderRight:"1px solid #f6f6f6"}}>
                      <div style={{fontSize:"0.8rem",textAlign:"left",marginBottom:"15px"}}>Assigned to</div>
                      <div><img style={{height:"3.5rem",width:"3.5rem"}} src={user}/></div>
                      <div>
                            <div>{this.props.assigned}</div>
                            <div style={{fontSize:"0.8rem",color:"#E0E0E0"}}>Consultant</div>
                      </div>
                  </Col>
                  <Col span={20}>
                      <Row style={{marginLeft:"10px",borderBottom:"1px solid #f6f6f6"}}>
                        <Col span={14} style={{textAlign:"left"}}>
                            <h3>{this.props.purpose} &nbsp;<Tag color="red" style={{borderRadius:"10px"}}>High</Tag></h3>
                            <div style={{fontSize:"0.8rem",marginBottom:"15px"}}><span style={{color:"#C8C8C8"}}>Due by: </span> {this.props.date}</div>
                            <div>{this.props.time}</div>
                        </Col>
                        <Col span={10} style={{textAlign:"right"}}>
                              <Tag color="green" style={{borderRadius:"10px",border:"1px dashed"}}>&nbsp;&nbsp;&nbsp;Active&nbsp;&nbsp;&nbsp;</Tag>
                        </Col>
                      </Row>
                      <Row style={{marginTop:"15px",marginLeft:"10px"}}>
                            <Col span={12} style={{textAlign:"left"}}><span style={{color:"#C8C8C8"}}>Meeting: </span>{this.props.title}</Col>
                            <Col span={12} style={{display:"flex",justifyContent:"space-between"}}>
                                <img style={{height:"2rem",width:"2rem"}}  src={cal}/>
                                <img style={{height:"2rem",width:"2rem"}}  src={edit}/>
                                <img style={{height:"2rem",width:"2rem"}}  src={message}/>
                                <Button style={{borderColor:"#20B2AA",color:"#20B2AA"}}>VIEW DETAILS</Button>
                            </Col>
                      </Row>
                  </Col>
              </Row>
          </Card>
      </div>
    );
  }
}

export default MeetingCard;