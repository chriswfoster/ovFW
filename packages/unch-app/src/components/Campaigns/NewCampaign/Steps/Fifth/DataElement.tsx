import React from 'react';
import { Select, Card } from 'antd';


export default class DataElement extends React.Component<any, any>{
    constructor(props: any){
        super(props)
    }

    render(){
        const inputStyles = {
            width: 220
        }
        return (
            <Card>
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
            </Card>
        )
    }

}