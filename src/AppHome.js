import React, { Component } from 'react'
import { NavBar, Icon ,Tabs,Badge,Carousel,WingBlank, WhiteSpace ,Flex} from 'antd-mobile';


export default class AppHome extends Component {
    render() {
        return (
        <div>
            {/* NavBar */}
            <NavBar
                    style={{backgroundColor:'#33cccc',color:'#000'}}
                    // mode="light"
                    
                    // rightContent={[
                    //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    // ]}
                    >住吧家居
            </NavBar>
            {/* 轮播 */}
            <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {[1,2].map(val => (
            <a
              key={val}
              // href="http://www.alipay.com"
            //   style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src="./images/shouye_banner.png"
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
        
            {/* 两翼留白 */}
            <div className="flex-container">
              <Flex>
                <Flex.Item style={{
                  width:'30%',
                  height:'140px',
                  lineHeight:'70px',
                  textAlign:'center',
                  marginTop:'20px',
                  marginLeft:'4%',
                  background:`url("./images/shouye_flex.png") no-repeat`
                }}>
                  {/* 热门品牌 */}
                </Flex.Item>
                <Flex.Item style={{
                  width:'30%',
                  height:'140px',
                  lineHeight:'70px',
                  textAlign:'center',
                  marginTop:'20px',
                  background:`url("./images/shouye_flex.png") no-repeat`
                }}>
                  {/* 私人搭配师 */}
                </Flex.Item>
                <Flex.Item style={{
                  width:'30%',
                  height:'140px',
                  lineHeight:'70px',
                  textAlign:'center',
                  marginTop:'20px',
                  background:`url("./images/shouye_flex.png") no-repeat`
                }}>
                  {/* 选购指南 */}
                </Flex.Item>
              </Flex>
              <WhiteSpace size="lg" />
            </div>

            {/* bottom */}
            <p>热门推荐</p>
            <img src="./images/shouyebottom.png" alt="rementuijian " style={{width:'100%'}}/>
        


         
        </div>
        )
    }
}
