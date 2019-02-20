import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import MainContent from '../main/index';
import './index.less';

const PageText={
  Main:"main",
  Shop:"shops",
  My:"my",
}
Object.freeze(PageText);

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: PageText.Main,
      hidden: false,
    };
  }
  render() {
    return (
      <div className="home">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="i分类"
            key={PageText.Main}
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selected={this.state.selectedTab === PageText.Main}
            onPress={() => {
              this.setState({
                selectedTab: PageText.Main,
              });
            }}
            data-seed="logId"
          >
            <MainContent />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="积分商城"
            key={PageText.Shop}
            selected={this.state.selectedTab === PageText.Shop}
            onPress={() => {
              this.setState({
                selectedTab:PageText.Shop,
              });
            }}
            data-seed="logId1"
          >
            <div>积分商城</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="我的"
            key={PageText.My}
            selected={this.state.selectedTab === PageText.My}
            onPress={() => {
              this.setState({
                selectedTab: PageText.My
              });
            }}
          >
            <div>my</div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}