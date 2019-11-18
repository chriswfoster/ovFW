import React from 'react';
import {Descriptions, Checkbox, Button} from 'antd';

const UCCEColumnDefs = (props: any) => {

    
    return (
        <div>
            <Descriptions column={1} layout="horizontal" className="descriptionListColumn" title="">
                <Descriptions.Item label="Headers Present">
                    <Checkbox />
                </Descriptions.Item>
                <Descriptions.Item label="First Name">
                    <span style={{display: "flex", flexDirection: "row"}}>
                        {/* <Input placeholder="First_Name"/> */}
                        {props.dbDataTypeSelect}
                    </span>
                </Descriptions.Item>
                <Descriptions.Item label="Last Name">
                    <span style={{display: "flex", flexDirection: "row"}}>
                        {/* <Input placeholder="Last_Name"/> */}
                        {props.dbDataTypeSelect}
                    </span>
                </Descriptions.Item>
                <Descriptions.Item label="Phone Number">
                    <span style={{display: "flex", flexDirection: "row"}}>
                        {/* <Input placeholder="Appointment_Date"/> */}
                        {props.dbDataTypeSelect}
                    </span>
                </Descriptions.Item>
            </Descriptions>
            <Button icon="plus-square"></Button>
        </div>
    )
}
export default UCCEColumnDefs;