import React, { useState } from 'react';
import { Table, Button, Input, Icon, Modal, Row, Col, List, Typography, Tabs, Upload, message } from 'antd';
import FTP from "./AudienceComponents/FTP"
import AddColumns from "./AudienceComponents/AddColumns"
import SharedDrive from "./AudienceComponents/SharedDrive"

const Audience = () => {

    ///////// Hooks /////////

    const [visible, setVisible] = useState(false)
    const [showNewAudience, setShowNewAudience] = useState(false)

    ///////// Hooks /////////

    ////////// Modal Methods //////////
    const showModal = () => {
        setVisible(true)
    };

    const handleOk = (e: any) => {
        setVisible(false)
    };

    const handleCancel = (e: any) => {
        setVisible(false)
    };
    ////////// Modal Methods //////////

    function callback(key) {
        console.log(key);
    }

    ////////// New Audience Methods //////////

    const campaignRowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };
    ////////// New Audience Methods //////////

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };


    ////////// Campaign Data //////////
    const campaignColumns = [
        // {
        //     title: 'Name',
        //     dataIndex: 'name',
        //     render: (text: any) => <a>{text}</a>,
        // },
        {
            title: 'Campaign Name',
            dataIndex: 'campaignName',
        }
    ];

    const campaignData = [
        {
            key: '1',
            campaignName: 'Campaign 1'
        },
        {
            key: '2',
            campaignName: 'Campaign 2'
        },
        {
            key: '3',
            campaignName: 'Campaign 3'
        },
        {
            key: '4',
            campaignName: 'Campaign 4'
        },
        {
            key: '5',
            campaignName: 'Campaign 5'
        },
    ];
    ////////// Campaign Data //////////



    ///////////// Columns and Data for Audience ///////////////
    const dataSource = [
        {
            number: "(214) 842-1337",
            firstName: 'John',
            lastName: "Smith",
            type: 'SMS',
            status: "Information"
        },
        {
            number: "(214) 842-1337",
            firstName: 'Jacob',
            lastName: "Smith",
            type: 'SMS',
            status: "Information"
        },
        {
            number: "(214) 842-1337",
            firstName: 'Kevin',
            lastName: "Smith",
            type: 'SMS',
            status: "Information"
        },
        {
            number: "(214) 842-1337",
            firstName: 'Matt',
            lastName: "Smith",
            type: 'SMS',
            status: "Information"
        },
        {
            number: "(214) 842-1337",
            firstName: 'Dave',
            lastName: "Smith",
            type: 'SMS',
            status: "Information"
        },
        {
            number: "(214) 842-1337",
            firstName: 'John',
            lastName: "Smith",
            type: 'SMS',
            status: "Information"
        },
        {
            number: "(214) 842-1337",
            firstName: 'Jacob',
            lastName: "Smith",
            type: 'SMS',
            status: "Information"
        },
        {
            number: "(214) 842-1337",
            firstName: 'Kevin',
            lastName: "Smith",
            type: 'SMS',
            status: "Information"
        },
        {
            number: "(214) 842-1337",
            firstName: 'Matt',
            lastName: "Smith",
            type: 'SMS',
            status: "Information"
        },
        {
            number: "(214) 842-1337",
            firstName: 'Dave',
            lastName: "Smith",
            type: 'SMS',
            status: "Information"
        },
    ];

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
        },
        {
            title: 'Number',
            dataIndex: 'number',
        },
        {
            title: 'Type',
            dataIndex: 'type',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
    ];
    ///////////// Columns and Data for Audience ///////////////


    const { Search } = Input;
    const { TabPane } = Tabs;


    return (
        <div>
            <Row type="flex" justify="end" gutter={24}>
                <Col span={6}>
                    <Button
                        type="primary"
                        shape="round"
                        icon="plus"
                        size="default"
                        style={{ height: "40px" }}
                        onClick={showModal}
                    >
                        Add A New Audience
                    </Button>
                </Col>
                <Col span={6}>
                    <Button
                        type="danger"
                        shape="round"
                        icon="delete"
                        size="default"
                        style={{ height: "40px" }}
                        onClick={showModal}
                    >
                        Delete Audience
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Table rowSelection={campaignRowSelection} columns={campaignColumns} dataSource={campaignData} pagination={false} />
                    <Row gutter={12}>
                        <Col span={5}>
                            <Button icon="stop" type="danger">Stop</Button>
                        </Col>
                        <Col span={5}>
                            <Button icon="pause" type="default">Pause</Button>
                        </Col>
                        <Col span={5}>
                            <Button icon="caret-right" type="primary">Resume</Button>
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Table dataSource={dataSource} columns={columns} pagination={false} />
                </Col>
            </Row>
            <Modal
                title="Add A New Audience"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                width="75vw"
                bodyStyle={{ height: "60vh" }}
            >
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane
                        tab={
                            <span>
                                <Icon type="plus" />
                                Details
                        </span>
                        }
                        key="1"
                    >
                        Campaign Name <Input placeholder="Campaign Name" />
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <Icon type="plus" />
                                Create Table
                        </span>
                        }
                        key="2"
                    >
                        <AddColumns />
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <Icon type="copy" />
                                Set FTP
                        </span>
                        }
                        key="3"
                    >
                        <FTP />
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <Icon type="folder-add" />
                                Shared Drive
                        </span>
                        }
                        key="4"
                    >
                        <SharedDrive />
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <Icon type="upload" />
                                Upload
                        </span>
                        }
                        key="5"
                    >
                        <Upload {...props}>
                            <Button>
                                <Icon type="upload" /> Click to Upload
                             </Button>
                        </Upload>
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <Icon type="form" />
                                Manual Entry
                        </span>
                        }
                        key="6"
                    >
                        Manual Entry
                    </TabPane>
                </Tabs>
                {/* <Row type="flex" justify="center" gutter={20}>
                    <Col span={4}>
                        <Button size="large" icon="plus" type="primary">Create Table</Button>
                    </Col>
                    <Col span={3}>
                        <Button size="large" icon="copy" type="primary">Set FTP</Button>
                    </Col>
                    <Col span={4}>
                        <Button size="large" icon="folder-add" type="primary">Shared Drive</Button>
                    </Col>
                    <Col span={3}>
                        <Button size="large" icon="upload" type="primary">Upload</Button>
                    </Col>
                    <Col span={4}>
                        <Button size="large" icon="form" type="primary">Manual Entry</Button>
                    </Col>
                </Row> */}
                {/* <Table dataSource={dataSource} columns={columns} pagination={false} /> */}
            </Modal>
        </div >
    )
}

export default Audience;










