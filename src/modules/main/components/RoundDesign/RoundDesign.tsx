import React from "react";

import styled from "styled-components";

import {
  LayoutAboutModelAndSpecsWraper,
  ContainerAboutModelAndSpecs,
  ContainerAboutModelAndSpecs__ContaineTitle,
  ContainerAboutModelAndSpecs__ContainerDesription,
  ContainerAboutModelAndSpecs__InnerContainerDesription,
} from "../AboutModelAndSpecs/AboutModelAndSpecs";

const ImgForRoundDesign = require("@assets/ImgForRoundDesign.svg")
  .default as string;

const LayoutSeparatedBlockRoundDesign = styled(LayoutAboutModelAndSpecsWraper)`
  height: 796.04px;

  background-color: #fbfbfb;
`;
const ContainerRoundDesign = styled(ContainerAboutModelAndSpecs)`
  justify-content: start;
  margin-left: 20px;
  margin-top: 74.52px;
  margin-bottom: 74.52px;
  width: calc(100% - 20px);
`;
const ContainerdRoundDesign__ContainerImgRoundDesign = styled.img`
  width: 1150px;
  height: 647px;
`;

const ContainerRoundDesign__ContaineTitle = styled(
  ContainerAboutModelAndSpecs__ContaineTitle,
)`
  font-weight: 700;
  line-height: 75px;
  top: 224px;
  left: 1179px;
  color: #212529;
`;
const ContainerRoundDesign__InnerContainerDesription = styled(
  ContainerAboutModelAndSpecs__InnerContainerDesription,
)``;

const ContainerRoundDesign__ContainerDesription = styled(
  ContainerAboutModelAndSpecs__ContainerDesription,
)`
  width: 511.54px;
  height: 120.91px;
  top: 418px;
  left: 1179px;
`;

const RoundDesign = () => {
  return (
    <LayoutSeparatedBlockRoundDesign>
      <ContainerRoundDesign>
        <ContainerdRoundDesign__ContainerImgRoundDesign
          alt="ImgForRoundDesign"
          src={ImgForRoundDesign}
        />
      </ContainerRoundDesign>
      <ContainerRoundDesign__ContainerDesription>
        <ContainerRoundDesign__InnerContainerDesription>
          AkYtec's ITP series indicators fit seamlessly into a <br />
          standard Ø22.5mm cutout, making mounting notably <br />
          easier than the conventional rectangular control cabinet <br />
          installations. Choose a round for a hassle-free setup!
        </ContainerRoundDesign__InnerContainerDesription>
      </ContainerRoundDesign__ContainerDesription>

      <ContainerRoundDesign__ContaineTitle>
        Simplicity in <br /> round design
      </ContainerRoundDesign__ContaineTitle>
    </LayoutSeparatedBlockRoundDesign>
  );
};

export default RoundDesign;
