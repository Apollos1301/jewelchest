import React from "react";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const ProductDiv = styled.div`
  display: flex;
  background-color: white;
  width: 16vw;
  flex-direction: column;
  flex-wrap: wrap;
  height: 300px;

  margin-top: 10px;
  align-items: flex-start;
`;
const ProductImage = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 240px;

  img {
    width: 70%;
    height: auto;
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
  height: 30px;
`;

function SingleProd({ id, imgRes, produkt }) {
  var style;
  if (imgRes[0] <= imgRes[1]) {
    style = { width: "auto", height: "16vw" };
  }
  if (imgRes[1] <= imgRes[0]) {
    style = { width: "12vw", height: "auto" };
  }
  if (imgRes[0] == imgRes[1]) {
    style = { width: "12vw", height: "180px" };
  }

  return (
    <ProductDiv style={{ overflow: "hidden" }}>
      <ProductImage>
        <img src={produkt.product_image} alt="" style={style} />
      </ProductImage>
      <ProductInfo>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5
              style={{
                fontSize: produkt.product_name != null ? "15px" : "10px",
              }}
            >
              {produkt.product_name != null ? produkt.product_name : "."}
            </h5>
            <h6>
              {produkt.product_keywords.slice(0, 25)}
              {produkt.product_keywords.length > 25 ? "..." : ""}
            </h6>
          </div>
          <h3>{produkt.product_price.replace(",", ".")}€</h3>
        </div>
        <div>{produkt.product_root}</div>
      </ProductInfo>
    </ProductDiv>
  );
}

export default SingleProd;
