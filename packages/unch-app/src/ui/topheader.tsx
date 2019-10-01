import * as React from "react";
import { useDispatch,useSelector } from "react-redux";

import PageHeader from "antd/lib/page-header";
import Avatar from "antd/lib/avatar";
import Icon from "antd/lib/icon";
import Button from "antd/lib/button";
import AutoComplete from "antd/lib/auto-complete";
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Divider from 'antd/lib/divider';
import Typography from "antd/lib/typography";
const { Text } = Typography;

export const TopHeader = () => {
  const dispatch = useDispatch();
  const resetdata = useSelector((state:any) => state.callreset);

  // let reset= false;
  // let resetdata;
  // if (calldetail) {
  //   if (calldetail.callerdetails) {
  //     console.log("---------topheader === resetdata",resetdata);
  //     console.log("---------topheader === callerdetail",calldetail);
  //     debugger;
  //     const cdetails = calldetail.callerdetails;
  //     // if (cdetails.length == 1) {
  //     //   condrender = <CallerDetailSingleMatch calldet={cdetails[0]} />;
  //     // } else
  //    cdetails.map(caller => {
  //     console.log("---------topheader caller ",calldetail);
  //       if(caller.reset){
  //           resetdata= calldetail;
  //           reset=true;
  //       }
  //       console.log("---------topheader reserdata ",resetdata);
  //    })
  //   }
  // }

  return (
    <PageHeader

      style={{ padding: "8px" }}
      onBack={() => { }}
      backIcon={
        // <img src="https://www.unchealthcare.org/imgs/system-interior/logo.png" height={'32px'} />
        <img src="https://cdn2.hubspot.net/hub/5995002/hubfs/swirl%20logo.png" height={"32px"} />
      }
      extra={
        <>
          <Row gutter={24}>
          <Col span={16} style={{textAlign:"center"}}>

          </Col>
          <Col span={8} style={{textAlign:"right"}}>
          {/* <Button  style={{ marginRight:"8px"}} onClick={event => {

                dispatch({
                  type: "call",
                  payload: {
                    callerdetails: resetdata.callerdetails,


                  }
                });
                dispatch({
                  type: "update",
                  payload: {
                    patientdetails:resetdata.patientdetails,
                  }
                });

              }}>Reset</Button> */}

              <Button icon="search" onClick={event => {
                dispatch({
                  type: "globalsearch",
                  payload: {
                    visible: true
                  }
                });
              }}>Search</Button>
            </Col>

            {/* <Col span={8}>
              <img src="https://cdn2.hubspot.net/hub/5995002/hubfs/swirl%20logo.png" height={"32px"} />
            </Col> */}
          </Row>
        </>
      }
    />
  );
};
