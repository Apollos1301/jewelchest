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
  width: 100%;
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
  width: 100%;
  height: 450px;
  border: 1px solid black;
  margin-top: 60px;

  @media only screen and (max-width: 420px) {
    pointer-events: none;
    display: none;
  }
`;

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const NextPage = styled.div`
  overflow-y: hidden;
  display: flex;
  justify-content: space-between;
  width: 350px;
  height: 50px;
  border: 1px solid black;
  margin-top: 10px;
  margin-right: 15px;
  float: right;
`;
const NextPageIcons = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  h1 {
    position: absolute;
    text-align: center;
    font-size: 40px;
    top: -5px;
  }
`;
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function Products({ allprods_display }) {
  const [prodPage, setProdPage] = useState(0);

  //console.log(allprods);
  //console.log(allprods[2].product_image);

  var allprods_display_ = allprods_display;

  allprods_display_ = allprods_display_.flat();
  //console.log(allprods_display_);
  const allprods_display_sorted_ = [];

  allprods_display_.map((obj, index) => {
    if (obj.product_rating != null) {
      allprods_display_sorted_.push(obj);
    }
  });
  allprods_display_sorted_.sort((a, b) =>
    a.product_rating < b.product_rating
      ? 1
      : b.product_rating < a.product_rating
      ? -1
      : 0
  );
  var allprods_display_sorted = packer(allprods_display_sorted_);
  
  

  //console.log(packer(allprods_display_sorted));
  /*function compare(a, b) {
    if (a.product_rating < b.product_rating) {
      return -1;
    }
    if (a.product_rating > b.product_rating) {
      return 1;
    }
    return 0;
  }
  allprods_display_ed.(compare);*/
  //console.log(shuffle(allprods));
  return (
    <div>
      <AddDiv />
      <MainDiv>
        <StyledDiv>
          {allprods_display_sorted[prodPage].map((prod, index) => (
            <a href={prod.product_link}>
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

function packer(d) {
  var a = [];
  var size = 65;
  for (var i = 0; i < d.length; i += size) {
    a.push(d.slice(i, i + size));
  }
  return a;
}
