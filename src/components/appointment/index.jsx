import React, { Component } from 'react';
import './index.less';
import OnlineAppointment from './online';

export  class Appointment extends Component {
  constructor(props){
    super(props);
    this.state={
      selectIndex:0
    }
  }
  renderContent(){
    switch(this.state.selectIndex){
      case 0:
        return <OnlineAppointment />;
      case 1:
        return <div>未完成</div>;
      default:
        return <div>已完成</div>;
    }
  }
  handlerClick=(i)=>{
    this.setState({
      selectIndex:i
    })
  }
  render() {
    return (
      <div className="appointment">
        {
          this.renderContent()
        }
        <div className="flex-ar footer">
          {
            ["在线预约","未完成","已完成"].map((t,i)=> 
            <span 
              className={this.state.selectIndex===i &&"active"}
              onClick={()=>this.handlerClick(i)}
              >{t}</span>)
          }
        </div>
      </div>
    )
  }
}
