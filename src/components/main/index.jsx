import React, { Component } from 'react'
import { Carousel, WingBlank,Icon } from 'antd-mobile';
import {MessageItem,MsgType} from '../message/index';
import { Link } from "react-router-dom";
import './index.less';
import NavBar from '../navbar';
export default class MainContent extends Component {
	constructor(props) {
    super(props);
    this.state={
      data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
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
				<div className="flex-ar title">
					<Link to="/appointment">
						<Icon type="loading" color="#3CA53B" />
						<div>预约服务</div>
					</Link>
					<Link to="/appointment">
						<Icon type="loading"  color="#3CA53B" />
						<div>绿色银行</div>
					</Link>
					<Link to="/appointment">
						<Icon type="loading"  color="#3CA53B" />
						<div>绿丝带</div>
					</Link>
				</div>
        <div className="msg flex">
          <div>
            <div>最新</div>消息
          </div>
          <ul className="unstyle">
            <MessageItem type={MsgType.Score} text={20} />
            <MessageItem type={MsgType.Symbol} text="您的垃圾..." />
          </ul>
        </div>
			</div>
		)
	}
}
