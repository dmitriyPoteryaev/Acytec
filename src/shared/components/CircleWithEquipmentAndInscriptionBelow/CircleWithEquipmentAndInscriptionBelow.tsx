import React from "react";

import styled from "styled-components";

const ContainerCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: white;
`;
const ContainerImg = styled.img``;

const CircleWithEquipmentAndInscriptionBelow = (props: any) => {
  const {
    withCircleBlock,
    heightCircleBlock,
    borderStyle,
    widthImg,
    heightImg,
    imgsrc,
    children,
  } = props;

  return (
    <>
      {" "}
      <ContainerCircle
        style={{
          width: `${withCircleBlock}px`,
          height: `${heightCircleBlock}px`,
          border: borderStyle,
        }}
      >
        <ContainerImg
          style={{ width: `${widthImg}px`, height: `${heightImg}px` }}
          src={imgsrc}
        />
      </ContainerCircle>
      <>{children}</>
    </>
  );
};

export default CircleWithEquipmentAndInscriptionBelow;
