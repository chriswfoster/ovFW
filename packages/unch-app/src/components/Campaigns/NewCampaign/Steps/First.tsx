import React, {useState} from 'react';
import { Upload, Row, Col, Button, Collapse, Descriptions, Select, Input, Card, Switch } from 'antd';
import FTP from '../../../Audience/AudienceComponents/FTP';
import SharedDrive from '../../../Audience/AudienceComponents/SharedDrive';
import TCPA from './Fourth/TCPA';

const First = (props: any) => {
    const [showTCPA, setShowTCPA] = useState(false)
    
    const inputStyles = {
        width: 220
    }
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

    const dbDataTypeSelect = (
        <Select defaultValue={1}>
            <Select.Option value={1} key={1}>
                String/VarChar
            </Select.Option >
            <Select.Option value={2} key={2}>
                Number/Int
            </Select.Option>
            <Select.Option value={3} key={3}>
                Date/Timestamp
            </Select.Option>
        </Select>
    )

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
                <Descriptions column={1} layout="vertical" className="descriptionListColumn" title="">
                    <Descriptions.Item label="First Column:">
                        <span style={{display: "flex", flexDirection: "row"}}><Input placeholder="First_Name"/>{dbDataTypeSelect}</span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Second Column:">
                        <span style={{display: "flex", flexDirection: "row"}}><Input placeholder="Last_Name"/>{dbDataTypeSelect}</span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Third Column:">
                        <span style={{display: "flex", flexDirection: "row"}}><Input placeholder="Appointment_Date"/>{dbDataTypeSelect}</span>
                    </Descriptions.Item>
                </Descriptions>
            </Card>
            <div style={cardStyles} /> {/* Space keeping div */}
        </div>
    )
}
export default First