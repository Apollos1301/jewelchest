import React, { useEffect, useState } from "react";
import Navbar_rating from "../single_comps/ratingPageComps/Navbar_rating";
import Products from "../single_comps/ratingPageComps/Products";
import styled from "styled-components";
import SetProducts from "../single_comps/ratingPageComps/SetProducts";

import PulseLoader from "react-spinners/PulseLoader";

const TopDiv = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;
`;

const MidDiv1 = styled.div`
  width: 100%;
  margin-top: 10px;
`;
function RatingPage({ allprods_display, deactProd, shopList, passProd }) {
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
        <Navbar_rating
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
        <SetProducts deactProd={deactProd} shopList={shopList} />
        <Products
          allprods_display={allprods_display}
          likeupdate={listUpdater}
          setLikes={(list) => {
            setLikeList([...list]);
          }}
        />
      </MidDiv1>
    </div>
  );
}

export default RatingPage;
