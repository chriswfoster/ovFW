import React, { useState } from 'react';
import { Table, Button, Input, Icon, Modal, Row, Col, Tabs, Upload, message, Collapse, Divider, Menu, Dropdown, Tabs } from 'antd';
import FTP from "./AudienceComponents/FTP"
import AddColumns from "./AudienceComponents/AddColumns"
import SharedDrive from "./AudienceComponents/SharedDrive"

const Audience = () => {

    ///////// Hooks /////////
    const [visible, setVisible] = useState(false)
    const [showNewAudience, setShowNewAudience] = useState(false)

    //////////////////

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
    ////////////////////

    ////////// Collapse Methods //////////
    function callback(key) {
        console.log(key);
    }
    ////////////////////


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
    ////////////////////

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
        {
            title: 'Audience Name',
            dataIndex: 'audienceName',
        }
    ];

    const campaignData = [
        {
            key: '1',
            audienceName: 'Audience 1'
        },
        {
            key: '2',
            audienceName: 'Audience 2'
        },
        {
            key: '3',
            audienceName: 'Audience 3'
        },
        {
            key: '4',
            audienceName: 'Audience 4'
        },
        {
            key: '5',
            audienceName: 'Audience 5'
        },
    ];
    ////////////////////



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
    ////////////////////////////


    const { Search } = Input;
    const { TabPane } = Tabs;
    const { Panel } = Collapse;

    return (
        <div>
            <Row>
                <Row type="flex" justify="start" gutter={8}>
                    <Col span={5}>
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
                    <Col span={8}>
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
                    <Col span={5}>
                        <Upload {...props}>
                            <Button
                                type="primary"
                                icon="upload"
                                size="default"
                                style={{ height: "40px" }}
                            >
                                Upload Form
                    </Button>
                        </Upload>
                    </Col>
                    <Col span={5}>
                        <Button
                            type="primary"
                            icon="form"
                            size="default"
                            style={{ height: "40px" }}
                        >
                            Manual Entry
                    </Button>
                    </Col>
                </Row>
                <Col span={12}>
                    <Table rowSelection={campaignRowSelection} columns={campaignColumns} dataSource={campaignData} pagination={false} />
                </Col>
                <Col span={12}>
                    <Tabs defaultActiveKey="1" onChange={callback} size="large">
                        <TabPane tab="Details" key="1">
                            <h3>Name of Audience: Audience 1</h3>
                            <h3>Created On: 09/20/2019</h3>
                            <h3>Created By: Kevin Smith</h3>
                            <h3>Current Campaign: BSW_Campaign</h3>
                            <h3>Current State: In Progress</h3>
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
                            <Divider />
                            <AddColumns />
                            <Divider />
                            <Collapse onChange={callback}>
                                <Panel header="FTP" key="1">
                                    <FTP />
                                </Panel>
                                <Panel header="Network Drive" key="2">
                                    <SharedDrive />
                                </Panel>
                            </Collapse>
                        </TabPane>
                        <TabPane tab="Dial List" key="2">
                            <Table columns={columns} dataSource={dataSource} pagination={false} />
                        </TabPane>
                        <TabPane tab="Do Not Call List" key="3">
                            <Collapse onChange={callback}>
                                <Panel header="FTP" key="1">
                                    <FTP />
                                </Panel>
                                <Panel header="Network Drive" key="2">
                                    <SharedDrive />
                                </Panel>
                            </Collapse>
                            <Table columns={columns} dataSource={dataSource} pagination={false} />
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
            <Modal
                title="Add A New Audience"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                width="65vw"
                bodyStyle={{ height: "60vh", overflowY: "scroll" }}

            >
                <div style={{
                    display: "flex",
                    flexdirection: "row",
                    flexwrap: "nowrap",
                    justifycontent: "flex-start",
                    alignitems: "center",
                    aligncontent: "center",
                    paddingBottom: "20px"
                }}>
                    Campaign Name:  <Input placeholder="Campaign Name" size="small" style={{ width: "300px" }} />
                </div>
                <Divider />
                <AddColumns />
                <Divider />
                <Collapse onChange={callback}>
                    <Panel header="FTP" key="1">
                        <FTP />
                    </Panel>
                    <Panel header="Network Drive" key="2">
                        <SharedDrive />
                    </Panel>
                </Collapse>
            </Modal>
        </div >
    )
}

export default Audience;










