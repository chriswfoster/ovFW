import React from 'react';
import { Button, Descriptions, Radio, Divider, Select } from 'antd';
import AudioElement from './AudioElement';
import AudioOptionsElement from './AudioOptionsElement';
import DataElement from './DataElement';


export default class Fifth extends React.Component<any, any> {
    constructor(props: any){
        super(props)
        this.state = {
            radioSelected: 1,
            compList: ["audio"],
            dataToAdd: ''
        }
    }

    addToCompList = () => {
        const {dataToAdd, compList} = this.state;
        let tempArr = compList;
        switch (dataToAdd) {
            case "audio":
            tempArr.push("audio");
            this.setState({compList: tempArr});
            break;

            case "data":
            tempArr.push("data");
            this.setState({compList: tempArr});
            break;

            case "audio-options":
            tempArr.push("audio-options");
            this.setState({compList: tempArr});
            break;

            default: break;
        }
    }

    compListBuilder = (typeOfComp, i) => {
        switch (typeOfComp) {
            case "audio":
            return <AudioElement key={i} />

            case "data":
            return <DataElement key={i} />

            case "audio-options":
            return <AudioOptionsElement key={i} />

            default: break;
        }
    }

    render(){
        console.log(this.state)
        const {radioSelected, compList, dataToAdd} = this.state;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        const inputStyles = {
            width: 220
        }
        return (
            <div style={{overflowY: 'scroll'}} id="outerCampaignCardDiv" className="divFlexRowsNoWrap">
                <div style={{width: 220}}>
                    <h3>Select Message Type:</h3>
                    <Radio.Group value={radioSelected} style={{marginLeft: 50}} onChange={e => this.setState({radioSelected: e.target.value})}>
                        <Radio style={radioStyle} value={1}>
                            Text
                        </Radio>
                        <Radio style={radioStyle} value={2}>
                            SMS
                        </Radio>
                        <Radio style={radioStyle} value={3}>
                            Other?
                        </Radio>
                    </Radio.Group>
                </div>
                    <Divider style={{height: '100%'}} type="vertical" />
                <div className="audioColumns">
                    {compList.map((item, i) => {
                        return this.compListBuilder(item, i)
                    })}
                    <div>
                        <Select style={inputStyles} onChange={val => this.setState({dataToAdd: val})}>
                            <Select.Option value={"audio"} key={1}>
                                Audio
                            </Select.Option>
                            <Select.Option value={"data"} key={2}>
                                Data
                            </Select.Option>
                            <Select.Option value={"audio-options"} key={3}>
                                Audio with Options
                            </Select.Option>
                        </Select>
                        <Button onClick={this.addToCompList} type="primary">Add Element</Button>
                    </div>
                </div>
            </div>
        )
    }
}