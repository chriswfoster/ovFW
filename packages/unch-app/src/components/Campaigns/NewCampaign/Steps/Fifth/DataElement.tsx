import React from 'react';
import { Select, Card, Descriptions, Button } from 'antd';


export default class DataElement extends React.Component<any, any>{
    constructor(props: any){
        super(props)
    }

    render(){
        const inputStyles = {
            width: 220
        }
        return (
            <Card style={{width: '30vw', minWidth: 405}}>
                <Descriptions column={1} layout="horizontal" className="descriptionListColumn" title="">
                    <Descriptions.Item label="Data: ">
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
                    </Descriptions.Item>
                </Descriptions>
                <Button icon="delete" onClick={() => this.props.delete(this.props.index)}></Button>
            </Card>
        )
    }

}