import React, { Component } from "react";
import { Modal, Button, Tabs } from "antd";

class AccessCenterCancel extends Component {
    constructor() {
        super()
        this.state = {
            addVisible: false,
            editVisible: false,
            newAccessId: "",
            newAccessName: "",
            editAccessIndex: null,
            editAccessId: "",
            editAccessName: "",
            accessCodes: [
                { visitId: "100", visitName: "Appointment" },
                { visitId: "346", visitName: "Doctor" },
                { visitId: "27", visitName: "Pharmacy" },
                { visitId: "472", visitName: "Surgery Center" },
            ]
        }
    }

    // // // Renders the Table with the information from state // // //
    accessTableData = () => {
        return this.state.accessCodes.map((accessVisitId, index) => {
            const { visitId, visitName } = accessVisitId
            return (
                <tr>
                    <td>{visitId} </td>
                    <td>{visitName}</td>
                    <td>
                        <Button type="danger" icon="delete" style={{ marginRight: "15px" }} onClick={() => this.handleRemoveRow(visitId)}>Delete</Button>
                        <Button type="primary" icon="edit" onClick={() => this.showEditImagingModal(index)}>Edit</Button>
                    </td>
                </tr>
            )
        })
    }
    // // // Renders the header of the Table // // //
    accessTableHeader = () => {
        let header = Object.keys(this.state.accessCodes[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    // // // // // //

    // // // Deletes a value off of the row // // //
    handleRemoveRow = (visitId) => {
        let newArray = this.state.accessCodes;
        for (let i in newArray) {
            let element = newArray[i];
            if (element.visitId === visitId) {
                newArray.splice(i, 1);
                this.setState({
                    accessCodes: newArray
                });
                break
            }
        }
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

    // // // Edit Modal Functions // // //
    showEditImagingModal = (index) => {
        let rowData = this.state.accessCodes[index];
        this.setState({
            editAccessIndex: index,
            editAccessId: rowData.visitId,
            editAccessName: rowData.visitName,
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
        let tempArr = this.state.accessCodes
        let tempNewName = this.state.newAccessName
        let tempNewID = this.state.newAccessId
        tempArr.push({
            visitId: tempNewID, visitName: tempNewName
        })
        this.setState({ accessCodes: tempArr })
        this.setState({
            addVisible: false,
        });
    }

    handleNewVisitID = event => {
        this.setState({ newAccessId: event.target.value });
    };

    handleNewVisitName = event => {
        this.setState({ newAccessName: event.target.value });
    };

    // // //

    // // // Edit Table Data // // //

    handleEditVisitingCode = () => {
        let tempArr = this.state.accessCodes
        let tempNewName = this.state.editAccessName
        let tempNewID = this.state.editAccessId
        tempArr[this.state.editAccessIndex] = {
            visitId: tempNewID, visitName: tempNewName
        }
        this.setState({ accessCodes: tempArr })
        this.setState({
            editVisible: false,
            editAccessIndex: null,
            editAccessId: "",
            editAccessName: ""
        });
    }

    handleEditVisitID = event => {
        this.setState({ editAccessId: event.target.value });
    };

    handleEditVisitName = event => {
        this.setState({ editAccessName: event.target.value });
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
            <div>
                <h1> Access Center</h1>
                <Modal
                    title="Add New Visit"
                    visible={this.state.addVisible}
                    onOk={this.handleAddVisitingCode}
                    onCancel={this.AddNewImagingModalhandleCancel}
                >
                    <p>Visit ID: </p><input onChange={(e) => this.handleNewVisitID(e)} />
                    <p>Visit Name: </p><input onChange={(e) => this.handleNewVisitName(e)} />
                </Modal>
                <Modal
                    title="Edit Visit"
                    visible={this.state.editVisible}
                    onOk={this.handleEditVisitingCode}
                    onCancel={this.EditImagingModalhandleCancel}
                >
                    <p>Visit ID: </p><input value={this.state.editVisitId} onChange={(e) => this.handleEditVisitID(e)} />
                    <p>Visit Name: </p><input value={this.state.editVisitName} onChange={(e) => this.handleEditVisitName(e)} />
                </Modal>
                <Button type="primary" icon="plus" onClick={this.showAddNewImagingModal}> Add New </Button>
                <table id='imagingVisit'>
                    <tbody>
                        <th>Visit ID</th>
                        <th>Visit Name</th>
                        <th width="300">Actions</th>
                        {this.accessTableData()}
                    </tbody>
                </table>
                <Button type="primary" icon="plus" onClick={this.showAddNewImagingModal}> Add New </Button>
                <table id='imagingVisit'>
                    <tbody>
                        <th>Visit ID</th>
                        <th>Visit Name</th>
                        <th width="300">Actions</th>
                        {this.accessTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AccessCenterCancel