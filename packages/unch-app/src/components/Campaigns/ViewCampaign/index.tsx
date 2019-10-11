import React, { Fragment } from 'react';
import { Button, Modal } from 'antd';

const ViewCampaign = (props: any) => {
    return(
        <div>
            <Modal 
                visible={props.visible} 
                title={"Edit Campaign"}
                onCancel={props.showModal}
                onOk={props.showModal}
            >
                <div className="carsInnerFlex">
                    <span><b>Type:</b> {props.data.type}</span>
                    <span><b>Start Date:</b> {props.start}</span>
                    <span><b>End Date:</b> {props.data.end}</span>
                    <span><b>Audience:</b> {props.data.audience}</span>
                </div>
            </Modal>
        </div>
        
    )
}
export default ViewCampaign