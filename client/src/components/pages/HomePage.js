import React from "react";
import styled from "styled-components";
import Navbar from "../single_comps/homePageComps/Navbar_home";
import SetProducts from "../single_comps/homePageComps/SetProducts";
import Products from "../single_comps/homePageComps/Products";
import Menue_prods from "../single_comps/homePageComps/Menue_prods";
import MidCards from "../single_comps/homePageComps/MidCards";
import TextInfo from "../single_comps/homePageComps/TextInfo";
import ContactCard from "../single_comps/homePageComps/ContactCard";


const TopDiv = styled.div`
  width: 100%;
  height: 1200px;
  overflow: hidden;
`;
////////////////////////////////////////////////////////////////////////
const MidDiv1 = styled.div`
  display: flex;
  margin-top: 140px;
  width: 100%;
  height: 600px;
  border: 1px solid black;
  gap: 80px;
  padding-left: 200px;
  align-items: center;
`;
////////////////////////////////////////////////////////////////////////
const MidDiv2 = styled.div`
  margin-top: 140px;
  width: 100%;
  height: 2000px;
`;
////////////////////////////////////////////////////////////////////////
const MidDiv3_inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 2000px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
`;
const MidDiv3 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2300px;
  border: 1px solid black;
`;
////////////////////////////////////////////////////////////////////////
const MidDiv4 = styled.div`
  padding-top: 600px;
  width: 100%;
  height: 1000px;
  border: 1px solid black;
`;
////////////////////////////////////////////////////////////////////////
const MidDiv5 = styled.div`
  margin-top: 140px;
  width: 100%;
  height: 2000px;
`;
////////////////////////////////////////////////////////////////////////
const FootDiv = styled.div`
  margin-top: 140px;
  width: 100%;
  height: 300px;
`;
function Home() {
  return (
    <div style={{ overflowY: "hidden" }}>
      <TopDiv>
        <Navbar />
      </TopDiv>
      <MidDiv1>
        <h1>PC</h1>
        <Menue_prods />
      </MidDiv1>
      <MidDiv2>
        <SetProducts />
        <Products />
      </MidDiv2>
      <MidDiv3>
        <MidDiv3_inner>
          <MidCards />
          <MidCards />
        </MidDiv3_inner>
      </MidDiv3>
      <MidDiv4>
        <TextInfo />
      </MidDiv4>
      <MidDiv5>
        <ContactCard />
      </MidDiv5>
      <FootDiv></FootDiv>
    </div>
  );
}

export default Home;
