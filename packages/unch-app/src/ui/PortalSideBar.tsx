import React from "react";
import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
import { Link } from 'react-router-dom';
import './layout.css'
// import pkgJson from '../../../../../package.json';

const { Header, Content, Sider } = Layout
const SubMenu = Menu.SubMenu

export default class PortalSideBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    // scrollToTop = () => {
    //         document.getElementById('mainLayoutHeader').scrollIntoView({ block: 'start'})
    // }


    public render() {
        const collapsed = false;
        return (
            <div className="sideBarMain">
                <img className="sideBarImg" src={require('../images/spinsciTrans.png')} />
                <Menu
                    // style={{width: '100%'}}
                    // onClick={this.scrollToTop}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    // inlineCollapsed={collapsed}
                    style={{ background: 'transparent' }}
                    theme="dark"
                >
                    {/* <Menu.Item key="0"><span>Home</span></Menu.Item>
                    <Menu.Item key="1"><span>Campaigns</span></Menu.Item>
                    <Menu.Item key="2"><span>Audiences</span></Menu.Item> */}
                    <Menu.Item key="0"><Link to="/main/home">Imaging</Link></Menu.Item>
                    {/* <Menu.Item key="1"><Link to="/campaigns">Campaigns</Link></Menu.Item> */}
                    {/* <Menu.Item key="2"><Link to="/audiences">Do Not Call</Link></Menu.Item> */}
                    <Menu.Item key="3"><Link to="/main/reports">Access Center</Link></Menu.Item>

                </Menu>
                <div className="sideBarBottomBox">
                    <div>
                        <b>Contact</b>
                        <a href="mailto:support@spinsci.com">support@spinsci.com</a>
                        855-522-9998
                    </div>
                    <span>
                        Portal Version  v#.#
                        <br />
                        Copyright © SpinSci Technologies. All Rights Reserved.
                    </span>
                </div>

            </div>

        )
    }

}
