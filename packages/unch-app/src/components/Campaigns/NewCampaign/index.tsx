import React, { Fragment } from 'react';
import First from './Steps/First';
import Second from './Steps/Second';
import Third from './Steps/Third';
import Fourth from './Steps/Fourth';
import Fifth from './Steps/Fifth/Fifth';
import { Steps, Button, Modal, message } from 'antd';


class NewCampaign extends React.Component <any, any> {
    constructor(props: any){
        super(props)
        this.state = {
            current: 0,
        }
        
    }

    next = () => {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev = () => {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render(){
        const {Step} = Steps;
        const { current } = this.state;
        // var x = document.getElementById("outerCampaignCardDiv")
        // console.log("width: ", x)

        const componentList = [
            {
                key: 1,
              title: 'Config',
              content: <First />,
            },
            {
                key: 2,
              title: 'Campaign Schedule',
              content: <Second />,
            },
            {
                key: 3,
              title: 'Voice/SMS Settings',
              content: <Third />,
            },
            {
                key: 4,
              title: 'Campaign Roles',
              content: <Fourth />,
            },
            {
                key: 5,
                title: 'Audio',
                content: <Fifth />
            },
        ];
        return(
            <div style={{maxWidth: '100vw', maxHeight: '100vh'}}>
                <Button  
                    onClick={this.props.showModal}
                    style={{marginBottom: 20}} type="primary" size="large"
                >
                    New Campaign
                </Button>
                <Modal 
                    bodyStyle={{height: '80vh', marginTop: 0, padding: 0}}
                    style={{ top: 0 }}
                    width={'100vw'}
                    visible={this.props.visible} 
                    title={
                        <Steps current={current} style={{width: '100%', height: '100%'}}>
                            {componentList.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                    }
                    footer={[
                        <div key={1} className="steps-action">
                            {current < componentList.length - 1 && (
                                <Button type="primary" onClick={() => this.next()}>
                                    Next
                                </Button>
                            )}
                            {current === componentList.length - 1 && (
                                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                    Done
                                </Button>
                            )}
                            {current > 0 && (
                                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                    Previous
                                </Button>
                            )}
                        </div>
                    ]}
                    onCancel={this.props.showModal}
                    onOk={this.props.showModal}
                >
                    
                    <div style={{width: '100%', height:'100%'}}>{componentList[current].content}</div>
                </Modal>
            </div>
            
        )
    }
}
export default NewCampaign