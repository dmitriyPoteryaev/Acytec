import React from "react";

import ButtonChooseDevice from "@shared/components/ButtonChooseDevice";
import styled from "styled-components";

// 142 -14%
// 172 -17%
// 344 -34%
// 517 -50%

const ImgITP11 = require("@assets/tableContent/ImgDevice/ITP11.svg")
  .default as string;
const ImgITP14 = require("@assets/tableContent/ImgDevice/ITP14.svg")
  .default as string;
const ImgITP15 = require("@assets/tableContent/ImgDevice/ITP15.svg")
  .default as string;
const ImgITP16 = require("@assets/tableContent/ImgDevice/ITP16.svg")
  .default as string;
const ImgSMI2 = require("@assets/tableContent/ImgDevice/SMI2.svg")
  .default as string;

const LayoutTable = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 1069px;
  // width: 100%;
  box-sizing: border-box;
`;
const ContainerRow = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  min-height: 90px;
`;

const ContainerCell = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #dedede;
  min-height: 60px;
  font-size: 16px;
  font-weight: 400;
  color: #212529;
  line-height: 24px;
`;

const LayoutDigitalWithQuantity = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 30px;
  margin-top: 12.5px;
`;
const ContainerDigital = styled.div`
  font-family: "DS-Digital", sans-serif;
  font-weight: 400;
  border: 2px solid #606569;
  background-color: black;
  min-height: 30px;
  width: 40%;
  font-size: 30px;
  color: #ed0505;
`;

const ContainerQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  min-height: 30px;
  width: 20%;
  border-radius: 2.5px;
  text-align: center;
  background-color: white;
  lein-height: 24px;
