import React from "react";

import styled from "styled-components";

const Logofacebook = require("@assets/socialMedia/facebook.svg")
  .default as string;
const Logotwiter = require("@assets/socialMedia/twiter.svg").default as string;
const Logoyoutube = require("@assets/socialMedia/youtube.svg")
  .default as string;

const LayoutFooter = styled.footer`
  display: flex;

  height: 373px;
  flex-wrap: wrap;
  width: 100%;
  align-self: end;
`;

const LayoutFooter__socialmediaInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #313131;
  width: 100%;
`;

const LayoutFooter__contactInfo = styled.div`
  width: 100%;
  height: 228px;
  background-color: #e9e9e9;
`;
const LayoutFooter__restInfo = styled.div`
  width: 100%;
  height: 65px;
  background-color: #f8f8f8;
`;

const LayoutFooter__innerContainersocialmedia = styled.div`
  display: flex;
  justify-content: space-between;
  width: 273px;
`;
const LayoutFooter__containerLogo = styled.img`
  width: 24px;
  height: 24px;
`;

const Footer = () => {
  return (
    <LayoutFooter>
      <LayoutFooter__socialmediaInfo>
        <LayoutFooter__innerContainersocialmedia>
          <LayoutFooter__containerLogo alt="facebook" src={Logofacebook} />
          <LayoutFooter__containerLogo alt="twiter" src={Logotwiter} />
          <LayoutFooter__containerLogo alt="youtube" src={Logoyoutube} />
        </LayoutFooter__innerContainersocialmedia>
      </LayoutFooter__socialmediaInfo>

      <LayoutFooter__contactInfo />

      <LayoutFooter__restInfo />
    </LayoutFooter>
  );
};

export default Footer;
