import React, { useState } from 'react';
import { Table, Button, Input, Icon, Modal, Row, Col, List, Typography } from 'antd';

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

    ////////// New Campaign Methods //////////

    ////////// New Campaign Methods //////////


    const campaignRowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

    ////////// Campaign Data //////////
    const campaignColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text: any) => <a>{text}</a>,
        },
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
    ];
    ////////// Campaign Data //////////



    ///////////// Columns and Data for Audience ///////////////
    const dataSource = [
        {
            phoneNumber: "(214) 842-1337",
            name: 'John',
            pharmName: "Pharmacy Pharm",
            preference: 'SMS',
            delete: "Information"
        },
        {
            phoneNumber: "(214) 532-7658",
            name: 'David',
            pharmName: "Pharmacy Pharm",
            preference: 'SMS',
            delete: "Information"
        },
        {
            phoneNumber: "(214) 139-0298",
            name: 'Kevin',
            pharmName: "Pharmacy Pharm",
            preference: 'SMS',
            delete: "Information"
        },
        {
            phoneNumber: "(214) 629-3947",
            name: 'Susan',
            pharmName: "Pharmacy Pharm",
            preference: 'SMS',
            delete: "Information"
        },
        {
            phoneNumber: "(214) 251-2038",
            name: 'Ashley',
            pharmName: "Pharmacy Pharm",
            preference: 'SMS',
            delete: "Information"
        },
    ];

    const columns = [
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Pharmacy Name',
            dataIndex: 'pharmName',
        },
        {
            title: 'Preference',
            dataIndex: 'preference',
        },
        {
            title: 'Delete',
            dataIndex: 'delete',
        },
    ];
    ///////////// Columns and Data for Audience ///////////////


    const { Search } = Input;

    return (
        <div>
            <Row type="flex" justify="end" gutter={24}>
                <Col span={8}>
                </Col>
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
                        icon="plus"
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
            <Table dataSource={dataSource} columns={columns} pagination={false} />
            <Modal
                title="Add A New Audience"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                width="75vw"
                bodyStyle={{ height: "60vh" }}
            >
            </Modal>
        </div>
    )
}

export default Audience;










