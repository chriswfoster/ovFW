import React, { useState } from 'react';
import { Table, Button, Input, Icon, Modal, Row, Col } from 'antd';

const Audience = () => {

    ///////// Hooks /////////

    const [visible, setVisible] = useState(false)

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


    const { Search } = Input;

    return (
        <div>
            <Row type="flex" justify="end" gutter={24}>
                <Col span={8}>
                    {/* <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="default"
                        onSearch={value => console.log(value)}
                        style={{ width: "300px" }}
                    /> */}
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
            <Table dataSource={dataSource} columns={columns} />
            <Modal
                title="Add A New Audience"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                width="75vw"
                bodyStyle={{ height: "60vh" }}
            >
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="default"
                    onSearch={value => console.log(value)}
                    style={{ width: "300px" }}
                />
            </Modal>
        </div>
    )
}

export default Audience;