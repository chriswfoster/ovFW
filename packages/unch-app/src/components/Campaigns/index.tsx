import React from 'react';
import Main from '../../ui/main';
import { Row, Col, Card, Button, Tag } from 'antd';
import pharmNames from './staticCampaignData.json';
import campaigns from './NewCampaign/data.json';
import {Link} from 'react-router-dom';
import './campaign.css'
import NewCampaign from './NewCampaign/NewCampaign';
import ViewCampaign from './ViewCampaign';
import ButtonComponent from './ButtonComponent';

class Campaigns extends React.Component<any, any> {
    constructor(props: any){
        super(props)
        this.state = {
            showNewModal: false,
            showEditModal: false,
            viewCampaign: {}
        }
    }

    dialingModeHandler = () => {
        let numb = Math.floor(Math.random() * 3);
        switch (numb){
            case 0:
            return "Progressive";
            case 1:
            return "Predictive";
            case 2: 
            return "Preview"
            default: break;
        }
    }

    render(){
        console.log('campaigns: ', campaigns.results.campaigns.campaign.name)
        return(
            <div style={{height: '100vh', overflowY: "scroll"}}>
                <Button type="primary"><Link to="/newCampaign">New Campaign</Link></Button>
                <div className="cardsFlex">
                    {pharmNames.map((pharm, key) => {
                        let randomDisable = Math.floor(Math.random()*2);
                        return (
                            <Card 

                                key={key}
                                title={`${campaigns.results.campaigns.campaign.name + Math.floor(Math.random()*100)}`}
                                // title={`${pharm.name} - ${pharm.type}`}
                                style={{width: "25%", marginRight: 20, marginLeft: 20, marginBottom: 20}}
                            >
                                <div className="cardsInnerFlex">
                                    <ButtonComponent />

                                    <span><b>Description:</b> {"This is the "+ campaigns.results.campaigns.campaign.description + " campaign."}</span>

                                    <span><b>Dialing Mode:</b> {this.dialingModeHandler()}</span>
                                    <span><b>Start Date:</b> {pharm.start}</span>
                                    <span><b>End Date:</b> {pharm.end}</span>

                                    <span><b>Skill Group:</b> {campaigns.results.campaigns.campaign.skillGroupInfos.skillGroupInfo.skillGroup.refURL}</span>
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