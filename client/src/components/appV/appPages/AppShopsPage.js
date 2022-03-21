import React from "react";
import styled from "styled-components";
import Navbar_shops from "../appSingle_comps/appShopsPageComps/AppNavbar_shops";

const TopDiv = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;
`;

const MidDiv1 = styled.div`
  width: 100%;
  margin-top: 10px;
`;

function ShopsPage() {
  return (
    <div style={{ overflowY: "hidden" }}>
      <TopDiv>
        <Navbar_shops />
      </TopDiv>
      <MidDiv1></MidDiv1>
    </div>
  );
}

export default ShopsPage;
