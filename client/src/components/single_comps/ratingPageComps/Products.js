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
function Products({ allprods_display, setLikes, likeupdate }) {
  const likeSave = useRef(JSON.parse(localStorage.getItem("likes")));
  const noProds = useRef(false);
  const [allProds, setAllProds] = useState(allprods_display);
  const packer = (prods) => {
    let size = 55;
    let newProds = [];
    for (var i = 0; i < prods.length; i += size) {
      newProds.push(prods.slice(i, i + size));
    }
    return newProds;
  };

  const ratingMaker = (prods) => {
    let allprods_display_sorted = [];
    prods.map((obj, index) => {
      if (obj.product_rating != null) {
        allprods_display_sorted.push(obj);
      }
    });
    allprods_display_sorted.sort((a, b) =>
      a.product_rating < b.product_rating
        ? 1
        : b.product_rating < a.product_rating
        ? -1
        : 0
    );
    return setAllProds([...packer(allprods_display_sorted)]);
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
      ratingMaker(aProds);
      setLikes(likelikes);
    }
  };

  if (allProds.length < 1) {
    noProds.current = true;
  } else {
    noProds.current = false;
  }
  return (
    <div>
      <AddDiv />
      <MainDiv>
        {noProds.current ? (
          <StyledDiv>
            <h1>No Prods</h1>
          </StyledDiv>
        ) : (
          <StyledDiv>
            {allProds[0].map((prod, index) => (
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

function packer(d) {
  var a = [];
  var size = 65;
  for (var i = 0; i < d.length; i += size) {
    a.push(d.slice(i, i + size));
  }
  return a;
}
