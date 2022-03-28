import React, { useEffect, useState } from "react";
import Navbar_searched from "../single_comps/searchedProdsComps/Navbar_searched";
import Products from "../single_comps/searchedProdsComps/Products";
import styled from "styled-components";
import starIcon from ".././imgs/star.png";

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

const ProductDiv = styled.div`
  font-family: "PlayFair", sans-serif;
  font-weight: 100;
  display: flex;
  background-color: white;
  width: 26vw;
  flex-direction: column;
  flex-wrap: wrap;
  height: 540px;
  margin-top: 10px;
  align-items: flex-start;
  
`;
const ProductImage = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 380px;

  img {
    max-width: auto;
    max-height: 100%;
    left: 0;
    right: 0;
    margin: 0px auto;
  }
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  width: 100%;
  height: 120px;
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
              height: "100px",
              border: "1px solid black",
              fontSize: "65px",
              fontWeight: "100",
            }}
          >
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
          {allProds[1] != null ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "100%",
                height: "600px",
                  border: "1px solid black",
                marginTop: "100px"
              }}
            >
              <a
                href={allProds[1].product_link}
                style={{ textDecoration: "none" }}
              >
                <ProductDiv
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <ProductImage>
                    <img src={allProds[1].product_image} alt="" />
                  </ProductImage>
                  <ProductInfo>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                          style={{
                            fontSize:
                              allProds[1].product_name != null
                                ? "35px"
                                : "10px",
                          }}
                        >
                          {allProds[1].product_name != null
                            ? allProds[1].product_name
                            : "."}
                        </span>
                        <span style={{ fontSize: "20px" }}>
                          {allProds[1].product_keywords.slice(0, 25)}
                          {allProds[1].product_keywords.length > 25
                            ? "..."
                            : ""}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "40px",
                        }}
                      >
                        {allProds[1].product_price.replace(",", ".")}€
                      </span>
                    </div>
                    <div style={{ opacity: 0.65, fontSize: "16px" }}>
                      {allProds[1].product_root}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                      }}
                    >
                      <div style={{ fontSize: "30px" }}>
                        {allProds[1].product_rating}
                      </div>
                      <div
                        style={{
                          width: "18.5px",
                          height: "18.5px",
                          visibility:
                            allProds[1].product_rating === null
                              ? "hidden"
                              : allProds[1].product_rating == ""
                              ? "hidden"
                                  : "visible",
                          marginTop: "5px"
                        }}
                      >
                        <img
                          src={starIcon}
                          alt="starIcon"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    </div>
                  </ProductInfo>
                </ProductDiv>
              </a>
            </div>
          ) : (
            ""
          )}
          <Products allProds={allProds} />
        </MidDiv1>
      ) : (
        <MidDiv1></MidDiv1>
      )}
    </div>
  );
}

export default SearchedProd;
