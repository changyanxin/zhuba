import React, { Component } from 'react'
import { Tabs, WhiteSpace, Badge ,NavBar,Icon,Flex} from 'antd-mobile';

const tabs = [
    { title: <Badge>推荐</Badge> },
    { title: <Badge>冬季</Badge> },
    { title: <Badge>宜家</Badge> },
    { title: <Badge>小清新</Badge> },
    { title: <Badge>小户型</Badge> },
    { title: <Badge>个性色彩</Badge> }
  ];
  
export default class AppSources extends Component {
    render() {
        return (
            <div>
                {/* NavBar */}
                <NavBar
                    style={{backgroundColor:'#33cccc',color:'#000'}}
                    // mode="light"
                    
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    >灵感
                </NavBar>

                {/* 顶部导航 */}
                <div>
                    <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div >
                        <div className="flex-container1">
                            <Flex>
                                <Flex.Item >
                                    <img style={{width:'100%',height:'60%'}} src="./images/sources_recommend2.png"/>
                                </Flex.Item>
                                <Flex.Item >
                                    <img style={{width:'100%',height:'60%'}} src="./images/sources_recommend2.png"/>    
                                </Flex.Item>
                            </Flex>
                            <WhiteSpace size="lg" />
                        </div>
                        <div className="flex-container1">
                            <Flex>
                                <Flex.Item >
                                    <img style={{width:'100%',height:'60%'}} src="./images/sources_recommend2.png"/>
                                </Flex.Item>
                                <Flex.Item >
                                    <img style={{width:'100%',height:'60%'}} src="./images/sources_recommend2.png"/>    
                                </Flex.Item>
                            </Flex>
                            <WhiteSpace size="lg" />
                        </div>
                        <div className="flex-container1">
                            <Flex>
                                <Flex.Item >
                                    <img style={{width:'100%',height:'60%'}} src="./images/sources_recommend2.png"/>
                                </Flex.Item>
                                <Flex.Item >
                                    <img style={{width:'100%',height:'60%'}} src="./images/sources_recommend2.png"/>    
                                </Flex.Item>
                            </Flex>
                            <WhiteSpace size="lg" />
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                        冬季
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                        宜家
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                        小清新
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                        小户型
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                        个性色彩
                    </div>
                    </Tabs>
                    <WhiteSpace />
                </div>
            </div>
        )
    }
}
