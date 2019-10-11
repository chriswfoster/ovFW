import React from 'react';
import Main from '../../ui/main';
import { Card, Button } from 'antd';
import pharmNames from './staticCampaignData.json';
import './campaign.css'
import NewCampaign from './NewCampaign';
import ViewCampaign from './ViewCampaign';

class Campaigns extends React.Component<any, any> {
    constructor(props: any){
        super(props)
        this.state = {
            showNewModal: false,
            showEditModal: false,
            viewCampaign: {}
        }
    }



    render(){
        return(
            <div style={{height: '100vh', overflowY: "scroll"}}>
                <NewCampaign showModal={() => this.setState({showNewModal: !this.state.showNewModal})} visible={this.state.showNewModal}/>
                <div className="cardsFlex">
                    {pharmNames.map((pharm, key) => {
                        return (
                            <Card 
                                onClick={() => this.setState({viewCampaign: pharm, showEditModal: true})}
                                key={key}
                                title={`${pharm.name} - ${pharm.type}`}
                                style={{width: "25%", marginRight: 20, marginLeft: 20, marginBottom: 20}}
                            >
                                <div className="cardsInnerFlex">
                                    <span><b>Type:</b> {pharm.type}</span>
                                    <span><b>Start Date:</b> {pharm.start}</span>
                                    <span><b>End Date:</b> {pharm.end}</span>
                                    <span><b>Audience:</b> {pharm.audience}</span>
                                </div>
                            </Card>
                        )
                    })}
                </div>
                <ViewCampaign 
                    data={this.state.viewCampaign} 
                    showModal={() => this.setState({showEditModal: !this.state.showEditModal})} 
                    visible={this.state.showEditModal}
                />
            </div>
        )
    }
}
export default Campaigns;