import React from 'react';
import { Card, Select, DatePicker, Input } from 'antd';

class Home extends React.Component {
    constructor(props: any) {
        super(props)
    }

    // // // Function to handle the audience selector // // //
    handleAudienceSelect = (value) => {
        console.log(`selected ${value}`)
    }
    // // // // // //

    // // // Function to handle the campaign type selector // // //
    handleCampaignTypeSelect = (value) => {
        console.log(`selected ${value}`)
    }
    // // // // // //

    // // // Function to handle the survey selector // // //
    handleSurveySelect = (value) => {
        console.log(`selected ${value}`)
    }
    // // // // // //

    // // // Function to handle star and end dates // // //
    onChange = (date, dateString) => {
        console.log(date, dateString);
    }
    // // // // // //



    render() {

        const { Option } = Select;
        const { RangePicker } = DatePicker;

        return (
            <div>
                <Card style={{ width: 400 }}>
                    <b>Campaign Name</b>
                    <p>Flu Shot Survery</p>
                    <b>Campaign Summary</b>
                    <p>Flu survery and shot reminder</p>
                </Card>
                <b>Audience</b>
                <Card style={{ width: 400 }}>
                    <b>Please Select an Audience</b>
                    <br />
                    <Select style={{ width: 200 }} onChange={this.handleAudienceSelect}>
                        <Option value="baylor">Baylor</Option>
                        <Option value="parkland">Parkland</Option>
                        <Option value="plano">Plano</Option>
                    </Select>
                </Card>
                <b>Campaign Type</b>
                <Card style={{ width: 400 }}>
                    <b>Please Select a Campaign Type</b>
                    <br />
                    <Select style={{ width: 200 }} onChange={this.handleAudienceSelect}>
                        <Option value="baylor">Baylor</Option>
                        <Option value="parkland">Parkland</Option>
                        <Option value="plano">Plano</Option>
                    </Select>
                </Card>
                <b>Survey</b>
                <Card style={{ width: 400 }}>
                    <b>Please Select a Campaign Type</b>
                    <br />
                    <Select style={{ width: 200 }} onChange={this.handleAudienceSelect}>
                        <Option value="baylor">Baylor</Option>
                        <Option value="parkland">Parkland</Option>
                        <Option value="plano">Plano</Option>
                    </Select>
                </Card>
                <b>Schedule</b>
                <Card style={{ width: 400 }}>
                    <RangePicker onChange={this.onChange} />
                </Card>
                <b>Configuration</b>
                <Card style={{ width: 400 }}>
                    <RangePicker onChange={this.onChange} />
                </Card>
                <b>Configuration</b>
                <Card style={{ width: 400 }}>
                    <span><b>Caller ID</b> <Input style={{ width: 100 }} /></span>
                    <span>
                        <b>Call Back Number</b>
                        <Select style={{ width: 200 }} onChange={this.handleAudienceSelect}>
                            <Option value="baylor">Baylor</Option>
                            <Option value="parkland">Parkland</Option>
                            <Option value="plano">Plano</Option>
                        </Select>
                    </span>
                    <span><b>Frequency Per Customer</b> Every <Select /> call(s)</span>
                    <span> Survery Accepted and Completed Days <Select /> </span>
                    <span> Survery Accepted and Not Completed Days <Select /> </span>
                    <span> Survery Rejected Days <Select /> </span>
                </Card>
            </div>
        )
    }
}
export default Home;