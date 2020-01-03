import React from 'react';
import { Layout } from 'antd';
import PortalSideBar from './PortalSideBar';
import { Switch, Route, Redirect } from 'react-router-dom'
import innerRouter from '../router/innerRouter';
import Campaigns from '../components/Campaigns';
import Audience from '../components/Audience';
import Login from "../components/Login/index"
    ;

class Main extends React.Component {
    constructor(props: any) {
        super(props)
    }

    render() {
        const { Header, Content, Sider } = Layout;
        return (
            <div>
                <Layout style={{ height: '100vh' }}>
                    <Sider
                        style={{ backgroundColor: 'transparent', width: '300px', height: '100%' }}
                        width='300px'
                    >
                        <Content style={{ width: '300px', backgroundColor: 'transparent', height: '100vh' }}>
                            <PortalSideBar />
                        </Content>
                    </Sider>
                    <Layout style={{ height: '100vh' }}>

                        {/* <Header id="mainLayoutHeader" style={{height: '156px', backgroundColor: '#f0f2f5', padding: '0px'}}>
                  <GlobalHeader />
                </Header > */}
                        <Content style={{ margin: '30px', height: '100vh', overflowY: 'scroll' }}>
                            {/* {this.props.children} */}
                            {innerRouter}
                        </Content>
                    </Layout>
                </Layout>
                {!localStorage.getItem("token") ? <Redirect to="/" /> : ""}
            </div>
        );
    }
}
export default Main