`;

const DeviceQuantityRED = (props: any) => {
  const { qualuty } = props;
  return (
    <LayoutDigitalWithQuantity>
      <ContainerDigital>RED</ContainerDigital>
      <ContainerQuantity>{qualuty}</ContainerQuantity>
    </LayoutDigitalWithQuantity>
  );
};

const DeviceQuantityGREEN = (props: any) => {
  const { qualuty } = props;
  return (
    <LayoutDigitalWithQuantity>
      <ContainerDigital style={{ color: "#0BC534", fontSize: "25px" }}>
        GREEN
      </ContainerDigital>
      <ContainerQuantity>{qualuty}</ContainerQuantity>
    </LayoutDigitalWithQuantity>
  );
};

const DeviceQuantityYELLOW = (props: any) => {
  const { qualuty } = props;
  return (
    <LayoutDigitalWithQuantity>
      <ContainerDigital style={{ color: "#FFE500", fontSize: "21px" }}>
        YELLOW
      </ContainerDigital>
      <ContainerQuantity>{qualuty}</ContainerQuantity>
    </LayoutDigitalWithQuantity>
  );
};

const Table = () => {
  return (
    <LayoutTable>
      <ContainerRow>
        <ContainerCell
          style={{
            width: "14%",
            fontWeight: "700",
            justifyContent: "start",
            paddingLeft: "11px",
            textAlign: "left",
            minHeight: "144px",
          }}
        ></ContainerCell>
        <ContainerCell
          style={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            width: "17%",
            minHeight: "144px",
          }}
        >
          <img src={ImgITP11} />
        </ContainerCell>
        <ContainerCell
          style={{
            width: "17%",
            minHeight: "144px",
          }}
        >
          {" "}
          <img src={ImgITP14} />
        </ContainerCell>
        <ContainerCell
          style={{
            width: "17%",
            minHeight: "144px",
          }}
        >
          {" "}
          <img src={ImgITP15} />
        </ContainerCell>
        <ContainerCell
          style={{
            width: "17%",
            minHeight: "144px",
          }}
        >
          {" "}
          <img src={ImgITP16} />
        </ContainerCell>
        <ContainerCell
          style={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            width: "17%",
            minHeight: "144px",
          }}
        >
          <img src={ImgSMI2} />
        </ContainerCell>
      </ContainerRow>
      <ContainerRow>
        <ContainerCell
          style={{
            width: "14%",
            backgroundColor: "white",
            fontWeight: "700",
            justifyContent: "start",
            paddingLeft: "11px",
          }}
        >
          Input signal
        </ContainerCell>
        <ContainerCell style={{ width: "17%", backgroundColor: "white" }}>
          4-20 mA <br /> (current loop)
        </ContainerCell>
        <ContainerCell style={{ width: "34%", backgroundColor: "white" }}>
          4-20 mA, 0-10 V
        </ContainerCell>
        <ContainerCell style={{ width: "17%", backgroundColor: "white" }}>
          TC, RTD (Pt100, <br /> Pt1000 etc.)
        </ContainerCell>
        <ContainerCell style={{ width: "17%", backgroundColor: "white" }}>
          RS485, Modbus <br /> RTU/ASCII, microUSB <br /> (Configuration)
        </ContainerCell>
      </ContainerRow>
      <ContainerRow>
        <ContainerCell
          style={{
            width: "14%",
            fontWeight: "700",
            justifyContent: "start",
            paddingLeft: "11px",
          }}
        >
          Electricity supply
        </ContainerCell>
        <ContainerCell style={{ width: "17%" }}>Voltage drop 4 V</ContainerCell>
        <ContainerCell style={{ width: "51%" }}>24 V DC</ContainerCell>
        <ContainerCell style={{ width: "17%" }}>12/24 V DC</ContainerCell>
      </ContainerRow>
      <ContainerRow>
        <ContainerCell
          style={{
            width: "14%",
            fontWeight: "700",
            justifyContent: "start",
            paddingLeft: "11px",
            backgroundColor: "white",
          }}
        >
          Output signal
        </ContainerCell>
        <ContainerCell style={{ width: "17%", backgroundColor: "white" }}>
          -
        </ContainerCell>
        <ContainerCell style={{ width: "51%", backgroundColor: "white" }}>
          NPN-Transistor 200 mA, 42 V DC
        </ContainerCell>
        <ContainerCell style={{ width: "17%", backgroundColor: "white" }}>
          -
        </ContainerCell>
      </ContainerRow>

      <ContainerRow>
        <ContainerCell
          style={{
            width: "14%",
            fontWeight: "700",
            justifyContent: "start",
            paddingLeft: "11px",
            textAlign: "left",
          }}
        >
          Accuracy & Sampling time
        </ContainerCell>
        <ContainerCell style={{ width: "17%" }}>
          ±(0.2% FS + 1 digit) <br /> 1 s
        </ContainerCell>
        <ContainerCell style={{ width: "17%" }}>
          ±(0.2% FS + 1 digit) <br /> 0.3 s
        </ContainerCell>
        <ContainerCell style={{ width: "17%" }}>
          ± 2% FS <br /> 0.3 s
        </ContainerCell>
        <ContainerCell style={{ width: "17%" }}>
          ± 0.25% FS <br /> 2 s
        </ContainerCell>
        <ContainerCell style={{ width: "17%" }}>
          Baud rate 2.4...115.2 <br /> kBit/s
        </ContainerCell>
      </ContainerRow>

      <ContainerRow>
        <ContainerCell
          style={{
            width: "14%",
            fontWeight: "700",
            justifyContent: "start",
            paddingLeft: "11px",
            backgroundColor: "white",
          }}
        >
          Display
        </ContainerCell>
        <ContainerCell style={{ width: "34%", backgroundColor: "white" }}>
          7-segment, 4-digit <br /> LED display, 14 mm <br /> character height
        </ContainerCell>
        <ContainerCell style={{ width: "17%", backgroundColor: "white" }}>
          LED, 10 segments
        </ContainerCell>
        <ContainerCell style={{ width: "34%", backgroundColor: "white" }}>
          7-segment, 4-digit
          <br />
          LED display, 14 mm <br /> character height
        </ContainerCell>
      </ContainerRow>
      <ContainerRow>
        <ContainerCell
          style={{
            width: "14%",
            fontWeight: "700",
            justifyContent: "start",
            paddingLeft: "11px",
            textAlign: "left",
          }}
        >
          LED color
        </ContainerCell>
        <ContainerCell style={{ width: "34%" }}>
          Red or green (depending on model)
        </ContainerCell>
        <ContainerCell style={{ width: "17%" }}>
          Red or green <br /> (configurable)
        </ContainerCell>
        <ContainerCell style={{ width: "17%" }}>
          Red or green <br /> (depending on model)
        </ContainerCell>
        <ContainerCell style={{ width: "17%" }}>
          Red/green/yellow <br />
          (depending on model)
        </ContainerCell>
      </ContainerRow>

      <ContainerRow>
        <ContainerCell
          style={{
            width: "14%",
            fontWeight: "700",
            justifyContent: "start",
            paddingLeft: "11px",
            textAlign: "left",
            backgroundColor: "white",
          }}
        >
          Protection class
        </ContainerCell>
        <ContainerCell style={{ width: "85%", backgroundColor: "white" }}>
          Front IP65, Rear IP20
        </ContainerCell>
      </ContainerRow>

      <ContainerRow>
        <ContainerCell
          style={{
            width: "14%",
            fontWeight: "700",
            justifyContent: "start",
            paddingLeft: "11px",
            textAlign: "left",
          }}
        >
          Role in the system
        </ContainerCell>
        <ContainerCell style={{ width: "68%" }}>Slave</ContainerCell>
        <ContainerCell style={{ width: "17%" }}>
          Master / Slave / Spy
        </ContainerCell>
      </ContainerRow>

      <ContainerRow>
        <ContainerCell
          style={{
            width: "14%",
            fontWeight: "700",
            justifyContent: "start",
            paddingLeft: "11px",
            textAlign: "left",
            backgroundColor: "#D2D2D2",
          }}
        >
          Choose <br /> your device
        </ContainerCell>
        <ContainerCell style={{ width: "17%", backgroundColor: "#D2D2D2" }}>
          <ButtonChooseDevice />
        </ContainerCell>
        <ContainerCell style={{ width: "17%", backgroundColor: "#D2D2D2" }}>
          <ButtonChooseDevice />
        </ContainerCell>
        <ContainerCell style={{ width: "17%", backgroundColor: "#D2D2D2" }}>
          <ButtonChooseDevice />
        </ContainerCell>
        <ContainerCell style={{ width: "17%", backgroundColor: "#D2D2D2" }}>
          <ButtonChooseDevice />
        </ContainerCell>
        <ContainerCell style={{ width: "17%", backgroundColor: "#D2D2D2" }}>
          <ButtonChooseDevice />
        </ContainerCell>
      </ContainerRow>

      <ContainerRow>
        <ContainerCell
          style={{
            width: "14%",
            fontWeight: "700",
            justifyContent: "start",
            paddingLeft: "11px",
            textAlign: "left",
            backgroundColor: "#D2D2D2",
            minHeight: "144px",
          }}
        >
          LED colors, <br /> Device quantity
        </ContainerCell>
        <ContainerCell
          style={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            width: "17%",
            backgroundColor: "#D2D2D2",
            minHeight: "144px",
          }}
        >
          <DeviceQuantityRED qualuty={6} />
          <DeviceQuantityGREEN qualuty={30} />
        </ContainerCell>
        <ContainerCell
          style={{
            width: "17%",
            backgroundColor: "#D2D2D2",
            minHeight: "144px",
          }}
        ></ContainerCell>
        <ContainerCell
          style={{
            width: "17%",
            backgroundColor: "#D2D2D2",
            minHeight: "144px",
          }}
        ></ContainerCell>
        <ContainerCell
          style={{
            width: "17%",
            backgroundColor: "#D2D2D2",
            minHeight: "144px",
          }}
        ></ContainerCell>
        <ContainerCell
          style={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            width: "17%",
            backgroundColor: "#D2D2D2",
            minHeight: "144px",
          }}
        >
          <DeviceQuantityRED qualuty={6} />
          <DeviceQuantityGREEN qualuty={3} />
          <DeviceQuantityYELLOW qualuty={1} />
        </ContainerCell>
      </ContainerRow>

      <ContainerRow>
        <ContainerCell
          style={{
            width: "14%",
            fontWeight: "700",
            justifyContent: "start",
            paddingLeft: "11px",
            textAlign: "left",
            backgroundColor: "white",
          }}
        >
          Total devices <br /> amount
        </ContainerCell>
        <ContainerCell style={{ width: "17%", backgroundColor: "white" }}>
          36
        </ContainerCell>
        <ContainerCell
          style={{ width: "17%", backgroundColor: "white" }}
        ></ContainerCell>
        <ContainerCell
          style={{ width: "17%", backgroundColor: "white" }}
        ></ContainerCell>
        <ContainerCell
          style={{ width: "17%", backgroundColor: "white" }}
        ></ContainerCell>
        <ContainerCell style={{ width: "17%", backgroundColor: "white" }}>
          10
        </ContainerCell>
      </ContainerRow>
    </LayoutTable>
  );
};

export default Table;
