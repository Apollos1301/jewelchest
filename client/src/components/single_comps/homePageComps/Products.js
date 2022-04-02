import React from "react";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import SingleProd from "./SingleProd";
import amazon_produkte from "../../products/amazon_produkte.json";
import christ_produkte from "../../products/christ_produkte.json";

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const StyledDiv = styled.div`
  display: flex;
  width: 80%;
  align-content: flex-start;
  justify-content: space-around;
  gap: 35px;
  float: right;
  right: 0;
  flex-wrap: wrap;
  margin-top: 35px;
`;
////////////////////////////////////////////////////////////////
const MainDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const AddDiv = styled.div`
  width: 220px;
  height: 1450px;
  border: 1px solid black;
  margin-top: 60px;
  margin-left: 10px;
  @media only screen and (max-width: 420px) {
    pointer-events: none;
    display: none;
  }
`;

const ProductDiv = styled.div`
  display: flex;
  background-color: white;
  flex-wrap: wrap;
  width: 210px;
  height: 400px;
  border: 0.1px solid black;
  margin-top: 10px;
  align-items: flex-start;
`;
const ProductImage = styled.div`
  display: flex;
  align-items: center;
  width: 210px;
  height: 330px;
  border: 1px solid black;
  img {
    max-width: 70%;
    height: auto;
    left: 0;
    right: 0;
    margin: 0px auto;
  }
`;
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function Products() {
  var allprods_past = [];
  var allprods = [];
  allprods = allprods_past.concat(amazon_produkte, christ_produkte);
  //console.log(allprods);
  //console.log(allprods[2].product_image);

  const allprods_display = useRef(shuffle(allprods));

  //console.log(shuffle(allprods));
  return (
    <div>
      <MainDiv>
        <AddDiv></AddDiv>
        <StyledDiv>
          {allprods_display.current[0].map((prod, index) => (
            <a href={prod.product_link} style={{ textDecoration: "none" }}>
              <SingleProd
                key={index}
                id={index}
                imgRes={prod.product_image_res[1]}
                produkt={prod}
              />
            </a>
          ))}
        </StyledDiv>
      </MainDiv>
    </div>
  );
}

export default Products;

function shuffle(d) {
  var j, x, i;
  for (i = d.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = d[i];
    d[i] = d[j];
    d[j] = x;
  }

  var a = packer(d);

  return a;
}
function packer(d) {
  var b;
  var c = [];
  var a = [];
  var size = 16;
  for (var i = 0; i < d.length; i += size) {
    a.push(d.slice(i, i + size));
  }
  return a;
}
