import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar_info from "../single_comps/infoPageComps/Navbar_info";

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

function InfoPage({ passProd, allprods_display }) {
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
        <Navbar_info passProd={passProd} allprods_display={allprods_display} />
      </TopDiv>
      <MidDiv1></MidDiv1>
    </div>
  );
}

export default InfoPage;
