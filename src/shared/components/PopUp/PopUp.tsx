import React from "react";

import { TableForPopUp } from "@modules/main/components/QuickSetupGuide/Table/Table";
import styled from "styled-components";

import Button from "../Button";

const Cross = require("@assets/crossForPopUp.svg").default as string;

const LayoutPopUp = styled.div`
  position: absolute;
  z-index: 20;
  width: 100%;
  height: calc(100% - 483px);
  background-color: rgba(0, 0, 0, 0.8);
  top: 110px;
  left: 0;
`;
const BodyPopUp = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentPopUp = styled.div`
  position: relative;
  background-color: white;
  min-width: 1152px;
  height: 762px;
  padding: 90px 50px 68px 50px;
  border-radius: 10px;
`;

const PopUp = (props: any) => {
  const { handlerChangeVisPopUp } = props;
  return (
    <LayoutPopUp id="popup" onClick={handlerChangeVisPopUp}>
      <BodyPopUp>
        <ContentPopUp
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <img
            style={{
              position: "absolute",
              right: "55px",
              top: "35px",
            }}
            src={Cross}
            onClick={handlerChangeVisPopUp}
          />
          <TableForPopUp MinHeight="278" />
          <div
            style={{
              width: "100%",
              display: "flex",
              marginTop: "68px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button width="20">Request</Button>
          </div>
        </ContentPopUp>
      </BodyPopUp>
    </LayoutPopUp>
  );
};

export default PopUp;
