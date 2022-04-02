import React from "react";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import startIcon from "../../imgs/star.png";
import likeHeart from "../../imgs/likeHeart.png";
import likeHeartFilled from "../../imgs/likeHeartFilled.png";
import { animated, useSpring, config, useSprings } from "react-spring";

const ProductDiv = styled.div`
  position: relative;
  font-family: "PlayFair", sans-serif;
  font-weight: 100;
  display: flex;
  background-color: white;
  width: 16vw;
  flex-direction: column;
  flex-wrap: wrap;
  height: 380px;
  border-bottom: 0.1px solid black;
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

function SingleProd({ id, imgRes, produkt, addToFavs }) {
  var style;
  if (imgRes[0] <= imgRes[1]) {
    style = { width: "auto", height: "12vw" };
  }
  if (imgRes[1] <= imgRes[0]) {
    style = { width: "12vw", height: "auto" };
  }
  if (imgRes[0] == imgRes[1]) {
    style = { width: "12vw", height: "240px" };
  }

  const [likeAnim, setLikeAnim] = useSpring(() => ({
    overflow: "visible",
    width: "100%",
    height: "100%",
    cursor: "pointer",
    transform: "scale(1)",
  }));
  return (
    <ProductDiv style={{ overflow: "visible" }}>
      <div
        style={{
          position: "absolute",
          right: "0",
          width: "25px",
          height: "25px",
          overflow: "visible",
        }}
      >
        <animated.img
          src={produkt.product_Key[2] ? likeHeartFilled : likeHeart}
          alt=""
          style={likeAnim}
          onMouseOver={(item) => {
            if (!produkt.product_Key[2]) {
              item.target.src = likeHeartFilled;
            } else {
              item.target.src = likeHeart;
            }
          }}
          onMouseOut={(item) => {
            if (!produkt.product_Key[2]) {
              item.target.src = likeHeart;
            } else {
              item.target.src = likeHeartFilled;
            }
          }}
          onClick={() => {
            let item = [
              produkt.product_Key[0],
              produkt.product_Key[1],
              produkt,
            ];
            addToFavs(item);
            setLikeAnim.stop();
            setLikeAnim.start({ transform: "scale(1.5)" });
            setTimeout(() => {
              setLikeAnim.stop();
              setLikeAnim.start({ transform: "scale(1)" });
            }, 500);
          }}
        />
      </div>
      <a
        href={produkt.product_link}
        style={{ textDecoration: "none", width: "100%", height: "100%" }}
      >
        <ProductImage>
          <img src={produkt.product_image} alt="" style={style} />
        </ProductImage>
        <ProductInfo>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: produkt.product_name != null ? "20px" : "10px",
                }}
              >
                {produkt.product_name != null ? produkt.product_name : "."}
              </span>
              <span>
                {produkt.product_keywords.slice(0, 25)}
                {produkt.product_keywords.length > 25 ? "..." : ""}
              </span>
            </div>
            <span style={{ fontFamily: "serif", fontWeight: "bold" }}>
              {produkt.product_price.replace(",", ".")}€
            </span>
          </div>
          <div style={{ opacity: 0.65 }}>{produkt.product_root}</div>
          <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            <div>{produkt.product_rating}</div>
            <div
              style={{
                width: "14.5px",
                height: "14.5px",
                visibility:
                  produkt.product_rating === null
                    ? "hidden"
                    : produkt.product_rating == ""
                    ? "hidden"
                    : "visible",
              }}
            >
              <img
                src={startIcon}
                alt="starIcon"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </ProductInfo>
      </a>
    </ProductDiv>
  );
}

export default SingleProd;
