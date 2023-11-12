import React from "react";

import CircleWithEquipmentAndInscriptionBelow from "@shared/components/CircleWithEquipmentAndInscriptionBelow";
import styled from "styled-components";

const ImgPressuse = require("@assets/sepatedblock/pressure.svg")
  .default as string;
const ImgLevel = require("@assets/sepatedblock/level.svg").default as string;

const ImgTemepature = require("@assets/sepatedblock/temperature.svg")
  .default as string;
const ImgWeight = require("@assets/sepatedblock/weight.svg").default as string;
const ImgCurrent = require("@assets/sepatedblock/current.svg")
  .default as string;

const ImgVoltage = require("@assets/sepatedblock/voltage.svg")
  .default as string;

const ImgHumidity = require("@assets/sepatedblock/humidity.svg")
  .default as string;

const ImgResistance = require("@assets/sepatedblock/resistance.svg")
  .default as string;

const ArrayOfImgAndInscription = [
  {
    srcImg: ImgPressuse,
    inscription: "Pressure",
  },
  {
    srcImg: ImgLevel,
    inscription: "Level",
  },
  {
    srcImg: ImgTemepature,
    inscription: "Temepature",
  },
  {
    srcImg: ImgWeight,
    inscription: "Weight",
  },
  {
    srcImg: ImgCurrent,
    inscription: "Current",
  },
  ,
  {
    srcImg: ImgVoltage,
    inscription: "Voltage",
  },
  ,
  {
    srcImg: ImgHumidity,
    inscription: "Humidity",
  },
  ,
  {
    srcImg: ImgResistance,
    inscription: "Resistance",
  },
];

const LayoutSeparatedBlockWraper = styled.div`
  min-height: 250px;
  width: 100%;
  padding: 56px 195px 56px 195px;
`;

const LayoutContainerSeparatedBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;
  min-height: 139px;
  width: 100%;
`;

const ContainerWithInscriptionAndImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: center;
  height: 139px;
  width: 110px;
`;

const ContainerInscription = styled.div`
  font-family: "Roboto", sans-serif;
  color: #00a197;
  font-weight: 700;
  font-size: 22px;
`;

const SeparatedBlock = () => {
  return (
    <LayoutSeparatedBlockWraper>
      <LayoutContainerSeparatedBlock>
        {ArrayOfImgAndInscription.map((elem: any) => {
          return (
            <ContainerWithInscriptionAndImg key={elem.inscription}>
              <CircleWithEquipmentAndInscriptionBelow
                withCircleBlock="100"
                heightCircleBlock="100"
                borderStyle="1.6px solid #00A197"
                widthImg="53.07"
                heightImg="59.67"
                imgsrc={elem.srcImg}
              >
                <ContainerInscription>{elem.inscription}</ContainerInscription>
              </CircleWithEquipmentAndInscriptionBelow>
            </ContainerWithInscriptionAndImg>
          );
        })}
      </LayoutContainerSeparatedBlock>
    </LayoutSeparatedBlockWraper>
  );
};

export default SeparatedBlock;
