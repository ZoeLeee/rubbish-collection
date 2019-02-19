import React, { Component } from 'react'
import { Picker,List, Button } from 'antd-mobile';
import './index.less';

const district=[{
  label:"haha1",
  value:0,
},
{
  label:"haha2",
  value:1,
}];

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state={
      value:[0]
    }
  }
  render() {
    return (
      <div className="nav">
        <Picker 
          data={district} 
          cols={1} 
          className="forss" 
          value={this.state.value}
          extra={district[this.state.value].label}
          onChange={v => this.setState({ value: v })}
        >
          <List.Item arrow="down"></List.Item>
        </Picker>
        <Button  
          inline
          icon={<span>+</span>} 
        />
      </div>
    )
  }
}
