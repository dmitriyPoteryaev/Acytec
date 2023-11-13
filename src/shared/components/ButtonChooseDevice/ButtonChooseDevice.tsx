import React, { useState } from "react";

import styled from "styled-components";

const LayoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border: none;
  border-radius: 50%;
`;

const ImgPlus = require("@assets/tableContent/chooseDeviceButton/plus.svg")
  .default as string;

const ImgCheckMark =
  require("@assets/tableContent/chooseDeviceButton/checkMark.svg")
    .default as string;

const ButtonChooseDevice = () => {
  const [isActive, setIsActive] = useState(false);

  if (isActive) {
    return (
      <LayoutButton
        style={{ backgroundColor: "#00a197" }}
        onClick={() => {
          setIsActive((isActive) => !isActive);
        }}
      >
        <img src={ImgCheckMark} />
      </LayoutButton>
    );
  }

  return (
    <LayoutButton
      style={{ backgroundColor: "white" }}
      onClick={() => {
        setIsActive((isActive) => !isActive);
      }}
    >
      <img src={ImgPlus} />
    </LayoutButton>
  );
};

export default ButtonChooseDevice;
