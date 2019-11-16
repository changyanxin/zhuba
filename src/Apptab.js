import { TabBar } from 'antd-mobile';
import React, { Component } from 'react'
import AppHome from './AppHome'
import AppSources from './AppSources'
import Appshoppingmall from './Appshoppingmall'
export default class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }

  
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(./images/home.png) center center /  21px 21px no-repeat' }}
            />
            }
            // icon={<i className='incofont icon-home'></i>}
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(./images/home1.png) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'home'}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            
          >
            <AppHome/>
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./images/source.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./images/source1.png) center center /  21px 21px no-repeat' }}
              />
            }
            title="灵感"
            key="Koubei"
            // badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
           
          >
            <AppSources/>
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./images/shoppingmall.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url("./images/shoppingmall1.png") center center /  21px 21px no-repeat' }}
              />
            }
            title="商城"
            key="Shoppingmall"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Appshoppingmall/>
          </TabBar.Item>

          <TabBar.Item
            icon={{ uri: './images/my.png' }}
            selectedIcon={{ uri: './images/my1.png' }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

