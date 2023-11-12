import React from "react";

import Button from "@shared/components/Button";
import styled from "styled-components";

const ImgForModelAndSpec = require("@assets/ImgForModelAndSpec.svg")
  .default as string;

export const LayoutAboutModelAndSpecsWraper = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  background-color: #e9e9e9;
  height: 823px;
`;
export const ContainerAboutModelAndSpecs = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-left: 195px;
  margin-top: 47px;
  margin-bottom: 50px;
  width: calc(100% - 195px);
`;

export const ContainerAboutModelAndSpecs__ContainerDesription = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 521px;
  height: 255px;
  top: 325px;
  left: 195px;
`;

export const ContainerAboutModelAndSpecs__ContaineTitle = styled.div`
  position: absolute;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 60px;
  line-height: 78px;
  top: 144px;
  left: 195px;
`;

export const ContainerAboutModelAndSpecs__InnerContainerDesription = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 32px;
  font-size: 20px;
`;

export const ContainerAboutModelAndSpecs__ContainerImgAboutModelAndSpecs = styled.img`
  width: 970.69px;
  height: 725px;
`;

const AboutModelAndSpecs = () => {
  return (
    <LayoutAboutModelAndSpecsWraper>
      <ContainerAboutModelAndSpecs>
        <ContainerAboutModelAndSpecs__ContaineTitle>
          Accelerate your industrial operations <br /> with akYtec displays
        </ContainerAboutModelAndSpecs__ContaineTitle>
        <ContainerAboutModelAndSpecs__ContainerDesription>
          <ContainerAboutModelAndSpecs__InnerContainerDesription>
            Experience the fusion of innovative design and <br />
            functionality with our unique T-shaped housing.
            <br />
            Seamlessly blending segment display with a hassle-free <br />
            mounting solution, it's tailor-made for the industrial world. 
          </ContainerAboutModelAndSpecs__InnerContainerDesription>

          <Button width="57" weightFont="700">
            Explore models & specs
          </Button>
        </ContainerAboutModelAndSpecs__ContainerDesription>
        <ContainerAboutModelAndSpecs__ContainerImgAboutModelAndSpecs
          alt="ImgForModelAndSpec"
          src={ImgForModelAndSpec}
        />
      </ContainerAboutModelAndSpecs>
    </LayoutAboutModelAndSpecsWraper>
  );
};

export default AboutModelAndSpecs;
