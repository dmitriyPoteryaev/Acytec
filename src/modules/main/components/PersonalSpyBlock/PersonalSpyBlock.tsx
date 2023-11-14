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

const ImgForpersonalSpy = require("@assets/personalSpy.svg").default as string;

const LayoutSeparatedBlockAbout3D = styled(LayoutAboutModelAndSpecsWraper)`
  background-color: #fbfbfb;
`;
const ContainerSeparatedBlockAbout3D = styled(ContainerAboutModelAndSpecs)`
  justify-content: start;
  margin-left: 134px;
  margin-top: 123px;
  margin-bottom: 123px;
  width: calc(100% - 327px);
`;
const ContainerSeparatedBlockAbout3D__ContainerDesription = styled(
  ContainerAboutModelAndSpecs__ContainerDesription,
)`
  width: 619.71px;
  height: 215.17px;
  top: 378px;
  left: 980px;
`;

const ContainerSeparatedBlockAbout3D__ContaineTitle = styled(
  ContainerAboutModelAndSpecs__ContaineTitle,
)`
  font-weight: 700;
  line-height: 57.6px;
  top: 184px;
  left: 980px;
`;

const ContainerSeparatedBlockAbout3D__ContainerImg3DBlock = styled.img`
  width: 691.44px;
  height: 530.56px;
`;

const ContainerSeparatedBlockAbout3D__InnerContainerDesription = styled(
  ContainerAboutModelAndSpecs__InnerContainerDesription,
)`
  font-size: 20px;
  color: #212529;
  font-weight: 400;
`;

const PersonalSpyBlock = () => {
  return (
    <LayoutSeparatedBlockAbout3D>
      <ContainerSeparatedBlockAbout3D>
        <ContainerSeparatedBlockAbout3D__ContaineTitle>
          Integrate, monitor, & update <br /> with your personal spy
        </ContainerSeparatedBlockAbout3D__ContaineTitle>
        <ContainerSeparatedBlockAbout3D__ContainerDesription>
          <ContainerSeparatedBlockAbout3D__InnerContainerDesription>
            The SMI2-M Modbus indicator seamlessly joins a system already in{" "}
            <br />
            play, keenly "listening" for specific data details (like device
            addresses
            <br />
            or function codes) without needing any system reconfigurations.
            <br />
            Plus, when updates are needed, the broadcast feature sends out info,
            <br />
            and each indicator intuitively captures its designated data. Imagine
            <br />
            streamlining multiple devices without the usual technical hoops.
          </ContainerSeparatedBlockAbout3D__InnerContainerDesription>
        </ContainerSeparatedBlockAbout3D__ContainerDesription>
        <ContainerSeparatedBlockAbout3D__ContainerImg3DBlock
          alt="ImgPersonalSpy"
          src={ImgForpersonalSpy}
        />
      </ContainerSeparatedBlockAbout3D>
    </LayoutSeparatedBlockAbout3D>
  );
};

export default PersonalSpyBlock;
