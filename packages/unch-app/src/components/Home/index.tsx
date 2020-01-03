import React, { Component } from 'react';
import axios from "axios";
import ImagingCancel from "../ImagingCancel/index"
import { Modal, Button, Tabs } from 'antd';
import "./imaging.css";

class Home extends Component {
    constructor() {
        super()
        this.state = {
            addVisible: false,
            editVisible: false,
            uploadVisible: false,
            newVisitId: "",
            newVisitName: "",
            editVisitIndex: null,
            editVisitId: "",
            editVisitName: "",
            fileUpload: "",
            imagingVisitCodes: []
        }
    }


    // // // GET requets // // //
    componentDidMount() {
        axios.get("https://9d67f927.ngrok.io/agenta/v1/Departments?clientTypeId=57c908e8-fd28-4f95-8edb-659b73971a63", {
            headers: {
                Accept: "application/json"
            }
        })
            .then(res => {
                this.setState({ imagingVisitCodes: res.data.results })
                console.log(res.data.results)
            })
    }

    // // // GET Method to refresh tables // // //
    getDepartments = (clientTypeId) => {
        axios.get("https://9d67f927.ngrok.io/agenta/v1/Departments?clientTypeId=57c908e8-fd28-4f95-8edb-659b73971a63", {
            headers: {
                Accept: "application/json"
            }
        })
            .then(res => {
                this.setState({ imagingVisitCodes: res.data.results })
                console.log(res.data.results)
            }).catch(error => {
                alert("Session Expired")
                localStorage.removeItem("token")
            })
    }

    // // // POST requests // // //
    postDepartments = (clientTypeId, body) => {
        axios.post(`https://9d67f927.ngrok.io/agenta/v1/Departments?clientTypeId=${clientTypeId}`,
            body,
            {
                headers: {
                    "Content-Type": "text/plain",
                    Accept: "application/json"
                }
            })
            .then(() => this.getDepartments(clientTypeId)).catch((err) => console.log(err))
    }

    // // // DELETE requests // // //
    deleteDepartments = (clientTypeId, body) => {
        axios.delete(`https://9d67f927.ngrok.io/agenta/v1/Departments?clientTypeId=${clientTypeId}`,
            {
                data: body,
                headers: {
                    "Content-Type": "text/plain",
                    Accept: "application/json"
                }
            }
        )
            .then(() => this.getDepartments(clientTypeId)).catch((err) => console.log(err))
    }

    // // //


    // // // xml parser // // //

    handleFileSelect = () => {
        if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
            alert('The File APIs are not fully supported in this browser.');
            return;
        }

