import React from 'react';
import { Button, Modal, Descriptions, Select, Input, Card } from 'antd';

const First = () => {

    const inputStyles = {
        width: 220
    }
    const cardStyles = {
        width: '50%',
        height: '50%',
        overflow: 'scroll'
    }
    const cardBodyStyles = {
        height: '100%',
        overflow: 'scroll'
    }

    const cardGridStyles = {
        width: '50%',
        height: '90%'
    }

    const workflows = ["Schedule", "Billing",  "Rx", "Other"]
    const campaignTypes = ["UCCE", "UCCX", "Twillio", "Amazon", "WCC"]
    return (
        <div id="outerCampaignCardDiv" className="divFlexColumns">
            <Card title="Config" style={cardStyles} bodyStyle={cardBodyStyles} >
                <Descriptions column={1} layout="horizontal" className="descriptionListColumn" title="">
                    <Descriptions.Item label="Campaign Name:">
                        <Input style={inputStyles}/>
                    </Descriptions.Item>
                    <Descriptions.Item label="Workflow Type:">
                        <Select style={inputStyles} defaultValue={1}>
                            {workflows.map((wfT, i) => {
                                return (
                                    <Select.Option value={i} key={i}>
                                        {wfT}
                                    </Select.Option>
                                )
                            })}
                        </Select>
                    </Descriptions.Item>
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
                    <Descriptions.Item label="UCCE Type:">
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
                    </Descriptions.Item>
                </Descriptions>
            </Card>
            <Card title="Audiences" bodyStyle={cardBodyStyles} style={cardStyles}>
                <Card.Grid style={cardGridStyles}>
                    <Descriptions column={1} layout="horizontal" className="descriptionListColumn" title="">
                        {/* <Descriptions.Item label="ANI:">
                            <Select style={inputStyles}>
                            <Select.Option key={1}>
                            974-424-2384
                            </Select.Option>
                            <Select.Option key={2}>
                            1800-343-4845
                            </Select.Option>
                            <Select.Option key={3}>
                            234-542-5253
                            </Select.Option>
                            </Select>
                        </Descriptions.Item> */}
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
            </Card>
            <Card bodyStyle={cardBodyStyles} title="IVR Application" style={cardStyles}>
                <Card.Grid style={cardGridStyles}>
                    <Descriptions column={1} layout="horizontal" className="descriptionListColumnNoHeight" title="">
                        <Descriptions.Item label="Please Select a Survey:">
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
                    </Descriptions>
                    <Button style={{marginBottom: 10}} type="primary">Create New Outbound Message</Button>
                </Card.Grid>
                <Card.Grid style={cardGridStyles}>
                    <Descriptions column={1} layout="horizontal" className="descriptionListColumnNoHeight" title="Outbound Message Variables">
                        <Descriptions.Item label="First Name">
                            <Select style={inputStyles}>
                                <Select.Option key={1}>
                                    First_Name_Column
                                </Select.Option>
                                <Select.Option key={2}>
                                    Last_Name_Column
                                </Select.Option>
                                <Select.Option key={3}>
                                    Phone_Number_Column
                                </Select.Option>
                            </Select>
                        </Descriptions.Item>
                        <Descriptions.Item label="Last Name">
                            <Select style={inputStyles}>
                                <Select.Option key={1}>
                                    First_Name_Column
                                </Select.Option>
                                <Select.Option key={2}>
                                    Last_Name_Column
                                </Select.Option>
                                <Select.Option key={3}>
                                    Phone_Number_Column
                                </Select.Option>
                            </Select>
                        </Descriptions.Item>
                        <Descriptions.Item label="Phone Number">
                            <Select style={inputStyles}>
                                <Select.Option key={1}>
                                    First_Name_Column
                                </Select.Option>
                                <Select.Option key={2}>
                                    Last_Name_Column
                                </Select.Option>
                                <Select.Option key={3}>
                                    Phone_Number_Column
                                </Select.Option>
                            </Select>
                        </Descriptions.Item>
                    </Descriptions>
                </Card.Grid>
            </Card>
            <div style={cardStyles} /> {/* Space keeping div */}
        </div>
    )
}
export default First