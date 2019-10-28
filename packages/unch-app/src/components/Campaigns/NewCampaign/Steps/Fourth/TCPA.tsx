import React, {useState, Fragment} from 'react';
import {Input, Switch, Descriptions, Select} from 'antd';

const TCPA = props => {
    const [showTCPA, setShowTCPA] = useState(true);
        return (
            <Descriptions column={1} layout="horizontal" className="" title="">   
                
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
                    <Input style={{width: 50}} placeholder="972"/> 
                    {" "} if already called {" "}
                    <Input style={{width: 50}}/> 
                    {" "} times a {" "}
                    <Select style={{width: 100}}>
                        <Select.Option key={0}>
                            Day
                        </Select.Option>
                        <Select.Option key={1}>
                            Week
                        </Select.Option>
                        <Select.Option key={2}>
                            Month
                        </Select.Option>
                    </Select>
                </Descriptions.Item>

            </Descriptions>
        )
}
export default TCPA