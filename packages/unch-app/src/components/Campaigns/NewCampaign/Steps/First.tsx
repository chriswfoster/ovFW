import React, {useState} from 'react';
import { Upload, Row, Col, Button, Collapse, Descriptions, Select, Input, Card, Switch } from 'antd';
import FTP from '../../../Audience/AudienceComponents/FTP';
import SharedDrive from '../../../Audience/AudienceComponents/SharedDrive';
import TCPA from './Fourth/TCPA';
import Papa from 'papaparse';

const First = (props: any) => {
    const inputStyles = {
        width: 220
    }
    const [showTCPA, setShowTCPA] = useState(false)
    const [file, setFile] = useState([])
    const [dbDataTypeSelect, setdbDataTypeSelect] = useState(
        <Select style={inputStyles} defaultValue={0}>
        </Select>
    )
    

    const cardStyles = {
        width: '50%',
        height: '50%',
        overflow: 'scroll'
    }
    const cardBodyStyles = {
        height: '120%',
        overflow: 'scroll'
    }

    const cardGridStyles = {
        width: '50%',
        height: '90%'
    }

    this.handleChange = (event) => {
        Papa.parse(event.target.files[0], {
            complete: data => console.log("Data: ", data),
            header: true
        });
    }

    const propsUpload = {
        name: 'file',
        accept: '.csv',
        // action: this.fileHandler,
        multiple: false,
        beforeUpload: file => {
            return false;
          },
        headers: {
            authorization: 'authorization-text',
        },
        onChange(data) {
            
            Papa.parse(event.target.files[0], {
                complete: data => {
                    console.log(data.data)
                    
                    // {data.data.map((item, i) => {
                    //     return (
                    //         <Select.Option value={i} key={i}>
                    //             item
                    //         </Select.Option>
                    //     )
                    // })}
                    let keyz = Object.keys(data.data[0])
                    setdbDataTypeSelect(
                        <Select style={inputStyles} defaultValue={1}>
                            {keyz.map((item, i) => {
                                return (
                                        <Select.Option value={i} key={i}>
                                            {item}
                                        </Select.Option>
                                    )
                                })}
                        </Select>)
                    setFile(data.data)    
            },

                header: true
            });
        },
    };


    const workflows = ["Schedule", "Billing",  "Rx", "Other"]
    const campaignTypes = ["UCCE", "UCCX", "Twillio", "Amazon", "WCC"]
    return (
        <div id="outerCampaignCardDiv" className="divFlexColumns">
            <Card title="Config" style={cardStyles} bodyStyle={cardBodyStyles} >
                <Descriptions column={1} layout="horizontal" className="descriptionListColumn" title="">
                    <Descriptions.Item label="Campaign Name:">
                        <Input style={inputStyles} />
                    </Descriptions.Item>
                    {/* <Descriptions.Item label="Workflow Type:">
                        <Select style={inputStyles} defaultValue={1}>
                            {workflows.map((wfT, i) => {
                                return (
                                    <Select.Option value={i} key={i}>
                                        {wfT}
                                    </Select.Option>
                                )
                            })}
                        </Select>
                    </Descriptions.Item> */}
                    <Descriptions.Item label="Campaign Type:">
                        <Select style={inputStyles} defaultValue={0}>
                            {campaignTypes.map((cT, i) => {
                                return (
                                    <Select.Option value={i} key={i}>
                                        {cT}
                                    </Select.Option>
                                )
                            })}
                        </Select>
                    </Descriptions.Item>
                    
                        <Descriptions.Item label="Voice and/or SMS:">
                            <Select style={inputStyles}>
                                <Select.Option key={1}>
                                    Voice
                                </Select.Option>
                                <Select.Option key={2}>
                                    SMS
                                </Select.Option>
                                <Select.Option key={3}>
                                    Voice & SMS
                                </Select.Option>
                            </Select>
                        </Descriptions.Item>
                    
                    {/* <Descriptions.Item label="UCCE Type:">
                        <Select style={inputStyles}>
                            <Select.Option key={1}>
                                Progressive
                            </Select.Option>
                            <Select.Option key={2}>
                                Predictive
                            </Select.Option>
                            <Select.Option key={3}>
                                Preview
                            </Select.Option>
                        </Select>
                    </Descriptions.Item> */}
                </Descriptions>
            </Card>
            <Card title="Dial List Settings" bodyStyle={cardBodyStyles} style={cardStyles}>
                <Row>
                    <Col span={7} style={{ paddingBottom: "10px", paddingRight: "20px" }}>
                        <Upload {...propsUpload}>
                            <Button
                                type="primary"
                                icon="upload"
                                size="default"
                                style={{ height: "40px" }}
                            >
                                Upload CSV
                            </Button>
                        </Upload>
                    </Col>
                    <Col span={7}>
                        <Button
                            type="primary"
                            icon="form"
                            size="default"
                            style={{ height: "40px" }}
                            onClick={() => console.log("manualModal")}
                        >
                            Manual Entry
                        </Button>
                    </Col>
                </Row>
                <Collapse onChange={() => console.log("callback")}>
                    <Collapse.Panel header="FTP" key="1">
                        <FTP />
                    </Collapse.Panel>
                    <Collapse.Panel header="Network Drive" key="2">
                        <SharedDrive />
                    </Collapse.Panel>
                </Collapse>
            </Card>
            
            {/* <Card title="Audiences" bodyStyle={cardBodyStyles} style={cardStyles}>
                <Card.Grid style={cardGridStyles}>
                    <Descriptions column={1} layout="horizontal" className="descriptionListColumn" title="">
                        <Descriptions.Item label="Audience:">
                            <Select style={inputStyles}>
                                <Select.Option key={1}>
                                    First Audience
                                </Select.Option>
                                <Select.Option key={2}>
                                    Second Audience
                                </Select.Option>
                                <Select.Option key={3}>
                                    Third Audience
                                </Select.Option>
                            </Select>
                        </Descriptions.Item>
                        <Descriptions.Item label="">
                            <Button>
                                View Audience
                            </Button>
                        </Descriptions.Item>
                        <Descriptions.Item label="">
                            <Button>
                                Add Audience
                            </Button>
                        </Descriptions.Item>
                    </Descriptions>
                </Card.Grid>
                <Card.Grid style={cardGridStyles}>
                    Info
                </Card.Grid>
            </Card> */}
            <Card bodyStyle={cardBodyStyles} title="IVR Application" style={cardStyles}>
                    <Descriptions>
                        <Descriptions.Item label="Allow Duplicates">
                            <Switch onChange={val => console.log("val")} checkedChildren="Yes" unCheckedChildren="No"  />
                        </Descriptions.Item>
                    </Descriptions>
                    <Descriptions>
                    <Descriptions.Item label="Apply TCPA Rules">
                    <Switch onChange={(val) => setShowTCPA(val)} checkedChildren="Yes" unCheckedChildren="No" checked={showTCPA} />
                    </Descriptions.Item>
                </Descriptions>
                {showTCPA ? <TCPA /> : ''}
                
            </Card>
            <Card title="Column Definitions" bodyStyle={cardBodyStyles} style={cardStyles}>
                <Descriptions column={1} layout="horizontal" className="descriptionListColumn" title="">
                    <Descriptions.Item label="First Name:">
                        <span style={{display: "flex", flexDirection: "row"}}>
                            {/* <Input placeholder="First_Name"/> */}
                            {dbDataTypeSelect}
                        </span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Last Name:">
                        <span style={{display: "flex", flexDirection: "row"}}>
                            {/* <Input placeholder="Last_Name"/> */}
                            {dbDataTypeSelect}
                        </span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Phone Number:">
                        <span style={{display: "flex", flexDirection: "row"}}>
                            {/* <Input placeholder="Appointment_Date"/> */}
                            {dbDataTypeSelect}
                        </span>
                    </Descriptions.Item>
                </Descriptions>
            </Card>
            <div style={cardStyles} /> {/* Space keeping div */}
        </div>
    )
}
export default First