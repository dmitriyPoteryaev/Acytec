import React from "react";

import Footer from "@shared/components/Footer";
import Header from "@shared/components/Header";
import styled from "styled-components";

import AboutModelAndSpecs from "./components/AboutModelAndSpecs";
import BenefitsBlock from "./components/BenefitsBlock";
import BlockAbout3D from "./components/BlockAbout3D";
import QuickSetupGuide from "./components/QuickSetupGuide";
import RoundDesign from "./components/RoundDesign";
import SeparatedBlock from "./components/SeparatedBlock";

export const LayoutMain = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;

const Main = () => {
  return (
    <LayoutMain>
      <Header />

      <AboutModelAndSpecs />
      <SeparatedBlock />
      <BlockAbout3D />
      <BenefitsBlock />
      <RoundDesign />
      <QuickSetupGuide />
      <Footer />
    </LayoutMain>
  );
};

export default Main;
