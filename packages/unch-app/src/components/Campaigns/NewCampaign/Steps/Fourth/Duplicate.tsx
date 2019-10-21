import React from 'react';
import {Switch, Button, Select, Descriptions} from 'antd';

class Duplicate extends React.Component<any, any>{
    constructor(props: any){
        super(props)
        this.state = {
            conditions: [this.getCondition()],
        }
    }

    getCondition = () => {
        const inputStyles = {
            width: 220
        }
        return (
            <div key = {Math.random() * 1000}>
                <Select style={inputStyles}>
                    <Select.Option key={1}>
                        First_Name
                    </Select.Option>
                    <Select.Option key={2}>
                        Last_Name
                    </Select.Option>
                    <Select.Option key={3}>
                        Appointment_Date
                    </Select.Option>
                </Select>
                <Select defaultValue={1}>
                    <Select.Option value={1}>
                        And
                    </Select.Option>
                    <Select.Option value={2}>
                        Or
                    </Select.Option>
                    <Select.Option value={3}>
                        .
                    </Select.Option>
                </Select>
            </div>)
    }

    addCondition = () => {
        const tempConds = this.state.conditions;
        tempConds.push(this.getCondition());
        this.setState({conditions: tempConds})
    }

    render(){
        const inputStyles = {
            width: 220
        }
        
        return (
            <Descriptions column={1} layout="vertical" className="" title="">
                <Descriptions.Item  label="Duplicate Criteria">
                    {this.state.conditions.map(cond => cond)}
                    {/* <Select style={inputStyles}>
                        <Select.Option key={1}>
                            First_Name
                        </Select.Option>
                        <Select.Option key={2}>
                            Last_Name
                        </Select.Option>
                        <Select.Option key={3}>
                            Appointment_Date
                        </Select.Option>
                    </Select>
                    <Select defaultValue={1}>
                        <Select.Option value={1}>
                            And
                        </Select.Option>
                        <Select.Option value={2}>
                            Or
                        </Select.Option>
                        <Select.Option value={3}>
                            .
                        </Select.Option>
                    </Select> */}
                    <Button onClick={this.addCondition} icon="plus"></Button>
                </Descriptions.Item>
            
            </Descriptions>
        )
    }
}
export default Duplicate