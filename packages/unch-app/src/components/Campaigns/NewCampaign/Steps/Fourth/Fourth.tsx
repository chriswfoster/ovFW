import React, {useState} from 'react';
import { Descriptions, Switch, Input, Select } from 'antd';
import Duplicate from './Duplicate';
import TCPA from './TCPA';


const Fourth = () => {
    const [showDuplicate, setShowDuplicate] = useState(false);
    const [showTCPA, setShowTCPA] = useState(false);
    const inputStyles = {
        width: 220
    }

    return (
        <div style={{overflowY: 'scroll'}} id="outerCampaignCardDiv" className="descriptionListColumn">
            <Descriptions>
                <Descriptions.Item label="Allow Duplicates">
                    <Switch onChange={val => setShowDuplicate(val)} checkedChildren="Yes" unCheckedChildren="No" checked={showDuplicate} />
                </Descriptions.Item>
            </Descriptions>
            {showDuplicate ? <Duplicate /> : ''}
            <Descriptions>
                <Descriptions.Item label="Apply TCPA Rules">
                    <Switch onChange={(val) => setShowTCPA(val)} checkedChildren="Yes" unCheckedChildren="No" checked={showTCPA} />
                </Descriptions.Item>
            </Descriptions>
            {showTCPA ? <TCPA /> : ''}
                
        </div>
    )
}
export default Fourth;