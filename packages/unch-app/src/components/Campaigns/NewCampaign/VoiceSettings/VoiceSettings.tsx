import React from 'react';
import { Descriptions, Select, Card, Switch, Input } from 'antd';

const VoiceSettings = () => {



    const inputStyles = {
        width: 220
    }
    const cardStyles = {
        width: '49%',
    }


    return (
        <div style={{overflowY: 'scroll'}} id="outerCampaignCardDiv" className="divFlexColumns">
            <Card title="Voice Settings" style={cardStyles}>
                <Descriptions column={1} layout="horizontal" className="descriptionListColumn">
                    <Descriptions.Item label="Calls Per Second">
                        <Input />
                    </Descriptions.Item>
                    <Descriptions.Item label="AMD (Answering Machine Detection)">
                        <Switch />
                    </Descriptions.Item>
                    <Descriptions.Item>
                        <Select defaultValue={1}>
                            <Select.Option value={1} key={1}>
                                Drop Message
                            </Select.Option>
                            <Select.Option value={2} key={2}>
                                Hang Up
                            </Select.Option>
                        </Select>
                    </Descriptions.Item>
                    <Descriptions.Item label="Retries">
                        <Card>
                            <Descriptions column={1}>
                                <Descriptions.Item label="Attempt 1" >
                                    <div className="buttonSliders">
                                        <Input style={{display: "inline"}}/> <span style={{display: "inline"}}> minutes</span>
                                    </div>
                                </Descriptions.Item>
                                <Descriptions.Item label="Attempt 2">
                                    <div className="buttonSliders">
                                        <Input style={{display: "inline"}}/> <span style={{display: "inline"}}> minutes</span>
                                    </div>
                                </Descriptions.Item>
                                <Descriptions.Item label="Last Attempt">
                                    <div className="buttonSliders">
                                        <Input style={{display: "inline"}}/> <span style={{display: "inline"}}> minutes</span>
                                    </div>
                                </Descriptions.Item>
                            </Descriptions>
                        </Card>
                    </Descriptions.Item>
                    <Descriptions.Item label="Caller ID">
                        <Input />
                    </Descriptions.Item>
                </Descriptions>

                {/* <Descriptions column={1} layout="horizontal" className="descriptionListColumn">
                    <Descriptions.Item label="Caller ID">
                        <Select style={inputStyles}>
                            <Select.Option  key={1}>
                                Blocked
                            </Select.Option>
                        </Select>
                    </Descriptions.Item>
                    <Descriptions.Item label="Call back number">
                        <Select style={inputStyles}>
                            <Select.Option key={2}>
                                ANI
                            </Select.Option>
                        </Select>
                    </Descriptions.Item>
                    <Descriptions.Item label="Customer Identifier">
                        <Select style={inputStyles}>
                            <Select.Option key={1}>
                                Account Number
                            </Select.Option >
                        </Select>
                    </Descriptions.Item>
                    <Descriptions.Item label="Frequency Per Customer">
                        <span>Every 
                            <Select style={{width: 50}}>
                                <Select.Option key={1}>
                                    1
                                </Select.Option>
                                <Select.Option key={2}>
                                    2
                                </Select.Option>
                            </Select> call
                        </span>

                    </Descriptions.Item>
                </Descriptions> */}
            </Card>
            {/* <Card title="Upload CSV" style={cardStyles}>
                <CSVReader 
                    // cssClass
                    label="Select CSV with info"
                    onFileLoaded={data => console.log(data)}
                
                />
            </Card> */}
            {/* <Card title="Config" style={cardStyles}>

            </Card> */}
        </div>
    )
}
export default VoiceSettings