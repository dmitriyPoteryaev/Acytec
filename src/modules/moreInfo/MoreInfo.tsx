import React from "react";

import Footer from "@shared/components/Footer";
import Header from "@shared/components/Header";
import Modal from "@shared/components/Modal";
import { modalStore } from "@store/index";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

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

const MoreInfo = observer(() => {
  const { isVisModal, handlerChangeVisModal, globalhandlerChangeVisModal } =
    modalStore;
  return (
    <LayoutMain onClick={globalhandlerChangeVisModal}>
      <Header
        handlerChangeVisModal={handlerChangeVisModal}
        isVisModal={isVisModal}
      />
      {isVisModal && <Modal />}

      <LayoutMainWrapper></LayoutMainWrapper>

      <Footer />
    </LayoutMain>
  );
});

export default MoreInfo;
