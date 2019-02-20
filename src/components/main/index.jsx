import React, { Component } from 'react'
import { Carousel, WingBlank,Icon } from 'antd-mobile';
import {MessageItem,MsgType} from '../message/index';
import { Link } from "react-router-dom";
import './index.less';
import NavBar from '../navbar';
import TitleComponent from '../title';
export default class MainContent extends Component {
	constructor(props) {
    super(props);
    this.state={
      data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      titles1:[
        {title:"预约服务",icon:"loading",url:"/appointment"},
        {title:"绿色银行",icon:"loading",url:"/appointment"},
        {title:"绿丝带",icon:"loading",url:"/appointment"},
      ],
      titles2:[
        {title:"打卡比赛",icon:"loading",url:"/appointment"},
        {title:"标签投放",icon:"loading",url:"/appointment"},
        {title:"拍照投放",icon:"loading",url:"/appointment"},
      ],
    }
	}
	render() {
		return (
			<div className="main">
				<NavBar />
				<WingBlank>
					<Carousel
						dots
						autoplay={true}
						infinite
					>
						{this.state.data.map(val => (
							<a
								key={val}
								style={{ display: 'inline-block', width: '100%', height: 176 }}
							>
								<img
									src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
									alt=""
									style={{ width: '100%',height: "100%", verticalAlign: 'top' }}
								/>
							</a>
						))}
					</Carousel>
				</WingBlank>
        <TitleComponent data={this.state.titles1} />
        <div className="msg flex">
          <div>
            <div>最新</div>消息
          </div>
          <ul className="unstyle">
            <MessageItem type={MsgType.Score} text={20} />
            <MessageItem type={MsgType.Symbol} text="您的垃圾..." />
          </ul>
        </div>
        <h5>
            今天你参与分类了吗  
        </h5>
        <TitleComponent data={this.state.titles2} />
			</div>
		)
	}
}
