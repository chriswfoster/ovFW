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
            delete: (<Button type="danger">Delete</Button>)
        },
        {
            phoneNumber: "(214) 532-7658",
            name: 'David',
            pharmName: "Pharmacy Pharm",
            preference: 'SMS',
            delete: (<Button type="danger">Delete</Button>)
        },
        {
            phoneNumber: "(214) 139-0298",
            name: 'Kevin',
            pharmName: "Pharmacy Pharm",
            preference: 'SMS',
            delete: (<Button type="danger">Delete</Button>)
        },
        {
            phoneNumber: "(214) 629-3947",
            name: 'Susan',
            pharmName: "Pharmacy Pharm",
            preference: 'SMS',
            delete: (<Button type="danger">Delete</Button>)
        },
        {
            phoneNumber: "(214) 251-2038",
            name: 'Ashley',
            pharmName: "Pharmacy Pharm",
            preference: 'SMS',
            delete: (<Button type="danger">Delete</Button>)
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
            Audience
            <Row gutter={24}>
                <Col span={12}>
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        onSearch={value => console.log(value)}
                        style={{ width: "400px" }}
                    />
                </Col>
                <Col span={12}>
                    <Button
                        type="primary"
                        shape="round"
                        icon="plus"
                        size="large"
                        style={{ height: "40px" }}
                        onClick={showModal}
                    >
                        Add A New Audience
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
                <Row gutter={18}>
                    <Col span={6} >
                        <Button
                            type="primary"
                            style={{ height: "150px", width: "200px" }}
                        >Choose List
                </Button>
                    </Col>
                    <Col span={6} >
                        <Button
                            type="primary"
                            style={{ height: "150px", width: "200px" }}>
                            Upload CSV
                  </Button>
                    </Col>
                    <Col span={6} >
                        <Button
                            type="primary"
                            style={{ height: "150px", width: "200px" }}>
                            FTP
                  </Button>
                    </Col>
                    <Col span={6} >
                        <Button
                            type="primary"
                            style={{ height: "150px", width: "200px" }}>
                            Add Manually
                  </Button>
                    </Col>
                </Row>
            </Modal>
        </div>
    )
}

export default Audience;