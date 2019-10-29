import React from 'react';
import { Row, Col, Input, Radio, Descriptions, Button } from "antd";

class SharedDrive extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            value: 1,
            showUpload: false
        };
    }

    onChange = (e: any) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    handleShowUpload = () => {
        this.setState({
            showUpload: true
        })
    }

    handleHideUpload = () => {
        this.setState({
            showUpload: false
        })
    }

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <div className="App" >
                <Row gutter={8}>
                    <Col span={12}>
                        <div>
                            <Input size="large" placeholder="File Path" />
                            <Row gutter={24}>
                                <Col span={12}>
                                    <Input size="large" placeholder="Username" />
                                </Col>
                                <Col span={12}>
                                    <Input size="large" placeholder="Password" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span={12}>
                        <Radio.Group onChange={this.onChange} value={this.state.value}>
                            <Radio style={radioStyle} value={1} onClick={this.handleHideUpload}>
                                One time only
                        </Radio>
                            <Radio style={radioStyle} value={2} onClick={this.handleShowUpload}>
                                Updated at specific time(s) of the day
                        </Radio>
                            <Radio style={radioStyle} value={3} onClick={this.handleShowUpload}>
                                Updated at regular intervals throughout the day
                        </Radio>
                        </Radio.Group>
                        {this.state.showUpload ? <Button type="primary">Upload</Button> : null}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SharedDrive;