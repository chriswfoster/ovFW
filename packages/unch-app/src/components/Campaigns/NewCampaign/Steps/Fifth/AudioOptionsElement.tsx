import React from 'react';
import {Card, Button, Descriptions, Input, Icon, Switch, Select} from 'antd'


export default class AudioOptionsElement extends React.Component<any, any>{
    constructor(props: any){
        super(props)
    }

    render(){
        const cardGridStyles = {
            width: '50%',
            height: '90%'
        }
        const inputStyles = {
            width: 220
        }
        const optionsForMenu = ["Cancel", "Transfer", "Question 1", "Question 2"]
        const OptionSelect = (
            <Select style={inputStyles}>
                {optionsForMenu.map((opt, i) => (
                    <Select.Option key={i} value={i}>
                        {opt}
                    </Select.Option>
                ))}
            </Select>
        )
        return (
            <Card style={{width: '60vw', minWidth: 405}}>
                <Card.Grid style={cardGridStyles}>
                    <Descriptions column={1} layout="vertical" className="descriptionListColumn" title="">
                        <Descriptions.Item label="Audio With Options">
                            <span>IVR_options_menu.wav</span> <br />
                            <Button style={{ marginRight: "20%"}} icon="upload" ></Button>
                            <Button style={{ color: '#1890ff'}} icon="play-circle" ></Button>
                        </Descriptions.Item>
                        <Descriptions.Item label="TTS">
                            <Input.TextArea placeholder="Hello this is so and so"/>
                        </Descriptions.Item>
                    </Descriptions>
                
                
                <Button icon="delete" onClick={() => this.props.delete(this.props.index)}></Button>
                </Card.Grid>
                <Card.Grid style={cardGridStyles}>
                    <Descriptions column={1} layout="horizontal" className="descriptionListColumn" title="">
                        <Descriptions.Item label="1">
                            <Switch /> Go To {OptionSelect}
                        </Descriptions.Item>
                        <Descriptions.Item label="2">
                            <Switch /> Go To {OptionSelect}
                        </Descriptions.Item>
                        <Descriptions.Item label="3">
                            <Switch /> Go To {OptionSelect}
                        </Descriptions.Item>
                        <Descriptions.Item label="4">
                            <Switch /> Go To {OptionSelect}
                        </Descriptions.Item>
                        <Descriptions.Item label="5">
                            <Switch /> Go To {OptionSelect}
                        </Descriptions.Item>
                        <Descriptions.Item label="6">
                            <Switch /> Go To {OptionSelect}
                        </Descriptions.Item>
                        <Descriptions.Item label="7">
                            <Switch /> Go To {OptionSelect}
                        </Descriptions.Item>
                        <Descriptions.Item label="8">
                            <Switch /> Go To {OptionSelect}
                        </Descriptions.Item>
                        <Descriptions.Item label="9">
                            <Switch /> Go To {OptionSelect}
                        </Descriptions.Item>
                        <Descriptions.Item label="0">
                            <Switch /> Go To {OptionSelect}
                        </Descriptions.Item>
                        <Descriptions.Item label="#">
                            <Switch /> Go To {OptionSelect}
                        </Descriptions.Item>
                        <Descriptions.Item label="*">
                            <Switch /> Go To {OptionSelect}
                        </Descriptions.Item>
                    </Descriptions>

                </Card.Grid>
            </Card>
        )
    }

}