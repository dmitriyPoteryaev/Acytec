import React from "react";

import styled from "styled-components";

import Button from "../Button/Button";

const Logo = require("@assets/AcytecLogo.svg").default as string;
const Menu = require("@assets/Menu.svg").default as string;
const IvertMenu = require("@assets/InvertedMenu.svg").default as string;

const LayoutHeader = styled.header`
  font-family: "Roboto", sans-serif;
  display: flex;
  height: 110px;
  justify-content: space-between;
  min-width: 100%;
  background-color: #f8f8f8;
`;

const LayoutHeader_leftSide = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  margin-left: 59px;
`;
const LayoutHeader__logo = styled.img`
  width: 160px;
  height: 39px;
`;

const LayoutHeader__menu = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background-image: url(${Menu});
  &:hover {
    background-image: url(${IvertMenu});
  }
`;
const LayoutHeader_rightSide = styled.div`
  display: flex;
  align-items: center;
  width: 452px;
  justify-content: space-between;
  margin-right: 195px;
`;

const Header = (props: any) => {
  const { handlerChangeVisModal, isVisModal, children, handlerChangeVisPopUp } =
    props;

  return (
    <LayoutHeader>
      <LayoutHeader_leftSide>
        <LayoutHeader__menu
          onClick={(event) => {
            event.stopPropagation();
            handlerChangeVisModal();
          }}
          style={isVisModal ? { backgroundImage: `url(${IvertMenu})` } : {}}
        />
        <LayoutHeader__logo alt="logo" src={Logo} />
      </LayoutHeader_leftSide>
      <LayoutHeader_rightSide>
        {children}
        <Button
          width="43"
          onClick={(event: any) => {
            event.stopPropagation();
            handlerChangeVisPopUp(true);
          }}
        >
          REQUEST
        </Button>
      </LayoutHeader_rightSide>
    </LayoutHeader>
  );
};

export default Header;
