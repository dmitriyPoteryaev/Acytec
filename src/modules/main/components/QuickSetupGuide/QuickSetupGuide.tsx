import React from "react";

import Button from "@shared/components/Button";
import CircleWithEquipmentAndInscriptionBelow from "@shared/components/CircleWithEquipmentAndInscriptionBelow";
import styled from "styled-components";

import Table from "./Table";
import { LayoutAboutModelAndSpecsWraper } from "../AboutModelAndSpecs/AboutModelAndSpecs";
import {
  ContainerBenefitsInscription__inscription,
  ContainerBenefitsInscription__header,
  ContainerBenefitsInscription,
  ContainerWithInscriptionAndImg,
  LayoutContainerBenefitsBlock,
  ContainerButton,
} from "../BenefitsBlock/BenefitsBlock";

const ImgPush = require("@assets/qiuqeSetupGuide/push.svg").default as string;
const ImgSelect = require("@assets/qiuqeSetupGuide/select.svg")
  .default as string;
const ImgSet = require("@assets/qiuqeSetupGuide/set.svg").default as string;

const ArrayOfImgAndInscription = [
  {
    srcImg: ImgPush,
    header: "1",
    inscription: "Push the PROG button to enter the menu",
  },
  {
    srcImg: ImgSelect,
    header: "2",
    inscription: "Select the appropriate signal type",
  },
  {
    srcImg: ImgSet,
    header: "3",
    inscription: "Set your measurement limits",
  },
];

const LayoutQuickSetupGuide = styled(LayoutAboutModelAndSpecsWraper)`
  flex-wrap: wrap;
`;

const ContainerQuickSetupGuide = styled.div`
  display: flex;
  flex-direction: column;
  margin: 113px 384px 137px 384px;
  min-height: 100%;
  width: calc(100% - 768px);
`;

const ContainerQuickSetupGuide__title = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 60px;
  width: 100%;
  font-weight: 700;
  text-align: center;
  margin-bottom: 72px;
`;

const ContainerWithInscriptionAndImgInQuickSetupGuide = styled(
  ContainerWithInscriptionAndImg,
)`
  height: 383px;
  width: 298px;
`;
const ContainerBenefitsInscriptionInQuickSetupGuide = styled(
  ContainerBenefitsInscription,
)`
  color: #212529;
`;

export const ContainerWithInscriptionAndImgInQuickSetupGuide__header = styled(
  ContainerBenefitsInscription__header,
)`
  margin-top: 10px;
  color: #212529;
  font-size: 39px;
  font-weight: 700px;
`;

export const ContainerWithInscriptionAndImgInQuickSetupGuide__inscription = styled(
  ContainerBenefitsInscription__inscription,
)`
  margin-top: 10px;
  font-size: 22px;
`;

export const ContainerButtonInQuickSetupGuide = styled(ContainerButton)`
  margin-top: 90px;
  margin-bottom: 215px;
`;

const ContainerTitleInQuickSetupGuide = styled(
  ContainerButtonInQuickSetupGuide,
)`
  margin-bottom: 83px;

  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 60px;
`;

const QuickSetupGuide = () => {
  return (
    <LayoutQuickSetupGuide>
      <ContainerQuickSetupGuide>
        <ContainerQuickSetupGuide__title>
          Quick setup guide
        </ContainerQuickSetupGuide__title>
        <LayoutContainerBenefitsBlock>
          {ArrayOfImgAndInscription.map((elem: any) => {
            return (
              <ContainerWithInscriptionAndImgInQuickSetupGuide
                key={elem.inscription}
              >
                <CircleWithEquipmentAndInscriptionBelow
                  withCircleBlock="250"
                  heightCircleBlock="250"
                  borderStyle="2px solid #DEDEDE"
                  widthImg="170"
                  heightImg="170"
                  borderRadius="125px"
                  imgsrc={elem.srcImg}
                >
                  {" "}
                  <ContainerBenefitsInscriptionInQuickSetupGuide>
                    <ContainerWithInscriptionAndImgInQuickSetupGuide__header>
                      {elem.header}
                    </ContainerWithInscriptionAndImgInQuickSetupGuide__header>
                    <ContainerWithInscriptionAndImgInQuickSetupGuide__inscription>
                      {elem.inscription}
                    </ContainerWithInscriptionAndImgInQuickSetupGuide__inscription>
                  </ContainerBenefitsInscriptionInQuickSetupGuide>
                </CircleWithEquipmentAndInscriptionBelow>
              </ContainerWithInscriptionAndImgInQuickSetupGuide>
            );
          })}
        </LayoutContainerBenefitsBlock>
        <ContainerButtonInQuickSetupGuide>
          <Button width="25" weightFont="700">
            DOWNLOAD FULL MANUAL
          </Button>
        </ContainerButtonInQuickSetupGuide>
        <ContainerTitleInQuickSetupGuide>
          Choose the model that suits your needs
        </ContainerTitleInQuickSetupGuide>
        <Table />
        <ContainerButtonInQuickSetupGuide style={{ marginBottom: "10px" }}>
          <Button width="25" weightFont="700">
            REQUEST NOW
          </Button>
        </ContainerButtonInQuickSetupGuide>
      </ContainerQuickSetupGuide>
    </LayoutQuickSetupGuide>
  );
};

export default QuickSetupGuide;
