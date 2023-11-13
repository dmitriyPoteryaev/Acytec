import React from "react";

import Button from "@shared/components/Button";
import CircleWithEquipmentAndInscriptionBelow from "@shared/components/CircleWithEquipmentAndInscriptionBelow";
import styled from "styled-components";

// import {
//   LayoutContainerSeparatedBlock,
//   ContainerInscription,
// } from "../SeparatedBlock";

const ImgVersatileApplication =
  require("@assets/benefits/VersatileApplication.svg").default as string;
const ImgDiverseInput = require("@assets/benefits/DiverseInput.svg")
  .default as string;

const ImgAdaptiveLed = require("@assets/benefits/AdaptiveLed.svg")
  .default as string;
const ImgDualFuncControl = require("@assets/benefits/DualFuncControl.svg")
  .default as string;

const ArrayOfImgAndInscription = [
  {
    srcImg: ImgVersatileApplication,
    header: "Versatile application",
    inscription:
      "Measure levels, pressure, temperature, flow, weight, and more.",
  },
  {
    srcImg: ImgDiverseInput,
    header: "Diverse input compatibility",
    inscription:
      "Accepts 4-20 mA, 0-10V, resistance thermometers, thermocouples, and Modbus RTU/ASCII signals.",
  },
  {
    srcImg: ImgAdaptiveLed,
    header: "Adaptive LED alerts",
    inscription: "TemeLEDs blink based on your alarm configurations.",
  },
  {
    srcImg: ImgDualFuncControl,
    header: "Dual-function control",
    inscription:
      "Manage heating, cooling, or alarms based on setpoint boundaries.",
  },
];

const LayoutBenefistsBlockWraper = styled.div`
  min-height: 727px;
  width: 100%;
  padding: 142px 286px 142px 286px;
`;

export const LayoutContainerBenefitsBlock = styled.div`
  min-height: 338.41px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerWithInscriptionAndImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 338px;
  width: 265.25px;
`;

export const ContainerBenefitsInscription = styled.div`
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: #00a197;
  font-weight: 700;
  font-size: 22px;
`;
export const ContainerBenefitsInscription__header = styled.div`
  margin-top: 22px;
  color: #00a197;
  font-size: 20px;
`;

export const ContainerBenefitsInscription__inscription = styled.div`
  margin-top: 37px;
  color: #212529;
  font-weight: 400;
  font-size: 16px;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const BenefitsBlock = () => {
  return (
    <LayoutBenefistsBlockWraper>
      <LayoutContainerBenefitsBlock>
        {ArrayOfImgAndInscription.map((elem: any) => {
          return (
            <ContainerWithInscriptionAndImg key={elem.inscription}>
              <CircleWithEquipmentAndInscriptionBelow
                withCircleBlock="150"
                heightCircleBlock="150"
                borderStyle="0.46px solid #00A197"
                widthImg="120"
                heightImg="84"
                imgsrc={elem.srcImg}
              >
                <ContainerBenefitsInscription>
                  <ContainerBenefitsInscription__header>
                    {elem.header}
                  </ContainerBenefitsInscription__header>
                  <ContainerBenefitsInscription__inscription>
                    {elem.inscription}
                  </ContainerBenefitsInscription__inscription>
                </ContainerBenefitsInscription>
              </CircleWithEquipmentAndInscriptionBelow>
            </ContainerWithInscriptionAndImg>
          );
        })}
      </LayoutContainerBenefitsBlock>
      <ContainerButton>
        <Button width="20" weightFont="700">
          More benefits
        </Button>
      </ContainerButton>
    </LayoutBenefistsBlockWraper>
  );
};

export default BenefitsBlock;
