import React, {useState} from 'react'
import { Card, DatePicker, Button, Slider, Checkbox, Select, Divider } from 'antd';
import { Descriptions } from 'antd';

const Second = () => {
    const [checkboxPrimary, setCbPrimary] = useState(false)
    
    const {RangePicker} = DatePicker

    const marks = {
        8: '8:00 AM',
        9: '9:00 AM',
        10: '10:00 AM',
        11: '11:00 AM',
        12: '12:00 PM',
        13: '1:00 PM',
        14: '2:00 PM',
        15: '3:00 PM',
        16: '4:00 PM',
        17: '5:00 PM',
        18: '6:00 PM',
        19: {
          style: {
            color: '#f50',
          },
          label: <strong>7:00 PM</strong>,
        },
    };

    const checkBoxHolidays = () => {
        let cbArray = [];
        let i = 0;
        while (i < 4) {
            cbArray.push(
                <div style={{width: '100%'}}key={i}>
                    <Select style={inputStyles}>
                        <Select.Option key={1}>
                            Thanksgiving
                        </Select.Option>
                        <Select.Option key={2}>
                            Christmas
                        </Select.Option>
                    </Select> < br />
                    <Checkbox />
                    <Slider min={8} max={19} className="sliders" range marks={marks} defaultValue={[8, 11]} />
                    <Divider type="horizontal" />
                </div>
            )
            i++;
        }
        return cbArray;
    }
    const inputStyles = {
        width: 220
    }

    return (
        <div style={{overflowY: 'scroll'}} id="outerCampaignCardDiv" className="descriptionListColumn">
            <Descriptions layout="vertical" >
                <Descriptions.Item label="Campaign Start and End Date: ">
                    <RangePicker onChange={() => console.log("Date picked")} />
                </Descriptions.Item>
            </Descriptions>
            <div className="descriptionListColumn">
                <span className="buttonSliders"><Button style={{marginRight: 30}} type="primary">S</Button><Slider min={8} max={19} className="sliders" range marks={marks} defaultValue={[8, 11]} /></span>
                <span className="buttonSliders"><Button style={{marginRight: 30}} type="primary">M</Button><Slider min={8} max={19} className="sliders" range marks={marks} defaultValue={[8, 11]} /></span>
                <span className="buttonSliders"><Button style={{marginRight: 30}} type="primary">T</Button><Slider min={8} max={19} className="sliders" range marks={marks} defaultValue={[8, 11]} /></span>
                <span className="buttonSliders"><Button style={{marginRight: 30}} type="primary">W</Button><Slider min={8} max={19} className="sliders" range marks={marks} defaultValue={[8, 11]} /></span>
                <span className="buttonSliders"><Button style={{marginRight: 30}} type="primary">T</Button><Slider min={8} max={19} className="sliders" range marks={marks} defaultValue={[8, 11]} /></span>
                <span className="buttonSliders"><Button style={{marginRight: 30}} type="primary">F</Button><Slider min={8} max={19} className="sliders" range marks={marks} defaultValue={[8, 11]} /></span>
                <span className="buttonSliders"><Button style={{marginRight: 30}} type="primary">S</Button><Slider min={8} max={19} className="sliders" range marks={marks} defaultValue={[8, 11]} /></span>
            </div>
            <div style={{width: '100%'}}>
                <Checkbox 
                    defaultChecked={false} 
                    onChange={e => setCbPrimary(e.target.checked)} 
                    value={checkboxPrimary}
                /> <span>Exclude Dates</span>
                { !checkboxPrimary ?
                    ''
                :
                    <div style={{width: '100%', marginLeft: 40}}>
                        {checkBoxHolidays()}
                    </div>
                }
            </div>
        </div>
    )
}
export default Second