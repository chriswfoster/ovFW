import * as React from "react";
import {useSelector} from "react-redux";
import { Result } from 'antd';
import referalicon from "../../images/referals.png";
import { useCtx } from "one-ui-provider";

export const ReferalCount= () =>{

    let referal =useSelector((state:any) =>state.referal);
    const { resolver } = useCtx();

    let resolverui;
    //     if(referal && (referal.lenght == 1))
    //     {
    //         resolverui = (
    //             <div style = {{
    //                 'textAlign':"center",
    //             }}>
    //             <img src={resolver(referalicon)} width={"30%"} height={"30%"}/>
    //             <p style={{marginBottom: '4px', padding: '0px', fontSize: '3rem' }}>
    //             <strong style={{ margin: '0px', padding: '0px', fontSize: '3rem' }}>
    //             {referal.lenght} Referral
    //             </strong>
    //             </p>
    //             </div>
    //         )
    //     }

    //   else if(referal && (referal.length>1)){
    //         resolverui =(
    //             <div style ={ {
    //                 'textAlign':"center",

    //             }}>
    //             <img src={resolver(referalicon)} width={"30%"} height={"30%"} />
    //             <p style={{ marginBottom: '4px', padding: '0px', fontSize: '.85rem' }}  >

    //             <strong style={{ margin: '0px', padding: '0px', fontSize: '3rem' }}>
    //                 {referal.length} Referrals
    //             </strong>
    //             </p>
    //             </div>
    //         )
    //     }  else{
    //        if(referal && (referal.length == 0))
    //        {
    //            resolverui = (
    //             <div style={{ textAlign: "left", lineHeight: "22px" }}>
    //             <Result
    //           status="warning"
    //           title="No Referrals Found."

    //         />
    //           </div>
    //            )
    //        }
    //        else {
    //         resolverui = (
    //             <div style={{ textAlign: "left", lineHeight: "22px" }}>
    //            </div>
    //            );
    //        }
    //     }
    if(referal && (referal.length == 1)) {
        resolverui =(
                        <div style ={ {
                            'textAlign':"center",
                            'padding': '36px 32px'
                        }}>
                        <img src={resolver(referalicon)} width={"30%"} height={"30%"} />
                        <p style={{ marginBottom: '4px', padding: '0px', fontSize: '.85rem' }}  >

                        <strong style={{ margin: '0px', padding: '0px', fontSize: '3rem', alignItems: 'center'}}>
                            {referal.length} Referral
                        </strong>
                        </p>
                        </div>
                    )
    }
    else if(referal && (referal.length>1)) {
        resolverui =(
                        <div style ={ {
                            'textAlign':"center",

                        }}>
                        <img src={resolver(referalicon)} width={"30%"} height={"30%"} />
                        <p style={{ marginBottom: '4px', padding: '0px', fontSize: '.85rem' }}  >

                        <strong style={{ margin: '0px', padding: '0px', fontSize: '3rem' }}>
                            {referal.length} Referrals
                        </strong>
                        </p>
                        </div>
                    )
    }
    else
    {
        if(referal && (referal.length == 0))
           {
               resolverui = (
                <div style={{ textAlign: "left", lineHeight: "22px", alignItems: 'center' }}>
                <Result style={{padding: '24px 32px'}}
              status="warning"
              title="No Referrals Found."

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
            {resolverui}
        </div>
    )
}

