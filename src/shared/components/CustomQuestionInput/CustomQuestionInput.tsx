import React from "react";

import { Input } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

const LayoutCustomQuestionInput = styled(TextArea)`
  min-height: 175px;
  border-radius: 4px;
  background-color: rgba(227, 227, 227, 0.5);
  margin-top: 30px;
  width: 623px;
  font-family: "Inter", sans-serif;
  color: #212529;
  font-weight: 400;

  &:focus {
    background-color: rgba(227, 227, 227, 1);
    border: none;
    outline: none;
  }
`;

const CustomQuestionInput = (props: any) => {
  const { value, onChange } = props;

  return (
    <LayoutCustomQuestionInput
      autoSize={{ minRows: 9, maxRows: 9 }}
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  );
};

export default CustomQuestionInput;
