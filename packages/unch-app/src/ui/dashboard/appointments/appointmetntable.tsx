import * as React from "react";
import {useState} from "react";
import Icon from "antd/lib/icon";
import Table from "antd/lib/table";
import Dropdown from "antd/lib/dropdown";
import Button from "antd/lib/button";
import Menu from "antd/lib/menu";
import Modal from "antd/lib/modal";
import Row from "antd/lib/row";
import Typography from "antd/lib/typography";
import Col from "antd/lib/col";
import { useSelector, useDispatch } from "react-redux";
import {useCtx} from 'one-ui-provider';


const { Text } = Typography;




export const AppointmentTable = () => {

  const [moredetmodel, setMoredetmodel] = useState(false);
  const [moredetails, setMoredetails] = useState({});
  let patientdata = useSelector((state:any) => state.appointment);
  let data: any = [];
  if(patientdata && patientdata.length) {
    patientdata.map((ele: any) => {
      ele.Providers.map((index: any) => {
        const info = {
          date: ele.Date,
          appoit: ele.AppointmentStartTime,
          visit: ele.VisitTypeName,
          dptname : index.DepartmentName,
          Providername:index.ProviderName
        }
        data.push(info);
      })
    })
  }

//   data = sdata.schedule;
  const { resolver } = useCtx();

  const handleMenuClick = (e:any) => {
    let key = e.key;
    var res = key.split(",");
    if(res[1] === '1'){
      setMoredetmodel(true);
      data.map((rec:any,index:any) => {

        if(res[0] === rec.key){
          setMoredetails(rec);
        }
      });
    }
  }

  const handleOk = (e:any) => {
    setMoredetmodel(false);
  };

  const handleCancel = (e:any) => {
    setMoredetmodel(false);
  };

  const menu = (e:any) => (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key={e.key+",1"}>More Details</Menu.Item>
      <Menu.Item key={e.key+",2"}>Cancel Appointments</Menu.Item>
      <Menu.Item key={e.key+",3"}>Show in EPIC</Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date"
    },
    {
      title: "Department",
      dataIndex: "dptname",
      key: "department"
    },
    {
      title: "Appt.Time",
      dataIndex: "appoit",
      key: "apptTime"
    },
    {
      title: "Provider",
      key: "provider",
      dataIndex: "Providername"
    },
    {
      title: "Visit Type",
      key: "visittype",
      dataIndex: "visit"
    },
    {
      title: "Action",
      key: "action",
      render: (text:any, record:any) => (
          <Dropdown overlay={menu(record)}>
            <Button type="primary">
              Actions <Icon type="down" />
            </Button>
          </Dropdown>
      )
    }
  ];


  return (
    <div>
      <Icon type="unordered-list" /> All Appointments
      <Table columns={columns} dataSource={data} />
      <Modal
          title="Appointment Details"
          visible={moredetmodel}
          onOk={handleOk}
          onCancel={handleCancel}
          width={720}
          footer={[
            <Button key="submit" type="primary" onClick={handleOk}>
              CANCEL
            </Button>,
          ]}
         >
          <Row gutter={8} align='middle' style={{padding:"2px"}}>
              <Col span={16}>
                  <Row>
                    <Text>Appointment Time: </Text> {" "} <Text strong>{moredetails!=undefined?moredetails.apptTime:""}</Text>
                  </Row>
                  <Row>
                    <Text>Appointment Date: </Text> {" "} <Text strong>{moredetails!=undefined?moredetails.date:""}</Text>
                  </Row>
                  <Row>
                    <Text>Hospital/Clinic Name: </Text> {" "} <Text strong>{moredetails!=undefined?moredetails.department:""}</Text>
                  </Row>
                  <Row>
                    <Text>Appointment Type: </Text> {" "} <Text strong>{moredetails!=undefined?moredetails.visittype:""}</Text>
                  </Row>
                  <Row>
                    <Text>Reason for Visit: </Text> {" "} <Text strong>{moredetails!=undefined?moredetails.reasonvisit:""}</Text>
                  </Row>
                  <Row>
                    <Text>Interpreter required: </Text> {" "} <Text strong>No</Text>
                  </Row>
              </Col>
          </Row>
         </Modal>
    </div>
  );
};
