import * as React from "react";
import Tabs from "antd/lib/tabs";
import Col from "antd/lib/col";
// import { ProviderMap } from 'one-micro-map';
import { Vitals } from 'one-micro-moreinfo';
import { AppointmentTable } from 'one-micro-appointments';
import { ReferralTable } from 'one-micro-referrals';
// import { address } from 'one-model-address';
// import { array } from 'one-core';

import { ApptGraph } from "./dashboard/appointments/apptgraph";
import {
    Card,
    Cards,
    Layout,
} from 'one-ui-layout';
import { useSelector } from "react-redux";
import { useCtx } from "one-ui-provider";
import { ReferalCount } from "./dashboard/referalcount";

//import { LiveSearch } from "./dashboard/livesearch"

const { TabPane } = Tabs;
export const DashboardTab = () => {


  return (
    <div>
     {/* <Tabs
                defaultActiveKey="1"
                style={{ background: "#fff" }}
                className="tabs"
                onChange={() => console.debug("tab clicked")}
            >
                <TabPane tab="Dashboard" key="1" style={{ background: "lightgray" }}>
                    <Cards style={{
                        height:"15rem",
                        overflow:true}}>
                        <Card  className='more_info_card' style={{minHeight: '19.5em'}} titleLabel="Schedules">
                            <ApptGraph />
                        </Card>
                        <Card className='more_info_card'style={{minHeight: '19.5em'}}  titleLabel="Referrals">
                            <ReferalCount/>
                        </Card>
                        <Card className='more_info_card' style={{minHeight: '19.5em'}} titleLabel="Prescription">
                        </Card>
                        <Card className='more_info_card' span={24} titleLabel="More Info">
                            <Vitals/>
                        </Card>
                        <Card span={8} title="Journey Map">
                            <JourneyModule />
                        </Card> 
                        <Card span={24} titleLabel="GeoLocation">
                        <ProviderMap
                            //mapdefaultfilter={mapfilter}
                            hospitalfilter={true}
                            parkingfilter={true}
                            pharmacyfilter={true}
                            // hospitalswitch={switch3}
                            // parkingswitch={switch4}
                            // pharmacyswitch={switch2}
                            // patientaddress={patientaddress}
                            // patientphoneno={patientphoneno}
                            // clinicaddress={clinicaddress}
                            // clinicphone={clinicphone}
                            // mapaddress={mapaddress}
                            // mapphoneno={mapphoneno}

                            /> 
                        </Card>
                        <Card span={24} title="Live Drop Down">
                            <LiveSearch />
                        </Card>
                    </Cards>
                </TabPane>
                <TabPane tab="Appointments" key="2">
                    <AppointmentTable />

                </TabPane>
                <TabPane tab="Referrals" key="3" >
                    <ReferralTable/>
                </TabPane>
         //<TabPane tab="Billing" key="4">
           // </TabPane>
           // <TabPane tab="Triage" key="5">
           // </TabPane>
           // <TabPane tab="Pharmacy" key="6">
           // </TabPane>
                    
            </Tabs> 
        */}

    </div>
  );
};
