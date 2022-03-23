import React from "react";
import Navbar_rating from "../single_comps/ratingPageComps/Navbar_rating";
import Products from "../single_comps/ratingPageComps/Products";
import styled from "styled-components";
import SetProducts from "../single_comps/ratingPageComps/SetProducts";

const TopDiv = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;
`;

const MidDiv1 = styled.div`
  width: 100%;
  margin-top: 10px;
`;
function RatingPage({ allprods_display, deactProd, shopList }) {
  return (
    <div style={{ overflowY: "hidden" }}>
      <TopDiv>
        <Navbar_rating />
      </TopDiv>
      <MidDiv1>
        <SetProducts deactProd={deactProd} shopList={shopList} />
        <Products allprods_display={allprods_display} />
      </MidDiv1>
    </div>
  );
}

export default RatingPage;
