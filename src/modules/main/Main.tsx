import React from "react";

import Footer from "@shared/components/Footer";
import Header from "@shared/components/Header";
import styled from "styled-components";

import AboutModelAndSpecs from "./components/AboutModelAndSpecs";
import BenefitsBlock from "./components/BenefitsBlock";
import BlockAbout3D from "./components/BlockAbout3D";
import PersonalSpyBlock from "./components/PersonalSpyBlock";
import QuickSetupGuide from "./components/QuickSetupGuide";
import RoundDesign from "./components/RoundDesign";
import SeparatedBlock from "./components/SeparatedBlock";

export const LayoutMain = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`;

export const LayoutMainWrapper = styled.div`
  flex: 1 1 auto;
`;

const Main = () => {
  return (
    <LayoutMain>
      <Header />

      <LayoutMainWrapper>
        <AboutModelAndSpecs />
        <SeparatedBlock />
        <BlockAbout3D />
        <BenefitsBlock />
        <RoundDesign />
        <QuickSetupGuide />
        <PersonalSpyBlock />
      </LayoutMainWrapper>

      <Footer />
    </LayoutMain>
  );
};

export default Main;
