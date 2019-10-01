import * as React from "react";
import Select from "antd/lib/select";
import Typography from "antd/lib/typography";
import Button from "antd/lib/button";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";

const { Option } = Select;
const {Text} = Typography;

function patientdata(dispatch:any, type:any,match: any) {



         if(type === "provider") {
             if(match == "1") {
                dispatch({
                    type: "caller-provider",
                    payload: {
                        number: "972-891-8656",
                        dnis: "4698991220"
                    }
                });
             } else if(match == "2") {
                dispatch({
                    type: "caller-provider",
                    payload: {
                        number: "608-271-9000",
                        dnis: "4698991225"
                    }
                });
             } else if (match == "3") {
                dispatch({
                    type: "one-patients-reset",
                    payload: {

                    }
                });
                dispatch ({
                    type:"one-caller-reset",
                    payload : {}
                })

            }  else {
                dispatch({
                    type: "caller-provider",
                    payload: {
                        number: "9728918655",
                        dnis: "4698991225"
                    }
                });
            }

            }

        else {

    if (match == "2") {
        dispatch({
            type: "caller-patient",
            payload: {
                number: "608-271-9000",
                dnis: "4698991225"
            }
        });
        dispatch({
            type: "ADD_MAP",
            payload: {
                mapaddress: "UNC Healthlink",
                mapphoneno: "919-966-7890"
              }
        });

    } else if (match == "1") {
        dispatch({
            type: "caller-patient",
            payload: {
                number: "2144321060",
                dnis:"4698991220"
            }
        });
        dispatch({
            type: "ADD_MAP",
            payload: {
                mapaddress: "UNC Healthlink",
                mapphoneno: "919-966-7890"
              }
        });

    } else if (match == "3") {
        dispatch({
            type: "one-patients-reset",
            payload: {

            }
        });
        dispatch ({
            type:"one-caller-reset",
            payload : {}
        })

    } else {
        dispatch({
            type: "caller-patient",
            payload: {
                number: "608-271-9002"
            }
        });
        dispatch({
            type: "ADD_MAP",
            payload: {
                mapaddress: "UNC Healthlink",
                mapphoneno: "919-966-7890"
              }
        });

    }

}
}

export const CallSelection = () => {
    const dispatch = useDispatch();

    const callselection = () => {


        //var selecttype = $("selecttype").value;
        var selecttype = document.getElementById("selectmatchtype").value;
        var matchtype = document.getElementById("matchtype").value;
        console.log("==>",selecttype,"==>",matchtype);
            patientdata(dispatch, selecttype,matchtype);

    }

    return (
        <div>
        <Text>Type: </Text>
        <select id="selectmatchtype" style={{ width: 200 }} defaultValue="patient">
            <option value="patient" key="patient">Patient</option>
            <option value="provider" key="provider">Provider</option>
        </select>


        <Text>Match: </Text>
        <select id="matchtype" style={{ width: 200 }} defaultValue="2">
            <option value="2" key="multimatch">Multi Match</option>
            <option value="1" key="singlematch">Single Match</option>
            <option value="0" key="nomatch">No Match</option>
            <option value="3" key="mixmatch">Clear</option>
        </select>


        <Button name="call" onClick={callselection} type="primary">Call</Button>

        </div>

    );


};