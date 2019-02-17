import React, { Component } from 'react'
import { Carousel, WingBlank,Icon } from 'antd-mobile';
import {MessageItem,MsgType} from '../message/index';
import { Link } from "react-router-dom";
import './index.less';
export default class MainContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ['1', '2', '3'],
			imgHeight: 176,
		}
	}
	componentDidMount() {
		// simulate img loading
		setTimeout(() => {
			this.setState({
				data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
			});
		}, 100);
	}
	render() {
		return (
			<div className="main">
				<h1 >导航栏</h1>
				<WingBlank>
					<Carousel
						dots
						autoplay={false}
						infinite
					>
						{this.state.data.map(val => (
							<a
								key={val}
								href="http://www.alipay.com"
								style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
							>
								<img
									src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
									alt=""
									style={{ width: '100%', verticalAlign: 'top' }}
									onLoad={() => {
										// fire window resize event to change height
										window.dispatchEvent(new Event('resize'));
										this.setState({ imgHeight: 'auto' });
									}}
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
