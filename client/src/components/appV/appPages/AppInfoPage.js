import React from "react";
import styled from "styled-components";
import Navbar_info from "../appSingle_comps/appInfoPageComps/AppNavbar_info";

const TopDiv = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;
`;

const MidDiv1 = styled.div`
  width: 100%;
  margin-top: 10px;
`;

function InfoPage() {
  return (
    <div style={{ overflowY: "hidden" }}>
      <TopDiv>
        <Navbar_info />
      </TopDiv>
      <MidDiv1></MidDiv1>
    </div>
  );
}

export default InfoPage;
