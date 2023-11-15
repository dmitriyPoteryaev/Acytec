import React from "react";

import Footer from "@shared/components/Footer";
import Header from "@shared/components/Header";
import Modal from "@shared/components/Modal";
import { modalStore } from "@store/index";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ImgForBackButton = require("@assets/backButton.svg").default as string;
const ImgForDeviceIPT11 = require("@assets/moreInfo/ITP11.svg")
  .default as string;
const ImgForDeviceIPT14 = require("@assets/moreInfo/ITP14.svg")
  .default as string;

const ImgForDeviceIPT15 = require("@assets/moreInfo/ITP15.svg")
  .default as string;

const ImgForDeviceIPT16 = require("@assets/moreInfo/ITP16.svg")
  .default as string;

const ImgForDeviceSMI2 = require("@assets/moreInfo/SMI2.svg").default as string;

const ArrrayForBlockDevices = [
  {
    name: "ITP11 Process indicator 4-20 mA (loop-powered)",
    img: ImgForDeviceIPT11,
  },
  {
    name: "ITP14 Universal Process Indicator 0-10 V / 4-20 mA)",
    img: ImgForDeviceIPT14,
  },
  {
    name: "ITP15 LED Bar Graph Display",
    img: ImgForDeviceIPT15,
  },
  {
    name: "ITP16 Temperature indicator",
    img: ImgForDeviceIPT16,
  },
  {
    name: "SMI2 RS-485 Display",
    img: ImgForDeviceSMI2,
  },
];

const LayoutMain = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`;

const LayoutMainWrapper = styled.div`
  flex: 1 1 auto;
  background-color: #dedede;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LayoutBackButton = styled.div`
  margin-top: 30px;
  width: 100%;
  text-align: left;
  padding-left: 205px;
  margin-bottom: 40px;
`;

const LayoutTitle = styled.div`
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 60px;
  font-weight: 700;
  color: #212529;
  text-align: center;
`;

const BackButton = styled.img``;
const LayoutDevice = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 40px;
`;

const LayoutImgDevice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 19%;
  height: 192px;
  border-right: 1px solid #dedede;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #212529;
`;

const LayouDesctiptionDevice = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 80%;
  height: 192px;
  padding-top: 80px;
  padding-left: 65px;
  padding-bottom: 80px;
`;

const LayoutDevices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const MoreInfo = observer(() => {
  const { isVisModal, handlerChangeVisModal, globalhandlerChangeVisModal } =
    modalStore;

  const navigate = useNavigate();
  return (
    <LayoutMain onClick={globalhandlerChangeVisModal}>
      <Header
        handlerChangeVisModal={handlerChangeVisModal}
        isVisModal={isVisModal}
      />
      {isVisModal && <Modal />}

      <LayoutMainWrapper>
        <LayoutBackButton>
          <BackButton src={ImgForBackButton} onClick={() => navigate(-1)} />
        </LayoutBackButton>
        <LayoutTitle>Device specifications</LayoutTitle>
        <LayoutDevices>
          {ArrrayForBlockDevices.map((elem: any) => {
            return (
              <LayoutDevice key={elem.name}>
                <LayoutImgDevice>
                  <img src={elem.img} />
                </LayoutImgDevice>
                <LayouDesctiptionDevice>{elem.name}</LayouDesctiptionDevice>
              </LayoutDevice>
            );
          })}
        </LayoutDevices>
      </LayoutMainWrapper>

      <Footer />
    </LayoutMain>
  );
});

export default MoreInfo;
