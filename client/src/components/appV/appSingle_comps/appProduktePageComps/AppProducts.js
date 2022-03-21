import React from "react";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import SingleProd from "./AppSingleProd";
import amazon_produkte from "../../../products/amazon_produkte.json";
import christ_produkte from "../../../products/christ_produkte.json";

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
function Products({ allprods_display, pPage, setpPage }) {
  return (
    <div>
      <AddDiv />
      <NextPage>
        <NextPageIcons>
          <button onClick={() => setpPage(0)}>1</button>
        </NextPageIcons>
        <NextPageIcons>
          <button onClick={() => setpPage(1)}>2</button>
        </NextPageIcons>
        <NextPageIcons>
          <button onClick={() => setpPage(2)}>3</button>
        </NextPageIcons>
        <NextPageIcons>
          <h1>...</h1>
        </NextPageIcons>
        <NextPageIcons>
          <button>{allprods_display.length}</button>
        </NextPageIcons>
      </NextPage>
      <MainDiv>
        <StyledDiv>
          {allprods_display[pPage].map((prod, index) => (
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
