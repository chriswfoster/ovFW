import * as React from "react";
import Icon from "antd/lib/icon";
import  Button  from "antd/lib/button";
import Affix from "antd/lib/affix";
import { useDispatch, useSelector } from "react-redux";



export const ActionButton = () => {
    const dispatch = useDispatch();
  return (

    < >
      {/* <div className="sticky-container">
                    <ul className="sticky">
                        <li key="button">
                            <p>
                                <Button type="primary"className="stickyarea"
                                 onClick={event => {
                                    dispatch({
                                      type: "drawer",
                                      payload: {
                                        visible: true
                                      }
                                    });
                                  }}>
                                <Icon type="setting">Reset</Icon></Button>

                            </p>
                        </li>
                    </ul>
                </div> */}

                <div>
                <Affix
                   style={{ float: "right" }}
                   offsetTop={200}
                   onChange={affixed => console.log(affixed)}
                >
                <Button type="primary"
                                 onClick={event => {
                                    dispatch({
                                      type: "drawer",
                                      payload: {
                                        visible: true
                                      }
                                    });
                                  }}>
                                <Icon type="setting"/>
                </Button>
                </Affix>
                </div>
    </>
  );
};
