import React from 'react';
import {Card, Button, Descriptions, Icon, Input} from 'antd'

export default class AudioElement extends React.Component<any, any>{
    constructor(props: any){
        super(props)
    }

    render(){
        return (
            <Card style={{width: '30vw', minWidth: 405}}>
                <Descriptions column={1} layout="vertical" className="descriptionListColumn" title="">
                    <Descriptions.Item label="Default Audio:">
                        <span>IVR_greetings_audio.wav</span> <br />
                        <Button style={{ marginRight: "20%"}} icon="upload" ></Button>
                        <Button style={{ color: '#1890ff'}} icon="play-circle" ></Button>
                    </Descriptions.Item>
                    <Descriptions.Item label="TTS:">
                        <Input.TextArea placeholder="Hello this is so and so"/>
                    </Descriptions.Item>
                </Descriptions>
                <Button icon="delete" onClick={() => this.props.delete(this.props.index)}></Button>
            </Card>
        )
    }

}