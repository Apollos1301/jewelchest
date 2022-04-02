import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";
import leftArrow from "../../imgs/leftArrow.png";
import likeHeart from "../../imgs/likeHeart.png";
import likeHeartFilled from "../../imgs/likeHeartFilled.png";

const LikeDiv = styled.div`
  width: 90%;
  height: 640px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 12px;
`;

const SingleLikeDiv = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  min-height: 165px;
  border: 1px solid black;
`;

const LikedImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 160px;
  background-color: white;
`;
const LikedInfo = styled.div`
  flex-direction: column;
  display: flex;
  width: 60%;
  border: 1px solid black;
`;

function LikeBar({ setOn, setSideLike, likeList, setList, setListUpdater }) {
  //console.log(likeList);
  //const [likedProd, setLikedProd] = useState(likes);
  const [startStyle, setStartStyle] = useSpring(() => ({
    height: "800px",
    width: "0px",
    backgroundColor: "pink",
    position: "fixed",
    top: "30px",
    right: 0,
    borderLeft: "none",
    zIndex: 99,
    config: { duration: 500 },
  }));
  const [arrowStyle, setArrowStyle] = useSpring(() => ({
    width: "90px",
    height: "90px",
    cursor: "pointer",
    marginLeft: "20px",
    transform: "rotate(180deg)",
  }));
  if (setOn) {
    setStartStyle.stop();
    setStartStyle.start({ width: "600px" });
    setStartStyle.set({ borderLeft: "1px solid grey" });
  } else {
    setStartStyle.stop();
    setStartStyle.start({ width: "0px" });
    setStartStyle.set({ borderLeft: "none" });
  }

  const deleteLike = (item) => {
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
    let listMap = JSON.parse(localStorage.getItem("likes"));
    let updatelist = [];
    listMap.map((prodLike, index) => {
      updatelist.push(prodLike[2]);
    });
    setList(updatelist);
    setListUpdater(listMap);
  };
  return (
    <animated.div style={startStyle}>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "160px",
        }}
      >
        <animated.img
          src={leftArrow}
          alt="back"
          style={arrowStyle}
          onMouseOver={() => {
            setArrowStyle.stop();
            setArrowStyle.start({ marginLeft: "30px" });
          }}
          onMouseOut={() => {
            setArrowStyle.stop();
            setArrowStyle.start({ marginLeft: "20px" });
          }}
          onClick={() => {
            setSideLike();
          }}
        />
      </div>
      {likeList != null ? (
        <LikeDiv>
          {likeList.map((prod, index) => (
            <SingleLikeDiv>
              <div
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  width: "25px",
                  height: "25px",
                }}
              >
                <img
                  src={likeHeartFilled}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                  onMouseOver={(item) => {
                    item.target.src = likeHeart;
                  }}
                  onMouseOut={(item) => {
                    item.target.src = likeHeartFilled;
                  }}
                  onClick={() => {
                    let item = [prod.product_Key[0], prod.product_Key[1], prod];
                    deleteLike(item);
                  }}
                />
              </div>
              <LikedImage>
                <img
                  src={prod.product_image}
                  alt=""
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </LikedImage>
              <LikedInfo>
                {prod.product_name != null ? (
                  <h1>{prod.product_name}</h1>
                ) : (
                  <h1>{prod.product_keywords.slice(0, 25)}</h1>
                )}
                {prod.product_name != null ? (
                  <h3>{prod.product_keywords.slice(0, 25)}</h3>
                ) : (
                  ""
                )}
              </LikedInfo>
            </SingleLikeDiv>
          ))}
        </LikeDiv>
      ) : (
        <div style={{ overflow: "hidden" }}></div>
      )}
    </animated.div>
  );
}

export default LikeBar;
