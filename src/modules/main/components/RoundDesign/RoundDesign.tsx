import React from "react";

import Button from "@shared/components/Button";
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

const LayoutSeparatedRoundDesign = styled(LayoutAboutModelAndSpecsWraper)`
  height: 796.04px;

  background-color: #fbfbfb;
`;
const ContainerSeparatedRoundDesign = styled(ContainerAboutModelAndSpecs)`
  justify-content: start;
  margin-left: 20px;
  margin-top: 74.52px;
  margin-bottom: 74.52px;
  width: calc(100% - 20px);
`;
const ContainerSeparatedRoundDesign__ContainerImgRoundDesign = styled.img`
  width: 1150px;
  height: 647px;
`;

const ContainerSeparatedRoundDesign__ContaineTitle = styled(
  ContainerAboutModelAndSpecs__ContaineTitle,
)`
  font-weight: 700;
  line-height: 75px;
  top: 224px;
  left: 1179px;
  color: #212529;
  font-size: 60px;
`;
const ContainerSeparatedRoundDesign__InnerContainerDesription = styled(
  ContainerAboutModelAndSpecs__InnerContainerDesription,
)`
  font-weight: 700;
  line-height: 75px;
  top: 224px;
  left: 1179px;
  color: #212529;
  font-size: 60px;
`;

const RoundDesign = () => {
  return (
    <LayoutSeparatedRoundDesign>
      <ContainerSeparatedRoundDesign>
        <ContainerSeparatedRoundDesign__ContainerImgRoundDesign
          alt="ImgForRoundDesign"
          src={ImgForRoundDesign}
        />
      </ContainerSeparatedRoundDesign>
      {/* <ContainerAboutModelAndSpecs__ContainerDesription>
        <ContainerSeparatedRoundDesign__InnerContainerDesription>
          Boasting a neat front footprint of 48x26mm, our device <br />
          showcases up to 4 digits with crystal clarity at a height <br />
          of 14 mm. Thanks to its compact 55mm cylindrical rear,
          <br />
          it effortlessly fits into limited spaces, making it perfect <br />
          for push-button panels or control cabinets. Choose the
          <br />
          ideal model for your space requirements.
        </ContainerSeparatedRoundDesign__InnerContainerDesription>
      </ContainerAboutModelAndSpecs__ContainerDesription> */}

      <ContainerSeparatedRoundDesign__ContaineTitle>
        Simplicity in <br /> round design
      </ContainerSeparatedRoundDesign__ContaineTitle>
    </LayoutSeparatedRoundDesign>
  );
};

export default RoundDesign;
