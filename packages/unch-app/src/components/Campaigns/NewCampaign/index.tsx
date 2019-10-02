import React, { Fragment } from 'react';
import { Button, Modal } from 'antd';

interface iProps {
    visible: boolean;
    showModal: any;
}
class NewCampaign extends React.Component <any, iProps> {
    constructor(props: any){
        super(props)
    }

    render(){
        return(
            <div>
                <Button  
                    onClick={this.props.showModal}
                    style={{marginBottom: 20}} type="primary" size="large">
                    New Campaign
                </Button>
                <Modal 
                    visible={this.props.visible} 
                    title={"New Campaign"}
                    onCancel={this.props.showModal}
                    onOk={this.props.showModal}
                >
                    Create new campaign
                </Modal>
            </div>
            
        )
    }
}
export default NewCampaign