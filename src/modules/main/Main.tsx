import React from "react";

import ButtonMoreInfo from "@shared/components/ButtonMoreInfo";
import Footer from "@shared/components/Footer";
import Header from "@shared/components/Header";
import Modal from "@shared/components/Modal";
import { modalStore } from "@store/index";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import AboutModelAndSpecs from "./components/AboutModelAndSpecs";
import BenefitsBlock from "./components/BenefitsBlock";
import BlockAbout3D from "./components/BlockAbout3D";
import BlockGotQuestion from "./components/BlockGotQuestion";
import PersonalSpyBlock from "./components/PersonalSpyBlock";
import QuickSetupGuide from "./components/QuickSetupGuide";
import RoundDesign from "./components/RoundDesign";
import SeparatedBlock from "./components/SeparatedBlock";

export const LayoutMain = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`;

export const LayoutMainWrapper = styled.div`
  flex: 1 1 auto;
`;

const Main = observer(() => {
  const { isVisModal, handlerChangeVisModal, globalhandlerChangeVisModal } =
    modalStore;

  return (
    <LayoutMain onClick={globalhandlerChangeVisModal}>
      <Header
        handlerChangeVisModal={handlerChangeVisModal}
        isVisModal={isVisModal}
      >
        <ButtonMoreInfo />
      </Header>
      {isVisModal && <Modal />}
      <LayoutMainWrapper>
        <AboutModelAndSpecs />
        <SeparatedBlock />
        <BlockAbout3D />
        <BenefitsBlock />
        <RoundDesign />
        <QuickSetupGuide />
        <PersonalSpyBlock />
        <BlockGotQuestion />
      </LayoutMainWrapper>

      <Footer />
    </LayoutMain>
  );
});

export default Main;
