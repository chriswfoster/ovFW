import React, { useState } from 'react';
import { Table, Button, Modal, Row, Col, Tabs, Upload, message, Collapse, Divider, Card, Input } from 'antd';
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
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a>Delete</a>
                </span>
            )
        }
    ];
    ////////////////////////////

    const { TabPane } = Tabs;
    const { Panel } = Collapse;

    return (
        <div>
            <Row>
                <Col span={12}>
                    <Table rowSelection={campaignRowSelection} columns={campaignColumns} dataSource={campaignData} pagination={false} />
                </Col>
                <Col span={12}>
                    <Card title="Parkland">
                        <Table columns={columns} dataSource={dataSource} pagination={false} />
                    </Card>
                </Col>
            </Row>
            <Button onClick={showModal} type="primary">Add to Do Not Call List</Button>
            <Modal
                title="Add Do Not Call List"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                width="55vw"
                bodyStyle={{ height: "55vh", overflowY: "scroll" }}

            >
                <b>Upload A Form</b>
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
                    <Divider />
                </Row>
                <b>Upload a list via FTP</b>
                <FTP />
                <Divider />
                <b>Upload a list via Shared Drive</b>
                <SharedDrive />
                <Divider />
                <b>Upload A Contact Manually</b>
                <div>
                    <b>Column 1:<Input style={{ width: "200px" }} /></b>
                    <b>Column 2:<Input style={{ width: "200px" }} /></b>
                    <b>Column 3:<Input style={{ width: "200px" }} /></b>
                    <b>Column 4:<Input style={{ width: "200px" }} /></b>
                </div>
            </Modal>
        </div >
    )
}

export default Audience;










