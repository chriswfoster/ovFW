// import React from 'react';
// import { Button, Descriptions, Radio, Divider, Select, Card } from 'antd';
// import AudioElement from '../../../NewCampaign/SmsAudioConfig/AudioElement';
// import AudioOptionsElement from '../../../NewCampaign/SmsAudioConfig/AudioOptionsElement';
// import DataElement fro../../../NewCampaign/SmsAudioConfig/DataElementent';


// export default class Fifth extends React.Component<any, any> {
//     constructor(props: any){
//         super(props)
//         this.state = {
//             radioSelected: 1,
//             compList: ["audio"],
//             dataToAdd: ''
//         }
//     }

//     addToCompList = () => {
//         const {dataToAdd, compList} = this.state;
//         let tempArr = compList;
//         switch (dataToAdd) {
//             case "audio":
//             tempArr.push("audio");
//             this.setState({compList: tempArr});
//             break;

//             case "data":
//             tempArr.push("data");
//             this.setState({compList: tempArr});
//             break;

//             case "audio-options":
//             tempArr.push("audio-options");
//             this.setState({compList: tempArr});
//             break;

//             default: break;
//         }
//     }

//     removeCompFromList = (ind) => {
//         let tempArr = this.state.compList;
//         tempArr.splice(ind, 1);
//         this.setState({compList: tempArr})
//     }

//     compListBuilder = (typeOfComp, i) => {
//         switch (typeOfComp) {
//             case "audio":
//             return <AudioElement key={i} index={i} delete={this.removeCompFromList}/>

//             case "data":
//             return <DataElement key={i} index={i} delete={this.removeCompFromList}/>

//             case "audio-options":
//             return <AudioOptionsElement key={i} index={i} delete={this.removeCompFromList}/>

//             default: break;
//         }
//     }

//     render(){
//         console.log(this.state)
//         const {radioSelected, compList, dataToAdd} = this.state;
//         const radioStyle = {
//             display: 'block',
//             height: '30px',
//             lineHeight: '30px',
//         };
//         const inputStyles = {
//             width: 220
//         }
//         return (
//             <div style={{overflowY: 'scroll'}} id="outerCampaignCardDiv" className="divFlexRowsNoWrap">
//                 <div style={{width: 220}}>
//                     <h3>Select Message Type:</h3>
//                     <Radio.Group value={radioSelected} style={{marginLeft: 50}} onChange={e => this.setState({radioSelected: e.target.value})}>
//                         <Radio style={radioStyle} value={1}>
//                             Text
//                         </Radio>
//                         <Radio style={radioStyle} value={2}>
//                             SMS
//                         </Radio>
//                         <Radio style={radioStyle} value={3}>
//                             Other?
//                         </Radio>
//                     </Radio.Group>
//                 </div>
//                     <Divider style={{height: '100%'}} type="vertical" />
//                 <div className="audioColumns">
//                     {compList.map((item, i) => {
//                         return this.compListBuilder(item, i)
//                     })}
//                     <Card style={{width: '30vw', marginTop: 30, minWidth: 405}}>
//                         <Select style={{...inputStyles, marginRight: 20}} onChange={val => this.setState({dataToAdd: val})}>
//                             <Select.Option value={"audio"} key={1}>
//                                 Audio
//                             </Select.Option>
//                             <Select.Option value={"data"} key={2}>
//                                 Data
//                             </Select.Option>
//                             <Select.Option value={"audio-options"} key={3}>
//                                 Audio with Options
//                             </Select.Option>
//                         </Select>
//                         <Button onClick={this.addToCompList} type="primary">Add Element</Button>
//                     </Card>
//                 </div>
//             </div>
//         )
//     }
// }