import React from "react";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import SingleProd from "./SingleProd";
import dropDown from "../../imgs/drop_down.png";
import amazon_produkte from "../../products/amazon_produkte.json";
import christ_produkte from "../../products/christ_produkte.json";
import { animated, useSpring, config, useSprings } from "react-spring";

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
const SortDiv = styled.div`
  width: 150px;
  margin-left: 20px;
  margin-top: 10px;
  padding-top: 5px;
  padding-left: 5px;
`;
const SortButton = styled.div`
  display: flex;
  gap: 6px;
  width: 120px;
  height: 40px;
  border: 1px solid grey;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  padding-left: 5px;
  img {
    width: 12px;
    height: 10px;
  }
`;
const SelectedSort = styled.div`
  width: 100px;
  height: 40px;
  background-color: #a5fda5bf;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  padding-top: 5px;
  :hover {
    background-color: #ff8080bf;
  }
`;
const SortDropdown = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 80px;
  gap: 10px;

  span {
    cursor: pointer;
    font-size: 18px;
  }
`;
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function Products({ allprods_display, pPage, setpPage }) {
  const sortTurn = useRef(false);
  const noProds = useRef(false);
  var allProds = allprods_display;
  const [sortieren, setSortieren] = useState(0);
  if (allprods_display.length < 1) {
    noProds.current = true;
  } else {
    noProds.current = false;
  }
  const [dropDownImg, setDropDownImg] = useSpring(() => ({
    transform: "rotate(180deg)",
  }));
  const [dropdown, setDropdown] = useSpring(() => ({
    pointerEvents: "none",
    height: "0px",
    border: "none",
    paddingTop: "0px",
  }));
  const packer = (prods) => {
    let size = 55;
    let newProds = [];
    for (var i = 0; i < prods.length; i += size) {
      newProds.push(prods.slice(i, i + size));
    }
    return newProds;
  };
  const sortCheck = () => {
    let flatprods = allprods_display.flat();
    switch (sortieren) {
      case 0:
        allProds = allprods_display;
        break;
      case 1:
        flatprods.sort(function (a, b) {
          return a.product_price - b.product_price;
        });
        allProds = packer(flatprods);
        break;
      case 2:
        flatprods.sort(function (a, b) {
          return b.product_price - a.product_price;
        });
        allProds = packer(flatprods);
        break;
    }
    //console.log(allProds);
  };
  sortCheck();
  return (
    <div style={{ fontFamily: "PlayFair", fontWeight: "bold" }}>
      <AddDiv />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <SortDiv>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "250px",
            }}
          >
            <SortButton
              onClick={() => {
                sortTurn.current = !sortTurn.current;
                console.log(sortTurn.current);
                if (sortTurn.current) {
                  console.log("start");
                  setDropDownImg.stop();
                  setDropDownImg.start({
                    transform: "rotate(0deg)",
                  });
                  setDropdown.stop();
                  setDropdown.start({
                    height: "80px",
                    pointerEvents: "all",
                    paddingTop: "5px",
                  });
                  setDropdown.set({ border: "1px solid grey" });
                } else {
                  setDropDownImg.stop();
                  setDropDownImg.start((index) => ({
                    transform: "rotate(180deg)",
                  }));
                  setDropdown.stop();
                  setDropdown.start({
                    height: "0px",
                    pointerEvents: "none",
                    paddingTop: "0px",
                  });
                  setTimeout(() => {
                    setDropdown.set({ border: "none" });
                  }, 430);
                }
              }}
            >
              <span>sortieren:</span>
              <span>
                <animated.img src={dropDown} alt="" style={dropDownImg} />
              </span>
            </SortButton>
            {sortieren > 0 ? (
              <SelectedSort
                onClick={() => {
                  setSortieren(0);
                }}
              >
                {sortieren == 1 ? "Preis zu" : "Preis ab"}
              </SelectedSort>
            ) : (
              ""
            )}
          </div>
          <SortDropdown as={animated.div} style={dropdown}>
            <span
              onClick={() => {
                setSortieren(2);
              }}
            >
              Preis ab
            </span>
            <span
              style={{
                borderBottom: "1px solid grey",
                cursor: "default",
              }}
            ></span>
            <span
              onClick={() => {
                setSortieren(1);
              }}
            >
              Preis zu
            </span>
          </SortDropdown>
        </SortDiv>
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
            <button>{allProds.length}</button>
          </NextPageIcons>
        </NextPage>
      </div>
      <MainDiv>
        {noProds.current ? (
          <StyledDiv>No Prods</StyledDiv>
        ) : (
          <StyledDiv>
            {allProds[pPage].map((prod, index) => (
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
        )}
      </MainDiv>
    </div>
  );
}

export default Products;
