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
      <PulseLoader color={"#ff75bf"} loading={loading} size={150} />
    </div>
  ) : (
    <div style={{ overflowY: "hidden" }}>
      <TopDiv>
        <Navbar_coupons
          passProd={passProd}
          allprods_display={allprods_display}
        />
      </TopDiv>
      <MidDiv1></MidDiv1>
    </div>
  );
}

export default CouponPage;
