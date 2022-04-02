import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../single_comps/homePageComps/Navbar_home";
import Products from "../single_comps/homePageComps/Products";
import Menue_prods from "../single_comps/homePageComps/Menue_prods";
import MidCards from "../single_comps/homePageComps/MidCards";
import TextInfo from "../single_comps/homePageComps/TextInfo";
import ContactCard from "../single_comps/homePageComps/ContactCard";

import PulseLoader from "react-spinners/PulseLoader";

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
function Home({ passProd, allprods_display }) {
  const [listUpdater, setListUpdater] = useState();
  const [likeList, setLikeList] = useState();
  const [loading, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);
  return loading ? (
    <div
      style={{
        overflowY: "hidden",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PulseLoader color={"#b5b5b5"} loading={loading} size={50} />
    </div>
  ) : (
    <div style={{ overflowY: "hidden" }}>
      <TopDiv>
        <Navbar
          passProd={passProd}
          allprods_display={allprods_display}
          likeList={likeList}
          setList={(newList) => {
            setLikeList([...newList]);
          }}
          setListUpdater={(newUpdate) => {
            setListUpdater([...newUpdate]);
          }}
        />
      </TopDiv>
      <MidDiv1>
        <Menue_prods />
      </MidDiv1>
      <MidDiv2>
        <Products
          likeupdate={listUpdater}
          setLikes={(list) => {
            setLikeList([...list]);
          }}
        />
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
