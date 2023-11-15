import React from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LayoutHeader_containerInfo = styled.div`
  width: 175px;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  cursor: pointer;
  &:hover {
    font-weight: 600;
    color: #00b9b5;
  }
`;

const ButtonMoreInfo = () => {
  const navigate = useNavigate();

  return (
    <LayoutHeader_containerInfo onClick={() => navigate("/moreInfo")}>
      {" "}
      MORE INFO
    </LayoutHeader_containerInfo>
  );
};

export default ButtonMoreInfo;
