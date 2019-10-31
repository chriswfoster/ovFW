import React, { useState } from 'react';
import { Table, Button, Input, Icon, Modal, Row, Col, Tabs, Upload, message, Collapse, Divider, Menu, Dropdown, Tabs } from 'antd';
import FTP from "./AudienceComponents/FTP"
import AddColumns from "./AudienceComponents/AddColumns"
import SharedDrive from "./AudienceComponents/SharedDrive"

const Audience = () => {

    ///////// Hooks /////////
    const [visible, setVisible] = useState(false)
    const [manualVisible, setManualVisible] = useState(false)
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

    ////////// Manual Entry Modal Methods //////////
    const manualModal = () => {
        setManualVisible(true)
    };

    const manualModalOk = (e: any) => {
        setManualVisible(false)
    };

    const manualModalCancel = (e: any) => {
        setManualVisible(false)
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
        },
        {
            title: "Date Created",
            dataIndex: "dateCreated"
        }
    ];

    const campaignData = [
        {
            key: '1',
            audienceName: 'Baylor Scott and White',
            dateCreated: "07/17/2019"
        },
        {
            key: '2',
            audienceName: 'Parkland',
            dateCreated: "10/02/2019"
        },
        {
            key: '3',
            audienceName: 'Hospital',
            dateCreated: "02/19/2019"
        },
        {
            key: '4',
            audienceName: 'McKinney Hospital',
            dateCreated: "04/18/2019"
        },
        {
            key: '5',
            audienceName: 'Plano East Clinic',
            dateCreated: "07/17/2019"
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
        }
        // {
        //     title: 'Type',
        //     dataIndex: 'type',
        // },
        // {
        //     title: 'Status',
        //     dataIndex: 'status',
        // },
    ];
    ////////////////////////////

    const { TabPane } = Tabs;
    const { Panel } = Collapse;

    return (
        <div>
            <b>Select A Do Not Call List</b>
            <Table rowSelection={campaignRowSelection} columns={campaignColumns} dataSource={campaignData} pagination={false} />
            <Divider />
            <Table columns={columns} dataSource={dataSource} pagination={false} />
            <Row>
                <Col span={7} style={{ paddingBottom: "10px" }}>
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
                <Col span={7}>
                    <Button
                        type="primary"
                        icon="form"
                        size="default"
                        style={{ height: "40px" }}
                        onClick={manualModal}
                    >
                        Manual Entry
                    </Button>
                </Col>
            </Row>
            <Collapse onChange={callback}>
                <Panel header="FTP" key="1">
                    <FTP />
                </Panel>
                <Panel header="Network Drive" key="2">
                    <SharedDrive />
                </Panel>
            </Collapse>
            {/* <Row>
                <Row type="flex" justify="start" gutter={8}>
                    <Col span={5} style={{ paddingBottom: "10px" }}>
                        <Button
                            type="primary"
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
                            icon="delete"
                            size="default"
                            style={{ height: "40px" }}
                        >
                            Delete Audience
                    </Button>
                    </Col> */}
            {/* <Col span={5} style={{ paddingBottom: "10px" }}>
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
                            onClick={manualModal}
                        >
                            Manual Entry
                    </Button>
                    </Col> */}
            {/* </Row>
                <Modal
                    title="Manual Audience Entry"
                    visible={manualVisible}
                    onOk={manualModalOk}
                    onCancel={manualModalCancel}
                    width="55vw"
                    bodyStyle={{ height: "45vh", overflowY: "scroll" }}

                >
                    <div>
                        <b>First_Name</b> <Input placeholder="Add Column" size="small" />
                        <b>Last_Name</b> <Input placeholder="Add Column" size="small" />
                        <b>Number</b> <Input placeholder="Add Column" size="small" />
                        <b>Type</b> <Input placeholder="Add Column" size="small" />
                    </div>
                </Modal>
                <Col span={12}>
                    <Table rowSelection={campaignRowSelection} columns={campaignColumns} dataSource={campaignData} pagination={false} />
                </Col>
                <Col span={12}>
                    <Tabs defaultActiveKey="1" onChange={callback} size="large">
                        <TabPane tab={
                            <span>
                                <Icon type="control" />
                                Details
                            </span>
                        } key="1">
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flexWrap: "nowrap",
                                    justifyContent: "flex-start",
                                    alignItems: "stretch",
                                    alignContent: "flex-start",
                                    paddingBottom: "15px"
                                }}
                            >
                                <span>
                                    <b>Name of Audience:</b> Audience 1
                                </span>
                                <span>
                                    <b>Created On: </b> 09/20/2019
                                </span>
                                <span>
                                    <b>Created By: </b> Kevin Smith
                                </span>
                                <span>
                                    <b>Current Campaign: </b> BSW_Campaign
                                </span>
                                <span>
                                    <b>Current State: </b> In Progress
                                </span>
                            </div>
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
                            <b>Columns</b>
                            <p>First_Name</p>
                            <p>Last_Name</p>
                            <p>Phone_Number</p>
                            <p>Type</p>
                            <Divider />
                            <b>Uploaded from</b>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flexWrap: "nowrap",
                                    justifyContent: "flex-start",
                                    alignItems: "stretch",
                                    alignContent: "flex-start",
                                    paddingBottom: "10px"
                                }}
                            >
                                <span>
                                    <b>FTP Domain:</b> domain.ftp.drive
                                </span>
                                <span>
                                    <b>Port: </b> 833
                                </span>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flexWrap: "nowrap",
                                    justifyContent: "flex-start",
                                    alignItems: "stretch",
                                    alignContent: "flex-start",
                                    paddingBottom: "10px"
                                }}
                            >
                                <span>
                                    <b>Network File Path:</b> //filepath/files/folder/csv
                                </span>
                            </div>
                        </TabPane>

                        <TabPane tab={
                            <span>
                                <Icon type="menu" />
                                Dial List
                            </span>
                        } key="2">
                            <Table columns={columns} dataSource={dataSource} pagination={false} />
                            <b>Add To Dial List</b>
                            <Row>
                                <Col span={7} style={{ paddingBottom: "10px" }}>
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
                                <Col span={7}>
                                    <Button
                                        type="primary"
                                        icon="form"
                                        size="default"
                                        style={{ height: "40px" }}
                                        onClick={manualModal}
                                    >
                                        Manual Entry
                    </Button>
                                </Col>
                            </Row>
                            <Collapse onChange={callback}>
                                <Panel header="FTP" key="1">
                                    <FTP />
                                </Panel>
                                <Panel header="Network Drive" key="2">
                                    <SharedDrive />
                                </Panel>
                            </Collapse>
                        </TabPane>

                        <TabPane tab={
                            <span>
                                <Icon type="close-circle" />
                                Do Not Call List
                            </span>
                        } key="3"> */}
            {/* </TabPane>
                    </Tabs>
                </Col>
            </Row>
            <Modal
                title="Create A New Audience"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                width="55vw"
                bodyStyle={{ height: "45vh", overflowY: "scroll" }}

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
                    Audience Name:  <Input placeholder="Campaign Name" size="small" style={{ width: "300px" }} />
                </div>
                <Divider />
                <AddColumns />
            </Modal> */}
        </div >
    )
}

export default Audience;










