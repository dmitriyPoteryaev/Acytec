import React from "react";

import styled from "styled-components";

const Logofacebook = require("@assets/socialMedia/facebook.svg")
  .default as string;
const Logotwiter = require("@assets/socialMedia/twiter.svg").default as string;
const Logoyoutube = require("@assets/socialMedia/youtube.svg")
  .default as string;

const Logo = require("@assets/AcytecLogo.svg").default as string;

const ImgLocation = require("@assets/contactUs/location.svg").default as string;
const ImgTel = require("@assets/contactUs/tel.svg").default as string;
const ImgEmail = require("@assets/contactUs/Email.svg").default as string;

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
  display: flex;
  width: 100%;
  height: 228px;
  background-color: #e9e9e9;
`;

const LayoutFooter__personalInformation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 61%;
  margin-left: 195px;
  height: 134px;
  margin-top: 34.52px;
`;

const LayoutFooter__descriptionCompany = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  font-size: 14px;
  color: #696969;
`;

const LayoutFooter__description = styled.div`
  font-family: "Istok Web", sans-serif;
  width: 100%;
  font-style: italic;
  font-weight: 700;
  font-size: 14px;
  color: #696969;
  line-height: 20px;
`;

const LayoutFooter__links = styled.div`
  display: flex;
  flex-direction: column;
`;

const LayoutFooter__Title = styled.div`
  font-family: "Archivo Narrow", sans-serif;
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 19.15px;
  color: #313131;
`;

const LayoutFooter__linksImprint = styled.div`
  font-family: "Istok Web", sans-serif;
  font-size: 14px;
  font-weight: 700;
  font-style: italic;
  color: #32bf96;
  margin-bottom: 5px;
  &::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-color: transparent transparent transparent #ababab;
    margin-right: 5px;
  }
`;

const LayoutFooter__contactUs = styled.div`
  position: relative;
  width: 37%;
  height: 134px;
  margin-top: 34.52px;
  margin-left: 330px;
`;
const LayoutFooter__contactUsLocation = styled.div`
  position: absolute;
  left: 0px;
  top: 40px;

  font-family: "Istok Web", sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 14px;
  color: #666666;
  line-height: 20px;
`;
const LayoutFooter__contactUTel = styled.div`
  position: absolute;
  left: 0px;
  top: 105px;

  font-family: "Istok Web", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #666666;
  line-height: 20px;
`;

const LayoutFooter__contactImgLocation = styled.img`
  position: absolute;
  left: -30px;
  top: 40px;
  height: 24px;
  width: 24px;
`;
const LayoutFooter__contactImgTel = styled.img`
  position: absolute;
  left: -30px;
  top: 105px;
  height: 24px;
  width: 24px;
`;
const LayoutFooter__contactImgEmail = styled.img`
  position: absolute;
  left: -30px;
  top: 150px;
  height: 24px;
  width: 24px;
`;
const LayoutFooter__contactEmail = styled.div`
  position: absolute;
  left: 0px;
  top: 150px;

  font-family: "Istok Web", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #32bf96;
  line-height: 20px;
`;
const LayoutFooter__logo = styled.img`
  width: 159.04px;
  height: 38.68px;
  margin-bottom: 15.32px;
`;
const LayoutFooter__restInfo = styled.div`
  font-family: "Roboto", sans-serif;  
  font-size: 13px;
  font;weight: 400;
  width: 100%;
  height: 65px;
  background-color: #f8f8f8;
  padding-left: 195px;
  padding-top: 25.16px;
  color: #696969;
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
          <LayoutFooter__containerLogo alt="youtube" src={Logoyoutube} />

          <LayoutFooter__containerLogo alt="twiter" src={Logotwiter} />
          <LayoutFooter__containerLogo alt="facebook" src={Logofacebook} />
        </LayoutFooter__innerContainersocialmedia>
      </LayoutFooter__socialmediaInfo>

      <LayoutFooter__contactInfo>
        <LayoutFooter__personalInformation>
          <LayoutFooter__descriptionCompany>
            <LayoutFooter__logo src={Logo} />
            <LayoutFooter__description>
              akYtec GmbH from Hanover, Germany develops and distributes
              innovative automation technology and industrial electronic
              products. These include various digital displays, control panels
              and programmable relays.
            </LayoutFooter__description>
          </LayoutFooter__descriptionCompany>
          <LayoutFooter__links>
            <LayoutFooter__Title>LINKS</LayoutFooter__Title>
            <LayoutFooter__linksImprint>Imprint</LayoutFooter__linksImprint>
            <LayoutFooter__linksImprint>
              Privacy Policy
            </LayoutFooter__linksImprint>
          </LayoutFooter__links>
        </LayoutFooter__personalInformation>
        <LayoutFooter__contactUs>
          <LayoutFooter__Title>CONTACT US</LayoutFooter__Title>
          <LayoutFooter__contactImgLocation src={ImgLocation} />
          <LayoutFooter__contactImgTel src={ImgTel} />
          <LayoutFooter__contactImgEmail src={ImgEmail} />
          <LayoutFooter__contactUsLocation>
            <strong>akYtec GmbH</strong> <br /> Vahrenwalder Str. 269 A<br />{" "}
            30179 Hannover, Germany
          </LayoutFooter__contactUsLocation>
          <LayoutFooter__contactUTel>
            Tel: +49 (0) 511 / 16 59 672-0 <br />
            Fax: +49 (0) 511 / 16 59 672-9
          </LayoutFooter__contactUTel>
          <LayoutFooter__contactEmail>
            info@akytec.de
          </LayoutFooter__contactEmail>
        </LayoutFooter__contactUs>
      </LayoutFooter__contactInfo>

      <LayoutFooter__restInfo>
        © 2023 akYtec . All Rights Reserved.
      </LayoutFooter__restInfo>
    </LayoutFooter>
  );
};

export default Footer;
