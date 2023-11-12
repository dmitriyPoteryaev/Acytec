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

const ImgFor3DBlock = require("@assets/ImgFor3DModelBlock.svg")
  .default as string;

const LayoutSeparatedBlockAbout3D = styled(LayoutAboutModelAndSpecsWraper)`
  height: 897px;
`;
const ContainerSeparatedBlockAbout3D = styled(ContainerAboutModelAndSpecs)`
  justify-content: start;
  margin-left: 327px;
  margin-top: 100px;
  margin-bottom: 180px;
  width: calc(100% - 327px);
`;
const ContainerSeparatedBlockAbout3D__ContainerDesription = styled(
  ContainerAboutModelAndSpecs__ContainerDesription,
)`
  width: 500px;
  height: 319px;
  top: 346px;
  left: 1077px;
`;

const ContainerSeparatedBlockAbout3D__ContaineTitle = styled(
  ContainerAboutModelAndSpecs__ContaineTitle,
)`
  font-weight: 700;
  line-height: 57.6px;
  top: 248px;
  left: 1077px;
`;

const ContainerSeparatedBlockAbout3D__ContainerImg3DBlock = styled.img`
  width: 616px;
  height: 614px;
`;

const ContainerSeparatedBlockAbout3D__InnerContainerDesription = styled(
  ContainerAboutModelAndSpecs__InnerContainerDesription,
)`
  color: #212529;
`;

const BlockAbout3D = () => {
  return (
    <LayoutSeparatedBlockAbout3D>
      <ContainerSeparatedBlockAbout3D>
        <ContainerSeparatedBlockAbout3D__ContaineTitle>
          Optimized for tight space
        </ContainerSeparatedBlockAbout3D__ContaineTitle>
        <ContainerSeparatedBlockAbout3D__ContainerDesription>
          <ContainerSeparatedBlockAbout3D__InnerContainerDesription>
            Boasting a neat front footprint of 48x26mm, our device <br />
            showcases up to 4 digits with crystal clarity at a height <br />
            of 14 mm. Thanks to its compact 55mm cylindrical rear,
            <br />
            it effortlessly fits into limited spaces, making it perfect <br />
            for push-button panels or control cabinets. Choose the
            <br />
            ideal model for your space requirements.
          </ContainerSeparatedBlockAbout3D__InnerContainerDesription>
          <Button width="53.6" weightFont="700">
            Download 3D model
          </Button>
        </ContainerSeparatedBlockAbout3D__ContainerDesription>
        <ContainerSeparatedBlockAbout3D__ContainerImg3DBlock
          alt="ImgFor3DBlock"
          src={ImgFor3DBlock}
        />
      </ContainerSeparatedBlockAbout3D>
    </LayoutSeparatedBlockAbout3D>
  );
};

export default BlockAbout3D;
