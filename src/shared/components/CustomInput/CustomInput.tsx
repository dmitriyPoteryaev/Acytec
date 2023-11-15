import React from "react";

import styled from "styled-components";

const Input = styled.input`
  font-family: "Inter", sans-serif;
  background-color: rgba(227, 227, 227, 0.5);
  width: 623px;
  padding-top: 18.82px;
  padding-bottom: 18.82px;
  padding-left: 30px;
  color: #212529;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  border: none;
  &:focus {
    background-color: rgba(227, 227, 227, 1);
    outline: none;
  }
`;
const CustomInput = (props: any) => {
  const { height, value, onChange } = props;

  return (
    <Input
      style={{ height: `${height}px` }}
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  );
};

export default CustomInput;
