import React from "react";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import SingleProd from "./SingleProd";

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
function Products({ allProds, setLikes, likeupdate }) {
  //console.log(allProds[1]);
  useEffect(() => {
    setProdsAll([...allProds[0]]);
    console.log(allProds[0]);
  }, [allProds]);
  //console.log(allprods);
  //console.log(allprods[2].product_image);

  //const allprods_display = useRef(shuffle(allprods));

  //console.log(shuffle(allprods));
  const likeSave = useRef(JSON.parse(localStorage.getItem("likes")));
  const noProds = useRef(false);
  const [prodsAll, setProdsAll] = useState(allProds[0]);
  const packer = (prods) => {
    let size = 55;
    let newProds = [];
    for (var i = 0; i < prods.length; i += size) {
      newProds.push(prods.slice(i, i + size));
    }
    return newProds;
  };

  
  useEffect(() => {
    likesChecker();
  }, []);
  useEffect(() => {
    likesChecker();
  }, [allProds[0]]);
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
      let aProds = allProds[0].flat();

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
      setLikes(likelikes);
    }
  };
  return (
    <div>
      <MainDiv>
        <StyledDiv>
            {prodsAll.map((prod, index) => (
              <SingleProd
                key={index}
                id={index}
                imgRes={prod.product_image_res[1]}
                produkt={prod}
                addToFavs={addToFavs}
              />
            ))}
          </StyledDiv>
      </MainDiv>
    </div>
  );
}

export default Products;
