import * as React from "react";
import Button from "antd/lib/button";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import { useSelector } from "react-redux";
import { useCtx } from 'one-ui-provider';

const transfer = (actions: any, target: any) => {
  if (actions) {
    actions.transfer(target)
      .catch((e: any) => {
        alert(e.message)
      });
  }
}

const consult = (actions: any, target: any) => {
  if (actions) {
    actions.consult(target)
      .catch((e: any) => {
        alert(e.message)
      });
  }
}

export const HotButtons = (props: any) => {
  const { active, dnis, actions } = useSelector((state: any) => (
    state.hotkeys
  ));

  const disabled = (!((active) && (actions)));

  const { settings } = useCtx();
  const { hotkeys = {} } = settings;
  const { map, dnisMap } = hotkeys;

  const keys = ((dnisMap) && (dnisMap[dnis])) || map || [];

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
            <Button disabled={disabled} type="primary" block onClick={
              (key.type === 'blind') ?
                (() => { transfer(actions, key.dn) }) :
                (() => { consult(actions, key.dn) })
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
