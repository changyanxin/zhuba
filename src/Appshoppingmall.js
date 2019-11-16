import React, { Component } from 'react'
import { TabBar,NavBar,Icon ,Carousel,Flex,WhiteSpace,SearchBar} from 'antd-mobile';

export default class Appshoppingmall extends Component {
    render() {
        return (
            <div>
                {/* NavBar */}
                <NavBar
                        style={{backgroundColor:'#33cccc',color:'#000'}}
                        // mode="light"
                        
                        rightContent={[
                            // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                            <img src="images/shopping_cart.png" style={{width:'20%',height:'50%',marginRight: '16px'}}/>
                        ]}
                        >商城
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
                <div style={{
                    backgroundColor:'black',
                    opacity:'0.4',
                    position:'relative',
                    marginTop:'-50%'
                }}>
                    {/* 菜单 */}
                    <img src="./images/menu.png" style={{
                        width:'10%',
                        height:"10%",
                        position:"relative",
                        marginLeft:'5%',
                        float:'left'
                    }}/>
                    {/* 搜索框 */}
                    <SearchBar placeholder="请输入关键字搜索" maxLength={6} style={{
                        width:'80%',
                        position:'relative',
                        float:'right',
                        marginRight:'5%',
                        color:'white'
                    }}/>
                </div>
                {/* 图标 */}
                <div style={{
                    // position:'relative'
                    marginTop:'50%',
                    backgroundColor:"#fff",
                    width:'100%'
                }}>
                    <Flex style={{marginLeft:'10%',marginTop:'5%'}}>
                        <Flex.Item >
                            <img  style={{backgroundColor:"#ff6699",width:'60%',borderRadius:'50%'}} src="./images/chair.png"/>
                        </Flex.Item>
                        <Flex.Item >
                            <img  style={{backgroundColor:"#66ccff",width:'60%',borderRadius:'50%'}} src="./images/chair.png"/>    
                        </Flex.Item>
                        <Flex.Item >
                            <img  style={{backgroundColor:"#ff9933",width:'60%',borderRadius:'50%'}} src="./images/chair.png"/>    
                        </Flex.Item>
                        <Flex.Item >
                            <img style={{backgroundColor:"#66cccc",width:'60%',borderRadius:'50%'}}  src="./images/chair.png"/>    
                        </Flex.Item>
                        <Flex.Item >
                            <img style={{backgroundColor:"#ff3333",width:'60%',borderRadius:'50%'}}  src="./images/chair.png"/>    
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                </div>
                <div style={{
                    backgroundColor:"#fff",
                    width:'100%'
                }}>
                    <Flex style={{marginLeft:'13%'}}>
                        <Flex.Item >
                            桌
                        </Flex.Item>
                        <Flex.Item >
                            床   
                        </Flex.Item>
                        <Flex.Item >
                            椅  
                        </Flex.Item>
                        <Flex.Item >
                            几   
                        </Flex.Item>
                        <Flex.Item >
                            柜  
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                </div>
                <div style={{
                    backgroundColor:"#fff",
                    width:'100%'
                }}>
                    <Flex style={{marginLeft:'10%'}}>
                        <Flex.Item >
                            <img  style={{backgroundColor:"#3333ff",width:'60%',borderRadius:'50%'}} src="./images/chair.png"/>
                        </Flex.Item>
                        <Flex.Item >
                            <img  style={{backgroundColor:"#9900ff",width:'60%',borderRadius:'50%'}} src="./images/chair.png"/>    
                        </Flex.Item>
                        <Flex.Item >
                            <img  style={{backgroundColor:"#33cc99",width:'60%',borderRadius:'50%'}} src="./images/chair.png"/>    
                        </Flex.Item>
                        <Flex.Item >
                            <img style={{backgroundColor:"#9999cc",width:'60%',borderRadius:'50%'}}  src="./images/chair.png"/>    
                        </Flex.Item>
                        <Flex.Item >
                            <img style={{backgroundColor:"#666666",width:'60%',borderRadius:'50%'}}  src="./images/chair.png"/>    
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                </div>
                <div style={{
                    marginBottom:'5%',
                    backgroundColor:"#fff",
                    width:'100%'
                }}>
                    <Flex style={{marginLeft:'11%'}}>
                        <Flex.Item >
                            书架
                        </Flex.Item>
                        <Flex.Item >
                            沙发   
                        </Flex.Item>
                        <Flex.Item >
                            家居饰品 
                        </Flex.Item>
                        <Flex.Item >
                            户外家具  
                        </Flex.Item>
                        <Flex.Item >
                            全部分类 
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                </div>
                {/* 商品 */}
                <div className="flex-container1">
                    <Flex>
                        <Flex.Item >
                            <img style={{width:'100%',height:'60%'}} src="./images/shoppingmall_item2.png"/>
                        </Flex.Item>
                        <Flex.Item >
                            <img style={{width:'100%',height:'60%'}} src="./images/shoppingmall_item2.png"/>    
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                </div>
            </div>
        )
    }
}
