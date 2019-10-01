import * as React from "react";
import Avatar from "antd/lib/avatar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

import Badge from "antd/lib/badge";
import Layout from "antd/lib/layout";
import Tag from "antd/lib/tag";
import Select from "antd/lib/select";
import Divider from "antd/lib/divider";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Typography from "antd/lib/typography";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import { NV } from 'one-micro';
import { isArray } from 'util';

const { Text } = Typography;

const { Option } = Select;


const { Sider, Content, Footer } = Layout;
const { CheckableTag } = Tag;

export const enum Types {
  PATIENT = 'one-caller-patient',
  PROVIDER = 'one-caller-provider',
  OTHER = 'one-caller-other',
  UPDATE = 'one-caller-update',
  SELECT = 'one-caller-select',
  UNSELECT = 'one-caller-unselect',
};



export const CallerDetailFind = (props: any) => {
  let bgcolor = ["#87d068", "#5AA0CE", "#fde3cf", "#C0CE5A"];

  const dispatch = useDispatch();
  const callerstate = useSelector((state: any) => state.caller);
  const callerselection = useSelector((state: any) => state.callerselection);
  const [input, setInput] = useState("");
  const [addr, setAddr] = useState("");
  const [ctype, setCallType] = useState("Type");
  const [stype, setSubType] = useState("Sub Type");
  const [phno, setPhNo] = useState("");


  let dropdoninit = [];
  dropdoninit.push(<Option key="new" value="New">New</Option>);
  dropdoninit.push(<Option key="existing" value="Existing">Existing</Option>);
  const [dropdown, setDropDown] = useState(dropdoninit);

  let badgecount = 0;
  let initails = "";
  let pnum = "";
  let selectedaddr = "";

  let patientscount = 0;
  let providerscount = 0;
  let otherscount = 0;
  let emptyselectvalue = (
    <Select ></Select>
  );
  let selectvalue = emptyselectvalue;
  if (callerstate && callerstate.selected) {
    if (callerstate.patients) {
      let patients = callerstate.patients;
      if (patients.length) {
        patientscount = patients.length;
      }

    }
    if (callerstate.providers) {
      let providers = callerstate.providers;
      if (providers.length) {
        providerscount == providers.length;
      }
    }
    if (callerstate.others) {
      let other = callerstate.others;
      if (other.length) {
        otherscount == other.length;
      }
    }

    // check for callerselection
    if (callerselection) {

      if (callerselection && callerselection.name) {
        initails = callerselection.name.charAt(0);
        let splitname = callerselection.name.split(" ");
          if (splitname.length > 0) {
            initails = initails.concat(splitname[1] && splitname[1].charAt(0));
          }
        }

        selectedaddr = callerselection.address && callerselection.address;
        pnum = callerselection.phone && callerselection.phone;


      console.log("-----caller seelction", callerselection, callerstate.selected);
      if (callerstate.selected === 'patient') {
        if (callerselection.LastName) {
          initails = callerselection.LastName.charAt(0);
        }
        if (callerselection.FirstName) {
          let fnamei = callerselection.FirstName.charAt(0);
          initails = initails.concat(fnamei);
        }

        if (callerselection.Addresses) {
          let address = callerselection.Addresses;
          if (isArray(address)) {
            address.forEach(function (adr, index) {
              if (adr.Type === 'Permanent') {

                // for address
                if (adr.Street) {
                  selectedaddr = adr.Street;
                  selectedaddr = selectedaddr.concat(",");
                }

                if (adr.City) {
                  selectedaddr = selectedaddr.concat(adr.City);
                  selectedaddr = selectedaddr.concat(",");
                }
                if (adr.State) {
                  selectedaddr = selectedaddr.concat(adr.State);
                  selectedaddr = selectedaddr.concat(",");
                }
                if (adr.Country) {
                  selectedaddr = selectedaddr.concat(adr.Country);
                  selectedaddr = selectedaddr.concat(",");
                }
                if (adr.PostalCode) {
                  selectedaddr = selectedaddr.concat(adr.PostalCode);

                }

                // for Phone
                pnum = adr.PhoneNumbers[0].Number;


              }

            })
          }

        }
      }
      //  else if (callerstate.selected === "provider" || callerstate.selected === "other") {
      //   if (callerselection && callerselection.name) {
      //     initails = callerselection.name.charAt(0);
      //     let splitname = callerselection.name.split(" ");
      //     if (splitname.length > 0) {
      //       initails = initails.concat(splitname[1] && splitname[1].charAt(0));
      //     }
      //   }

      //   selectedaddr = callerselection.address && callerselection.address;
      //   pnum = callerselection.phone && callerselection.phone;

      // }
    }


    if (callerstate.selected === 'patient') {
      let patients = callerstate.patients;
      badgecount = patients.length;
      if (badgecount > 0) {
        //debugger;
        // patients.map(patient => {
        //   displayname.push(<Option key={patient.Name?patient.Name:patient.name} value={patient.Name?patient.Name:patient.name}>{patient.Name?patient.Name:patient.name}</Option>);
        // })
        if (callerselection) {
          // nothing to be doen
        } else {
          dispatch({
            type: Types.SELECT,
            payload: patients[0],
          });
        }
        // displayvalue = patients[0].Name ? patients[0].Name : patients[0].name;
        // console.log("display value   ", displayvalue);
        //
        let patientvalue = patients[0];
        selectvalue = (
          <Select size="small" style={{ width: "100%" }} defaultValue={patientvalue.Name?patientvalue.Name:patientvalue.name} onSelect={(key: string) => {
            let index = patients.findIndex((pdetails: any) => pdetails.Name === key);
            dispatch({
              type: Types.SELECT,
              payload: patients[index],
            })
            // setActivePat();
            // patientvalues=patintdet[index];
          }

          }>{
              patients && patients.map((patient: any, index: number) => (
                <Option key={index} data={patient} value={patient.Name?patient.Name:patient.name}> {patient.Name?patient.Name:patient.name} </Option>
              ))
            }
          </Select>
        );


        //
      }

    } else if (callerstate.selected === 'provider' || callerstate.selected === 'other') {
      let providers;
      if (callerstate.selected === 'provider') {
        providers = callerstate.providers
      } else {
        providers = callerstate.others
      }

      badgecount = providers.length;
      if (badgecount > 0) {

        // patients.map(patient => {
        //   displayname.push(<Option key={patient.Name?patient.Name:patient.name} value={patient.Name?patient.Name:patient.name}>{patient.Name?patient.Name:patient.name}</Option>);
        // })
        if (callerselection) {
          // nothing to be doen
        } else {
          dispatch({
            type: Types.SELECT,
            payload: providers[0],
          });
        }

        //
        let providervalue = providers[0];
        selectvalue = (
          <Select size="small" style={{ width: "100%" }} defaultValue={providervalue.name} onSelect={(key: string) => {
            let index = providers.findIndex((pdetails: any) => pdetails.name === key);
            dispatch({
              type: Types.SELECT,
              payload: providers[index],
            })
            // setActivePat();
            // patientvalues=patintdet[index];
          }

          }>{
              providers && providers.map((provider: any, index: number) => (
                <Option key={index} data={provider} value={provider.name}> {provider.name} </Option>
              ))
            }
          </Select>
        );


        //

      }

    }

  }

  console.log("-------callerUI ", callerstate, badgecount, callerselection, initails);
  let otherform = (
    <div style={{ background: '#fff', textAlign: 'center', width: "360px", }}>

      <Input placeholder='Caller Name' style={{ fontSize: '.85rem', padding: "4px" }} size='small' value={input} onChange={(event) => {
        setInput(event.target.value);
      }
      }
      />



      <Input placeholder="Caller From" size='small' style={{ fontSize: '.85rem', padding: "4px" }} value={phno} onChange={(event) => {
        setPhNo(event.target.value);
      }

      } />

      <Select size='small' placeholder="Type" value={ctype} style={{ width: "100%", fontSize: '.85rem', padding: "1px" }} onSelect={(key: string) => {
        setCallType(key);
        console.log("key---", key);
        if (key == "patient") {
          dropdoninit = [];
          dropdoninit.push(<Option key="new" value="new">New</Option>);
          dropdoninit.push(<Option key="existing" value="existing">Existing</Option>);
          setDropDown(dropdoninit);
        }
        if (key == "provider") {
          dropdoninit = [];
          dropdoninit.push(<Option key="doctor" value="doctor">Doctor</Option>);
          dropdoninit.push(<Option key="nurse" value="nurse">Nurse</Option>);
          setDropDown(dropdoninit);
        }
        if (key == "other") {
          dropdoninit = [];
          dropdoninit.push(<Option key="family" value="family">Family</Option>);
          dropdoninit.push(<Option key="lawyer" value="lawyer">Lawyer</Option>);
          dropdoninit.push(<Option key="other" value="other">Other</Option>);
          setDropDown(dropdoninit);
        }
      }
      }>
        <Option key="patient" value="patient">Patient</Option>
        <Option key="provider" value="provider">Provider</Option>
        <Option key="other" value="other">Other</Option>

      </Select>


      <Select size='small' value={stype} placeholder="Sub Type" style={{ width: "100%", fontSize: '.85rem', padding: "1px" }} onSelect={(key: string) => {
        setSubType(key);

      }
      }>
        {
          dropdown
        }

      </Select>


      <Input placeholder="Address" size='small' style={{ width: "100%", fontSize: '.85rem', padding: "4px" }} value={addr} onChange={(event) => {
        setAddr(event.target.value);
      }
      } />


      <Row justify="end" style={{ padding: "2px" }}>
        <Col span={8} />
        <Col span={16} style={{ float: "right" }}>
          <span style={{ float: "right", padding: "4px" }} >
            <Button type="primary" size='small' style={{ fontSize: '.85rem' }} htmlType="submit" onClick={() => {
              let dispatchtype = "";
              if (ctype === "patient") {
                dispatchtype = Types.PATIENT;
              } else if (ctype === "provider") {
                dispatchtype = Types.PROVIDER;
              } else {
                dispatchtype = Types.OTHER;
              }

              dispatch({
                type: Types.UPDATE,
                payload: {
                  typeId: ctype,
                  name: input,
                  phone: phno,
                  address: addr,
                  subtypeId: stype
                }

              })
            }} >
              Submit
        </Button>
          </span>
          <span style={{ float: "right", padding: "4px" }} >
            <Button htmlType="submit" size='small' style={{ fontSize: '.85rem' }} onClick={() => {
              setAddr("");
              setInput("");
              setPhNo("");
              setCallType("Type");
              setSubType("Sub Type");

            }} >Clear</Button>
          </span>
          {" "}

        </Col>
      </Row>
    </div>

  )

  return (
    <div>

      {(callerstate && callerstate.selected) && (
        <div>
          <Layout>
            <Content style={{ background: '#fff' }}>
              <div style={{ textAlign: 'center' }} >
                <div style={{ padding: 2, fontSize: '.85rem', background: '#fff', textAlign: 'center' }}>
                  <CheckableTag
                    checked={((callerstate.selected == 'patient')) ? true : false}
                    onChange={() => {
                      dispatch({
                        type: Types.PATIENT,
                        payload:
                          callerstate.patients

                      });
                      dispatch({
                        type: Types.UNSELECT,
                        payload: null,
                      });
                    }}>Patient</CheckableTag>

                  <CheckableTag
                    checked={((callerstate.selected == 'provider')) ? true : false}
                    onChange={() => {
                      dispatch({
                        type: Types.PROVIDER,
                        payload:
                          callerstate.providers
                      });
                      dispatch({
                        type: Types.UNSELECT,
                        payload: null,
                      });
                    }}>Provider</CheckableTag>


                  <CheckableTag
                    checked={((callerstate.selected == 'other')) ? true : false}
                    onChange={() => {
                      dispatch({
                        type: Types.OTHER,
                        payload:
                          callerstate.others

                      });
                      dispatch({
                        type: Types.UNSELECT,
                        payload: null,
                      });
                    }}>Other</CheckableTag>

                  {/* {
                  (providerscount > 0 || patientscount> 0) && (
                    <CheckableTag
                    checked={false} > Other</CheckableTag>
                  )
                } */}
                  <Divider />
                </div>

              </div>
              {((callerstate.selected === "other" && (otherscount < 1)) ? (

                otherform
              ) : (
                  <>
                    <div style={{ padding: 2, background: '#fff', textAlign: 'center', width: "100px" }}>
                      <Badge count={badgecount} showZero>
                        <Avatar
                          style={{ backgroundColor: '#51B885' }}
                          shape="circle"
                          size={85}
                        > {initails} </Avatar>
                      </Badge>
                    </div>
                    {
                      ((badgecount >= 0) &&
                        (
                          <div style={{
                            display: "block"
                          }} >
                            <div style={{
                              float: "right",
                              width: "2px",
                              marginRight: "300px",
                              marginTop: "-100px"
                            }} >
                              <Divider type="vertical" style={{ height: "150px" }} > </Divider>

                            </div>
                            <div
                              style={{
                                float: "right",
                                width: "220px",
                                marginRight: "60px",
                                marginTop: "-150px"
                              }}
                            >
                              <NV name="Caller Name"></NV>
                              {
                                (badgecount > 0) && selectvalue
                              }
                              {/* <Select size="small" defaultValue={displayvalue} style={{ width: "100%",fontSize: '.85rem' }}>
                          {
                            displayname
                          }

                        </Select> */}

                              <NV name="Caller Phone" value={pnum}></NV>
                              <NV name="Caller Address" value=""></NV>
                              <p style={{ marginBottom: '4px', padding: '0px', fontSize: '.85rem' }}>
                                {selectedaddr}
                              </p>
                            </div>
                          </div>
                        ))
                    }
                  </>

                ))}


            </Content>
          </Layout>
        </div>
      )}
    </div>
  )
}
