import * as React from "react";
import Button from "antd/lib/button";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import { useSelector } from "react-redux";
import { useCtx } from 'one-ui-provider';

const popurl =(url:any) =>{
    window.open(url);
}
const popmsg =(url:any) =>{
  console.log("message ");
}


export const ScreenPOP = (props: any) => {
  const { active, dnis, actions } = useSelector((state: any) => (
    state.screenpop
  ));

  // const disabled = (!((active) && (actions)));

  const { settings } = useCtx();
  const { screenpop = {} } = settings;
  const { map } = screenpop;

  const keys =  map || [];

  var index = 0;
  const keyComps = [];
  while (index < keys.length) {
    const buttons = [];

    const maxCols = 3;
    for (let colIndex = 0; colIndex < maxCols; colIndex++) {
      if (index < keys.length) {
        let key = keys[index];
        buttons.push(
          <Col span={24 / maxCols} style={{ padding: '2px' }} >
            <Button  type="primary" block onClick={
             (key.url) ?
             (() => { popurl(key.url) }) :
             (()=>{popmsg(key.url)})
            }>{key.label}</Button>
          </Col>
        );
        index = index + 1;
      }
    }

    keyComps.push(
      <>
        <Row type="flex" justify="center">
          {buttons}
        </Row>
      </>
    );
  }

  return (
    <div>
      {keyComps}
    </div>
  );
};
