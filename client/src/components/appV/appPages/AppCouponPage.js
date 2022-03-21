import React from "react";
import styled from "styled-components";
import Navbar_coupons from "../appSingle_comps/appCouponsPageComps/AppNavbar_coupons";

const TopDiv = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;
`;

const MidDiv1 = styled.div`
  width: 100%;
  margin-top: 10px;
`;

function CouponPage() {
  return (
    <div style={{ overflowY: "hidden" }}>
      <TopDiv>
        <Navbar_coupons />
      </TopDiv>
      <MidDiv1></MidDiv1>
    </div>
  );
}

export default CouponPage;
