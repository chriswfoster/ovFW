import React, {useState} from 'react';
import { Descriptions, Switch, Input, Select } from 'antd';


const Fourth = () => {
    const [showTCPA, setShowTCPA] = useState(false);


    return (
        <div style={{overflowY: 'scroll'}} id="outerCampaignCardDiv" className="descriptionListColumn">
            <Descriptions column={1} layout="horizontal" className="descriptionListColumn" title="">
                <Descriptions.Item label="Allow Duplicates">
                    <Switch checkedChildren="Yes" unCheckedChildren="No" defaultChecked />
                </Descriptions.Item>
                <Descriptions.Item label="Duplicate Criteria">
                    <Input />
                    <Select defaultValue={1}>
                        <Select.Option value={1}>
                            And
                        </Select.Option>
                        <Select.Option value={2}>
                            Or
                        </Select.Option>
                    </Select>
                </Descriptions.Item>
                <Descriptions.Item label="Apply TCPA Rules">
                    <Switch onChange={(val) => setShowTCPA(val)} checkedChildren="Yes" unCheckedChildren="No" defaultChecked />
                </Descriptions.Item>
                {showTCPA ? 
                    <Descriptions.Item label="TCPA Rules">
                        <div>
                            call frequency
                        </div>
                    </Descriptions.Item>
                :
                    null   
                }
                <Descriptions.Item label="Exclude Calls With Area Code:">
                    <Input placeholder="972"/>
                </Descriptions.Item>
                
            </Descriptions>
        </div>
    )
}
export default Fourth;