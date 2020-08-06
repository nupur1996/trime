import { Card, Divider, Steps } from 'antd';
import React, { Component } from 'react';

const { Step } = Steps;
class MenuItem extends Component {
  render() {
    return (
      <div>
                  <Steps progressDot current={1} direction="vertical">
                    <Step title={this.props.title} description={this.props.purpose}/>
                  </Steps>
        <Divider/>
      </div>
    );
  }
}

export default MenuItem;