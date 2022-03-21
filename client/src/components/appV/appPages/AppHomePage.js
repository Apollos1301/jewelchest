import React from "react";
import styled from "styled-components";
import Navbar from "../appSingle_comps/appHomePageComps/AppNavbar_home";
import SetProducts from "../appSingle_comps/appHomePageComps/AppSetProducts";
import Products from "../appSingle_comps/appHomePageComps/AppProducts";
import Menue_prods from "../appSingle_comps/appHomePageComps/AppMenue_prods";
import MidCards from "../appSingle_comps/appHomePageComps/AppMidCards";
import TextInfo from "../appSingle_comps/appHomePageComps/AppTextInfo";
import ContactCard from "../appSingle_comps/appHomePageComps/AppContactCard";


const TopDiv = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
`;
////////////////////////////////////////////////////////////////////////
const MidDiv1 = styled.div`
  display: flex;
  flex-direction: column ;
  margin-top: 140px;
  width: 100%;
  height: 75vw;
  border: 1px solid black;
  gap: 30px;
  align-items: center;
  h1{
    font-size: 4vw;
  }
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
function AppHome() {
  return (
    <div style={{ overflowY: "hidden" }}>
      <TopDiv>
        <Navbar />
      </TopDiv>
      <MidDiv1>
        <h1>App</h1>
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

export default AppHome;
