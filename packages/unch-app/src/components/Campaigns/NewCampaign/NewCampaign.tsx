import React, {useState} from 'react';
import {Card, Descriptions, Input, Switch, Select, Row, Col, Upload, Button, Collapse} from 'antd';
import Papa from 'papaparse';
import FTP from '../../Audience/AudienceComponents/FTP';
import SharedDrive from '../../Audience/AudienceComponents/SharedDrive';
import UCCEColumnDefs from '../BACKUP-NewCampaign/Steps/First/UCCEColumnDefs';
import TwillioColumnDefs from '../BACKUP-NewCampaign/Steps/First/TwillioColumnDefs';
import TCPA from '../BACKUP-NewCampaign/Steps/Fourth/TCPA';
import Scheduling from './Scheduling/Scheduling';
import VoiceSettings from './VoiceSettings/VoiceSettings';
import SmsAudioConfig from './SmsAudioConfig/SmsAudioConfig';

const NewCampaign = (props: any) => {
    const inputStyles = {
        width: 220
    }
    const [showTCPA, setShowTCPA] = useState(false)
    const [campaignType, setCampaignType] = useState('UCCE')
    const [file, setFile] = useState([])
    const [dbDataTypeSelect, setdbDataTypeSelect] = useState(
        <Select style={inputStyles} defaultValue={0}>
        </Select>
    )
    

    const cardStyles = {
        width: '100%',
        // height: '50%',
        marginBottom: 20,
        overflow: 'scroll'
    }
    const cardBodyStyles = {
        height: '120%',
        // overflow: 'scroll' // I don't think card bodies should have overflow
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
        <div>
            <Card title="Config" style={cardStyles} bodyStyle={cardBodyStyles} >
                <Descriptions column={1} layout="horizontal" className="descriptionListColumn" title="">
                    <Descriptions.Item label="Campaign Name">
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
                    <Descriptions.Item label="Campaign Type">
                        <Select style={inputStyles} defaultValue={campaignType} onChange={val => setCampaignType(val)}>
                            {campaignTypes.map((cT, i) => {
                                return (
                                    <Select.Option value={cT} key={i}>
                                        {cT}
                                    </Select.Option>
                                )
                            })}
                        </Select>
                    </Descriptions.Item>
                    
                    <Descriptions.Item label="Voice and/or SMS">
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
                {campaignType === "UCCE" ? <UCCEColumnDefs dbDataTypeSelect={dbDataTypeSelect} /> : ''}
                {campaignType == "Twillio" ? <TwillioColumnDefs dbDataTypeSelect={dbDataTypeSelect} /> : ''}
            </Card>
            <Card title="Scheduling" bodyStyle={cardBodyStyles} style={cardStyles}>
                <Scheduling />
            </Card>
            <Card title="VoiceSettings" bodyStyle={cardBodyStyles} style={cardStyles}>
                <VoiceSettings />
            </Card>
            <Card title="SMS and Audio Config" bodyStyle={cardBodyStyles} style={cardStyles}>
                    <SmsAudioConfig />
            </Card>
        </div>
    )
}
export default NewCampaign;