        var input = document.getElementById('fileInput');
        if (!input) {
            alert("Um, couldn't find the fileinput element.");
        }
        else if (!input.files) {
            alert("This browser doesn't seem to support the `files` property of file inputs.");
        }
        else if (!input.files[0]) {
            alert("Please select a file before clicking 'Load'");
        }
        else {
            var file = input.files[0];
            var fr = new FileReader();
            fr.onload = (e) => {
                var readXml = e.target.result;
                this.postDepartments("57c908e8-fd28-4f95-8edb-659b73971a63", readXml)
            }
            fr.readAsText(file);
            this.setState({ uploadVisible: false })
        }
    }

    // // //

    // // // Renders the Table with the information from state // // //
    imagingTableData = () => {
        return this.state.imagingVisitCodes.map((imagingVisitId, index) => {
            const { departmentId, departmentName } = imagingVisitId
            return (
                <tr>
                    <td>{departmentId} </td>
                    <td>{departmentName}</td>
                    <td>
                        <Button type="danger" icon="delete" style={{ marginRight: "15px" }} onClick={() => this.handleRemoveRow(departmentId)}>Delete</Button>
                        <Button type="primary" icon="edit" onClick={() => this.showEditImagingModal(index)}>Edit</Button>
                    </td>
                </tr>
            )
        })
    }
    // // // Renders the header of the Table // // //
    imagingTableHeader = () => {
        let header = Object.keys(this.state.imagingVisitCodes[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    // // // // // //

    // // // Deletes a value off of the row // // //
    handleRemoveRow = (departmentId) => {
        this.deleteDepartments("57c908e8-fd28-4f95-8edb-659b73971a63", departmentId)
    };

    // // //

    // // // Add New Modal Functions // // //
    showAddNewImagingModal = () => {
        this.setState({
            addVisible: true,
        });
    };

    AddNewImagingModalhandleOk = e => {
        console.log(e);
        this.setState({
            addVisible: false,
        });
    };

    AddNewImagingModalhandleCancel = e => {
        console.log(e);
        this.setState({
            addVisible: false,
        });
    };

    // // //


    // // // Upload File Modal Functions // // //
    showUploadModal = () => {
        this.setState({
            uploadVisible: true,
        });
    };

    uploadModalhandleOk = e => {
        console.log(e);
        this.setState({
            uploadVisible: false,
        });
    };

    uploadModalhandleCancel = e => {
        console.log(e);
        this.setState({
            uploadVisible: false,
        });
    };

    // // //

    // // // Edit Modal Functions // // //
    showEditImagingModal = (index) => {
        let rowData = this.state.imagingVisitCodes[index];
        this.setState({
            editVisitIndex: index,
            editVisitId: rowData.visitId,
            editVisitName: rowData.visitName,
            editVisible: true,

        });
    };

    EditImagingModalhandleOk = e => {
        console.log(e);
        this.setState({
            editVisible: false,
        });
    };

    EditImagingModalhandleCancel = e => {
        console.log(e);
        this.setState({
            editVisible: false,
        });
    };

    // // //

    // // // save new data to the array // // //
    handleAddVisitingCode = () => {
        let tempArr = this.state.imagingVisitCodes
        let tempNewName = this.state.newVisitName
        let tempNewID = this.state.newVisitId
        tempArr.push({
            visitId: tempNewID, visitName: tempNewName
        })
        this.setState({ imagingVisitCodes: tempArr })
        this.setState({
            addVisible: false,
        });
    }

    handleNewVisitID = event => {
        this.setState({ newVisitId: event.target.value });
    };

    handleNewVisitName = event => {
        this.setState({ newVisitName: event.target.value });
    };

    // // //

    // // // Edit Table Data // // //

    handleEditVisitingCode = () => {
        let tempArr = this.state.imagingVisitCodes
        let tempNewName = this.state.editVisitName
        let tempNewID = this.state.editVisitId
        tempArr[this.state.editVisitIndex] = {
            visitId: tempNewID, visitName: tempNewName
        }
        this.setState({ imagingVisitCodes: tempArr })
        this.setState({
            editVisible: false,
            editVisitIndex: null,
            editVisitId: "",
            editVisitName: ""
        });
    }

    handleEditVisitID = event => {
        this.setState({ editVisitId: event.target.value });
    };

    handleEditVisitName = event => {
        this.setState({ editVisitName: event.target.value });
    };

    // // //

    // // // Manage Tabs Key // // //

    callback = (key) => {
        console.log(key);
    }

    // // //

    render() {

        const { TabPane } = Tabs
        return (
            < div >
                <Modal
                    title="Edit Visit"
                    visible={this.state.editVisible}
                    onOk={this.handleEditVisitingCode}
                    onCancel={this.EditImagingModalhandleCancel}
                >
                    <p>Visit ID: </p><input value={this.state.editVisitId} onChange={(e) => this.handleEditVisitID(e)} />
                    <p>Visit Name: </p><input value={this.state.editVisitName} onChange={(e) => this.handleEditVisitName(e)} />
                </Modal>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Listing" key="1">
                        <Button type="primary" icon="plus" onClick={this.showUploadModal} style={{ marginBottom: "15px" }}> Upload A File </Button>
                        <Modal
                            title="Upload a File"
                            visible={this.state.uploadVisible}
                            onOk={this.uploadModalhandleOk}
                            onCancel={this.uploadModalhandleCancel}
                        >
                            <input type="file" id="fileInput" />
                            <input type="button" value="Upload File" onClick={this.handleFileSelect} />
                        </Modal>
                        <table id='imagingVisit'>
                            <tbody>
                                <th>Visit ID</th>
                                <th>Visit Name</th>
                                <th width="300">Actions</th>
                                {this.imagingTableData()}
                            </tbody>
                        </table>
                    </TabPane>
                    <TabPane tab="Cancelation" key="2">
                        <ImagingCancel />
                    </TabPane>
                </Tabs>
            </div >
        )
    }
}

export default Home;