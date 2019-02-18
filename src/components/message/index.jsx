import React, { Component } from 'react'

export const MsgType={
  Score:"积分",
  Symbol:"系统",
}

export class MessageItem extends Component {
  renderMsg=()=>{
    const {type,text}=this.props;
    switch(type){
      case MsgType.Score:
        return (
          <>
            <span>{type}</span>
            <span>您的积分增加{text}分</span>
          </>
        )
      case MsgType.Symbol:
        return (
          <>
            <span>{type}</span>
            <span>{text}</span>
          </>
        )
    }
  }
  render() {
    return (
      <li>
        {this.renderMsg()}
      </li>
    )
  }
}
