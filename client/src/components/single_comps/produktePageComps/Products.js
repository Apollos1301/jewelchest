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
function Products({ allprods_display, pPage, setpPage, setLikes, likeupdate }) {
  const sortieren = useRef(0);
  const likeSave = useRef(JSON.parse(localStorage.getItem("likes")));
  const sortTurn = useRef(false);
  const noProds = useRef(false);
  const [allProds, setAllProds] = useState(allprods_display);
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
  const sortCheck = (sort, allProducts) => {
    let flatprods = allProducts.flat();
    switch (sort) {
      case 0:
        setAllProds(packer(flatprods));
        break;
      case 1:
        flatprods.sort(function (a, b) {
          return a.product_price - b.product_price;
        });
        setAllProds(packer(flatprods));
        break;
      case 2:
        flatprods.sort(function (a, b) {
          return b.product_price - a.product_price;
        });
        setAllProds(packer(flatprods));
        break;
    }
    //console.log(allProds);
  };

  useEffect(() => {
    likesChecker();
  }, []);
  useEffect(() => {
    likesChecker();
  }, [allprods_display]);
  useEffect(() => {
    likesChecker();
  }, [likeupdate]);
  const addToFavs = (item) => {
    let newList = [];
    let check = false;
    let allLikes = JSON.parse(localStorage.getItem("likes"));
    if (allLikes != null) {
      if (allLikes.length < 1) {
        newList.push(item);
      } else {
        allLikes.map((likes, index) => {
          if (likes[0] == item[0] && likes[1] == item[1]) {
            check = true;
          } else {
            newList.push(likes);
          }
        });
        if (!check) {
          newList.push(item);
        }
      }
    }
    if (allLikes == null) {
      newList.push(item);
    }
    localStorage.setItem("likes", JSON.stringify(newList));
    likeSave.current = JSON.parse(localStorage.getItem("likes"));
    //console.log(JSON.parse(localStorage.getItem("likes")));
    likesChecker();
  };

  const stanProds = useRef([]);
  const likesChecker = () => {
    //console.log("checker");

    if (localStorage.getItem("likes") != null) {
      let likeList = JSON.parse(localStorage.getItem("likes"));
      likeSave.current = [...likeList];
      let check = false;
      let aProds = allprods_display.flat();

      let likelikes = [];
      JSON.parse(localStorage.getItem("likes")).map((p, ind) => {
        likelikes.push(p[2]);
      });
      //console.log(likeList);
      aProds.map((prod, index) => {
        check = false;
        likeList.map((like, ind) => {
          if (prod.product_Key[0] == like[0]) {
            if (prod.product_Key[1] == like[1]) {
              prod.product_Key[2] = true;
              //console.log(prod);
              check = true;

              return;
            }
          }
        });
        if (!check) {
          prod.product_Key[2] = false;
        }
      });
      //setAllProds([...packer(aProds)]);
      stanProds.current = [...aProds];
      //console.log(likelikes);

      sortCheck(sortieren.current, aProds);
      setLikes(likelikes);
    }
  };

  if (allProds.length < 1) {
    noProds.current = true;
  } else {
    noProds.current = false;
  }
  console.log(allProds);
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
            {sortieren.current > 0 ? (
              <SelectedSort
                onClick={() => {
                  sortCheck(0, stanProds.current);
                  console.log("0 check");
                  sortieren.current = 0;
                }}
              >
                {sortieren.current == 1 ? "Preis zu" : "Preis ab"}
              </SelectedSort>
            ) : (
              ""
            )}
          </div>
          <SortDropdown as={animated.div} style={dropdown}>
            <span
              onClick={() => {
                sortCheck(2, allProds);
                sortieren.current = 2;
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
                sortCheck(1, allProds);
                sortieren.current = 1;
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
              <SingleProd
                key={index}
                id={index}
                imgRes={prod.product_image_res[1]}
                produkt={prod}
                addToFavs={addToFavs}
              />
            ))}
          </StyledDiv>
        )}
      </MainDiv>
    </div>
  );
}

export default Products;
