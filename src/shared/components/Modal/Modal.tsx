import React from "react";

import styled from "styled-components";

const LayoutModal = styled.aside`
  height: calc(100% - 483px);
  width: 405px;
  z-index: 12;
  position: absolute;
  background: rgba(101, 94, 94, 0.5);
  left: 0;
  top: 110px;
  bottom: 0;
  background-color: rgba(248, 248, 248, 1);
`;

const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 111.12px;
  margin-top: 77px;
  color: rgba(33, 37, 41, 1);
`;

const ContainerPositonModal = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 45.51px;
  color: rgba(33, 37, 41, 1);
  &:hover {
    color: rgba(0, 161, 151, 1);
  }
`;

const Modal = () => {
  return (
    <LayoutModal
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <ContainerModal>
        <ContainerPositonModal>Compact design</ContainerPositonModal>
        <ContainerPositonModal>Convenient mounting</ContainerPositonModal>
        <ContainerPositonModal>Fast configuration</ContainerPositonModal>
        <ContainerPositonModal>Technical data</ContainerPositonModal>
      </ContainerModal>
    </LayoutModal>
  );
};

export default Modal;
