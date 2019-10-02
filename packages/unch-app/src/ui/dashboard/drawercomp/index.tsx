import * as React from "react";
import Drawer from "antd/lib/drawer";
import { useDispatch, useSelector } from "react-redux";

import { HotButtons } from "./hotbuttons";
import { ScreenPOP } from "./screenpop";
import { ActionComp } from "./actioncomp";
import { drawer } from "../../../store/drawer";

export const DrawerComp = () => {
  const drawerdata = useSelector(state => state.drawer);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "left" }}>
      <Drawer
        title="Quick Menu"
        width="30%"
        placement="right"
        closable={true}
        onClose={event => {
          dispatch({
            type: "drawer",
            payload: {
              visible: false
            }
          });
        }}
        visible={drawerdata && drawerdata.visible}
      >
        <div style={{ padding: '4px' }}>
          <h4>HotButtons</h4>
          <HotButtons />
        </div>
        <div style={{ padding: '4px' }}>
          <h4>ScreenPOP</h4>
          <ScreenPOP />
        </div>
        {/* <div style={{ padding: '4px' }}>
          <h4>ScreenPop</h4>
          <ScreenPOP />
        </div> */}
        {/* <div style={{ padding: '4px' }}>
          <h4>Notes</h4>
          <ActionComp />
        </div> */}
      </Drawer>
    </div>
  );
};
