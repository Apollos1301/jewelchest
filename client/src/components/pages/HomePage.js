import React from "react";
import styled from "styled-components";
import Navbar from "../single_comps/page1Comps/Navbar";
import Diamond from "../single_comps/page1Comps/Diamond";
import SearchBar from "../single_comps/page1Comps/SearchBar";
import SetProducts from "../single_comps/page1Comps/SetProducts";
import Products from "../single_comps/page1Comps/Products";

const TopDiv = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;
`;
const MidDiv = styled.div`
  margin-top: 140px;
  width: 100%;
  height: 3200px;
`;
const FootDiv = styled.div`
  margin-top: 140px;
  width: 100%;
  height: 30%;
`;
function Home() {
  return (
    <div>
      <TopDiv>
        <Navbar />
        <Diamond />
      </TopDiv>
      <MidDiv>
        <SearchBar />
        <SetProducts />
        <Products />
      </MidDiv>
      <FootDiv></FootDiv>
    </div>
  );
}

export default Home;
