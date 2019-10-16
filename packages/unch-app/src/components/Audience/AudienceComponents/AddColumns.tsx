import React, { useState } from 'react'
import { Button, Input, Icon, Select } from 'antd'
import { array } from 'one-core'

const AddColumns = (props: any) => {

    const [inputs, setInputs] = useState([])

    const addInputs = () => {
        let tempInputs = inputs
        tempInputs.push("anwjawnfajnf")
        setInputs(tempInputs)
        // console.log(tempInputs)
    }

    const giveMeData = () => {
        let arrayData = [];
        for (let i = 0; i < inputs.length; i++) {
            arrayData.push("for the love of strings")
        }
        // return inputs.map((input, i) => {
        //     console.log(inputs)
        //     return (
        //         <div key={i}>
        //             <Button>X</Button>
        //             {input}
        //         </div>
        //     )
        // })
        console.log(arrayData)
        return arrayData
    }

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    const { Option } = Select;

    return (
        <div>
            <div style={{ width: "500px" }}>
                <div style={{
                    display: "flex",
                    flexwrap: "wrap",
                    justifycontent: "space-around",
                    alignitems: "center",
                    aligncontent: "center"
                }}>
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                    />
                    <Input placeholder="Basic usage" size="small" />
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="jack">Type</Option>
                        <Option value="lucy">Type</Option>
                        <Option value="disabled" >Type</Option>
                        <Option value="Yiminghe">Type</Option>
                    </Select>
                </div>

                <div style={{
                    display: "flex",
                    flexwrap: "wrap",
                    justifycontent: "space-around",
                    alignitems: "center",
                    aligncontent: "center"
                }}>
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                    />
                    <Input placeholder="Basic usage" size="small" />
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="jack">Type</Option>
                        <Option value="lucy">Type</Option>
                        <Option value="disabled" >Type</Option>
                        <Option value="Yiminghe">Type</Option>
                    </Select>
                </div>

                <div style={{
                    display: "flex",
                    flexwrap: "wrap",
                    justifycontent: "space-around",
                    alignitems: "center",
                    aligncontent: "center"
                }}>
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        style={{
                            cursor: "pointer",
                            position: "relative",
                            top: "4px",
                            fontsize: "24px",
                        }}
                    />
                    <Input placeholder="Basic usage" size="small" />
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="jack">Type</Option>
                        <Option value="lucy">Type</Option>
                        <Option value="disabled" >Type</Option>
                        <Option value="Yiminghe">Type</Option>
                    </Select>
                </div>

            </div>
            <Button icon="plus" type="primary"> Add Another Column </Button>
        </div>
    )


}
export default AddColumns