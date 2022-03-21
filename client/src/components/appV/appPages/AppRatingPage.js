import React from "react";
import Navbar_rating from "../appSingle_comps/appRatingPageComps/AppNavbar_rating";
import Products from "../appSingle_comps/appRatingPageComps/AppProducts";
import styled from "styled-components";
import SetProducts from "../appSingle_comps/appRatingPageComps/AppSetProducts";

const TopDiv = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;
`;

const MidDiv1 = styled.div`
  width: 100%;
  margin-top: 10px;
`;
function RatingPage({ allprods_display }) {
  
  return (
    <div style={{ overflowY: "hidden" }}>
      <TopDiv>
        <Navbar_rating />
      </TopDiv>
      <MidDiv1>
        <SetProducts/>
        <Products allprods_display={allprods_display} />
      </MidDiv1>
    </div>
  );
}

export default RatingPage;
