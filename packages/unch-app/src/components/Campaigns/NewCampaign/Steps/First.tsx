import React from 'react';
import { Button, Modal, Descriptions, Select, Input, Card } from 'antd';

const First = () => {

    const inputStyles = {
        width: 220
    }
    const cardStyles = {
        width: '50%',
        height: '50%'
    }

    return (
        <div id="outerCampaignCardDiv" className="divFlexColumns">
            <Card title="Config" style={cardStyles}>
                <Descriptions column={1} layout="horizontal" className="descriptionListColumn" title="">
                    <Descriptions.Item label="Campaign Name:">
                        <Input style={inputStyles}/>
                    </Descriptions.Item>
                    <Descriptions.Item label="Campaign Type:">
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
            <Card title="Audiences" style={cardStyles}>
                <Descriptions column={1} layout="horizontal" className="descriptionListColumn" title="">
                    <Descriptions.Item label="ANI:">
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
                    </Descriptions.Item>
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
                </Descriptions>
                <Button>
                    View Audience
                </Button>
            </Card>
            <Card title="IVR Application" style={cardStyles}>
                <Descriptions column={1} layout="horizontal" className="descriptionListColumn" title="">
                    <Descriptions.Item label="Please Select a Survey:">
                        <Select style={inputStyles}>
                            <Select.Option key={1}>
                                First
                            </Select.Option>
                            <Select.Option key={2}>
                                Second
                            </Select.Option>
                            <Select.Option key={3}>
                                Third
                            </Select.Option>
                        </Select>
                    </Descriptions.Item>
                </Descriptions>
                <Button>
                    View Audience
                </Button>
            </Card>
        </div>
    )
}
export default First