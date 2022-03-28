import React, { useEffect, useState } from "react";
import Navbar_searched from "../single_comps/searchedProdsComps/Navbar_searched";
import Products from "../single_comps/searchedProdsComps/Products";
import styled from "styled-components";

import PulseLoader from "react-spinners/PulseLoader";

const TopDiv = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const MidDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;

function SearchedProd({ allProds, passProd, allprods_display }) {
  const [loading, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  const [prods, setProds] = useState(allProds);
  useEffect(() => {
    setProds([...allProds]);
  }, [allProds]);
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
    <div style={{ overflowY: "hidden", fontFamily: "PlayFair, sans-serif" }}>
      <TopDiv>
        <Navbar_searched
          passProd={passProd}
          allprods_display={allprods_display}
        />
      </TopDiv>
      {allProds.length > 1 ? (
        <MidDiv1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "200px",
              border: "1px solid black",
              fontSize: "65px",
              fontWeight: "100",
            }}
          >
            {" > > "}Alle Produkte mit
            <span
              style={{
                fontSize: "80px",
                fontWeight: "700",
                marginLeft: "30px",
              }}
            >
              {" "}
              "{allProds[2]}"
            </span>
          </div>
          <Products allProds={allProds} />
        </MidDiv1>
      ) : (
        <MidDiv1></MidDiv1>
      )}
    </div>
  );
}

export default SearchedProd;
