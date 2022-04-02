import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar_coupons from "../single_comps/couponsPageComps/Navbar_coupons";

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

function CouponPage({ passProd, allprods_display }) {
  const [listUpdater, setListUpdater] = useState();
  const [likeList, setLikeList] = useState();
  const [loading, setLoader] = useState(false);
  var localStor = JSON.parse(localStorage.getItem("likes"));
  var likes = [];

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
    if (localStor != null && localStor.length > 0) {
      localStor.map((stor, index) => {
        likes.push(stor[2]);
      });
    }
    setLikeList([...likes]);
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
        <Navbar_coupons
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
      <MidDiv1></MidDiv1>
    </div>
  );
}

export default CouponPage;
