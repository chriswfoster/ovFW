import React, { useState } from 'react'
import { Button, Input, Icon, Select } from 'antd'
import { array } from 'one-core'

const AddColumns = (props: any) => {

    const [inputs, setInputs] = useState([])

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    const { Option } = Select;

    return (
        <div>
            <div style={{ width: "500px" }}>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    alignContent: "center",
                    paddingBottom: "10px"
                }}>
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        style={{ paddingRight: "15px" }}
                    />
                    <Input placeholder="Add Column" size="small" />
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="jack">String</Option>
                        <Option value="lucy">Var Char</Option>
                        <Option value="disabled" >Intiger</Option>
                    </Select>
                </div>

                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    alignContent: "center",
                    paddingBottom: "10px"
                }}>
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        style={{ paddingRight: "15px" }}
                    />
                    <Input placeholder="Add Column" size="small" />
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="jack">String</Option>
                        <Option value="lucy">Var Char</Option>
                        <Option value="disabled" >Intiger</Option>
                    </Select>
                </div>

                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    alignContent: "center",
                    paddingBottom: "10px"
                }}>
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        style={{ paddingRight: "15px" }}
                    />
                    <Input placeholder="Add Column" size="small" />
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="jack">String</Option>
                        <Option value="lucy">Var Char</Option>
                        <Option value="disabled" >Intiger</Option>
                    </Select>
                </div>

            </div>
            <Button icon="plus" type="primary"> Add Another Column </Button>
        </div>
    )


}
export default AddColumns