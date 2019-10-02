import React from 'react';
import Main from '../../ui/main';
import { Card, Button } from 'antd';
import pharmNames from './staticCampaignData.json';
import './campaign.css'
import NewCampaign from './NewCampaign';

class Campaigns extends React.Component {
    constructor(props: any){
        super(props)
        this.state = {
            showModal: false,
        }
    }

    render(){
        return(
            <div style={{height: '100vh', overflowY: "scroll"}}>
                {/* <Main> */}
                    <div>
                        <NewCampaign showModal={() => this.setState({showModal: !this.state.showModal})} visible={this.state.showModal}/>
                        <div className="cardsFlex">
                            {pharmNames.map((pharm, key) => {
                                return (
                                    <Card 
                                    key={key}
                                    title={`${pharm.name} - ${pharm.type}`}
                                    style={{width: "25%", marginRight: 20, marginLeft: 20, marginBottom: 20}}
                                    >
                                        Campaign Content
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                {/* </Main> */}
            </div>
        )
    }
}
export default Campaigns;