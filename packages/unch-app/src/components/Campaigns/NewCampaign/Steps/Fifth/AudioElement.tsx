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
                        <Icon style={{fontSize: '32px', color: '#1890ff'}} type="play-circle" />
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