import React from "react";

import styled from "styled-components";

const LayoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  display: flex;
  height: 60px;
  background-color: #ff007d;
  border-radius: 30px;
  color: white;
  font-weight: 800;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const Button = (props: any) => {
  const { width, height, children, weightFont } = props;

  return (
    <LayoutButton
      style={{
        width: `${width}%`,
        height: `${height}px`,
        fontWeight: `${weightFont}`,
      }}
    >
      {children}
    </LayoutButton>
  );
};

export default Button;
