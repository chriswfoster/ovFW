import * as React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from "react-redux";
import 'chartjs-plugin-datalabels';
import { isArray } from 'util';
import { Result } from 'antd';



export const ApptGraph = () => {



    let noShowCount = 0,pastCount = 0, upcomingCount = 0, cancelledCount = 0, completecount = 0;

    let resolverui;
    let apptstatus = useSelector((state: any) => state.appointment.appointments);


    if (apptstatus && isArray(apptstatus)) {
        apptstatus.forEach((element: any) => {

            if (element.AppointmentStatus === "No Show") {
                noShowCount = noShowCount + 1;
            }
            else if (element.AppointmentStatus === "Completed") {
                pastCount = pastCount + 1;
            }
            else if(element.AppointmentStatus === "Arrived") {
                completecount = completecount + 1;
            }
            else if ((element.AppointmentStatus === "Scheduled") ) {
                upcomingCount = upcomingCount + 1;
            }
            else if (element.AppointmentStatus === "Canceled") {
                cancelledCount = cancelledCount + 1;
            }
            else {
               console.log("No Appointments");
            }

        });
    }
    else {
        console.log("The data set is empty");
    }


    let data = {

        labels :[
            "Appointments"
        ],
        datasets: [

            {
                label: "No Shows",
                data: [noShowCount],
                backgroundColor: "#008080",

            },
            {
                label: "Completed",
                data: [completecount],
                backgroundColor: "#FF6384",
            },
            {
                label: "Past Apts",
                data: [pastCount],
                backgroundColor: "#36A2EB",
            },
            {
                label: "Upcoming Apts",
                data: [upcomingCount],
                backgroundColor: "#FFCE56",

            },
            {
                label: "Cancelled",
                data: [cancelledCount],
                backgroundColor: "#8E44AD",
            }
        ]
    }

    if(apptstatus && (apptstatus.length > 0))
    {
        resolverui = (
            <div>
            <Bar
                data={data}
                width={400}
                height={200}
                options={{
                    scales: {
                        yAxes: [{
                            ticks: {
                                stepSize: 1
                            }
                        }]
                    },
                    legend: {
                        position: "top"
                    },
                    maintainAspectRatio: false,
                    plugins: {
                        datalabels: {
                            display: true,
                            color: 'white'
                        }
                    }
                }}
            />
            </div>
        )
    }
    else{
        if(apptstatus && (apptstatus.length == 0))
           {
               resolverui = (
                <div style={{ textAlign: "left", lineHeight: "22px", alignItems: 'center' }}>
                <Result style={{padding: '24px 32px'}}
              status="warning"
              title="No Appointments Found."

            />
              </div>
               )
           }
           else {
            resolverui = (
                <div style={{ textAlign: "left", lineHeight: "22px" }}>
               </div>
               );
           }
    }
    return (
        <div>
            {/*<Bar
                data={data}
                width={400}
                height={200}
                options={{
                    scales: {
                        yAxes: [{
                            ticks: {
                                stepSize: 1
                            }
                        }]
                    },
                    legend: {
                        position: "top"
                    },
                    maintainAspectRatio: false,
                    plugins: {
                        datalabels: {
                            display: true,
                            color: 'white'
                        }
                    }
                }}
            />*/}
            {resolverui}
        </div>
    )
}
