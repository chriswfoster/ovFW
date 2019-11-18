import React from 'react'
import { Button, Timeline, Radio, Divider, Select, Card, Icon } from 'antd';
import AudioElement from './AudioElement';
import AudioOptionsElement from './AudioOptionsElement';
import DataElement from './DataElement';

class SmsAudioConfig extends React.Component<any, any>{
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

    removeCompFromList = (ind) => {
        let tempArr = this.state.compList;
        tempArr.splice(ind, 1);
        this.setState({compList: tempArr})
    }

    compListBuilder = (typeOfComp, i) => {
        switch (typeOfComp) {
            case "audio":
            return  <Timeline.Item key={i} dot={<Icon type="sound" style={{ fontSize: '16px' }} />}>
                        {/* {typeOfComp} */}
                        <AudioElement key={i} index={i} delete={this.removeCompFromList}/>
                    </Timeline.Item>

            case "data":
            return  <Timeline.Item key={i} dot={<Icon type="file-unknown" style={{ fontSize: '16px' }} />}>
                        {/* {typeOfComp} */}
                        <DataElement key={i} index={i} delete={this.removeCompFromList}/>
                    </Timeline.Item>

            case "audio-options":
            return  <Timeline.Item key={i} dot={<Icon type="sound" style={{ fontSize: '16px' }} />}>
                        {/* {typeOfComp} */}
                        <AudioOptionsElement key={i} index={i} delete={this.removeCompFromList}/>
                    </Timeline.Item>

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
        return(
            <div style={{overflowY: 'scroll'}} id="outerCampaignCardDiv" className="divFlexRowsNoWrap">
                {/* Left side of page */}
                <div style={{width: 220}}>
                    <h3>Add Step: </h3>
                    <Select style={{...inputStyles, marginBottom: 20}} onChange={val => this.setState({dataToAdd: val})}>
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
                        <Button disabled={!dataToAdd} onClick={this.addToCompList} type="primary">Add Element</Button>
                </div>
                <Divider style={{height: '100%'}} type="vertical" />
                {/* Right side of page */}
                <div className="audioColumnsAlternative">
                    <Timeline >

                        {compList.map((item, i) => {
                            return this.compListBuilder(item, i)
                        })}
                    </Timeline>

                </div>
                    {/* <Card style={{width: '30vw', marginTop: 30, minWidth: 405}}>
                        <Select style={{...inputStyles, marginRight: 20}} onChange={val => this.setState({dataToAdd: val})}>
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
                    </Card> */}
            </div>
        )
    }
}
export default SmsAudioConfig