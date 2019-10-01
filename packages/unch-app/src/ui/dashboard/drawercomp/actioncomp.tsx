import * as React from "react";
import Row from "antd/lib/row";
import Input from "antd/lib/input";

const { TextArea } = Input;
export const ActionComp = () => {
  return (
    <div>
      <Row>
        <TextArea autosize={{ minRows: 6, maxRows: 20 }} />
      </Row>

    </div>
  );
};
