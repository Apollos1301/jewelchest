import React, { useRef, useState } from "react";
import { animated, useSpring, useSprings, config } from "react-spring";
import { easeSinInOut, easeSinIn, easeExpIn } from "d3-ease";
import styled from "styled-components";
import amazonLogo from "../../imgs/amazonLogo.jpg";
import christLogo from "../../imgs/christLogo.png";
import swarovskiLogo from "../../imgs/swarovskiLogo.jpg";
import leftPicArrow from "../../imgs/leftPicArrow.png";
import rightPicArrow from "../../imgs/rightPicArrow.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const StyledDiv = styled.div`
  display: flex;
  width: 90%;
  height: 350px;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 20px;
  border: 1px solid black;
`;
const StyledList = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  justify-self: center;
  align-self: center;
  justify-content: center;
  gap: 20px;
  align-items: center;
  list-style-type: none;
`;

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function SetProducts({ deactProd, shopList }) {
  const leftPicRef = useRef();
  const midPicRef = useRef();
  const rightPicRef = useRef();
  //const picOrder = useRef([amazonLogo, christLogo, swarovskiLogo]);
  /*const [picOrder, setPicOrder] = useState([
    amazonLogo,
    christLogo,
    swarovskiLogo,
  ]);*/
  //const [picStyle, setPicStyle] = useSprings((index) => ({}));
  return (
    <StyledDiv>
      <StyledList>
        <Carousel
          width="700px"
          centerMode={true}
          centerSlidePercentage={70}
          showThumbs={false}
          showIndicators={false}
          infiniteLoop={false}
          showArrows={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: "calc(50% - 15px)",
                  width: 50,
                  height: 50,
                  cursor: "pointer",
                  left: 0,
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <img
                  src={leftPicArrow}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: "calc(50% - 15px)",
                  width: 50,
                  height: 50,
                  cursor: "pointer",
                  right: 0,
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <img
                  src={rightPicArrow}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </button>
            )
          }
        >
          <img
            src={amazonLogo}
            alt="Amazon"
            //onClick={() => deactProd(1)}
            style={{
              opacity: shopList[0]["enabled"] ? "1" : "0.3",
              width: "330px",
              maxHeight: "160px",
            }}
          />
          <img
            src={christLogo}
            alt="Christ"
            //onClick={() => deactProd(2)}
            style={{
              opacity: shopList[1]["enabled"] ? "1" : "0.3",
              width: "330px",
              maxHeight: "160px",
            }}
          />
          <img
            src={swarovskiLogo}
            alt="Swarovski"
            //onClick={() => deactProd(2)}
            style={{
              opacity: shopList[1]["enabled"] ? "1" : "0.3",
              width: "330px",
              maxHeight: "160px",
            }}
          />
        </Carousel>
      </StyledList>
      {/*<div
        style={{
          width: "50px",
          height: "50px",
          alignSelf: "center",
          justifyItems: "flex-start",
        }}
      >
        <img
          src={leftPicArrow}
          alt="LeftArrow"
          style={{ width: "100%", height: "100%" }}
        ></img>
      </div>
      <StyledList>
        <img
          src={amazonLogo}
          alt="Amazon"
          //onClick={() => deactProd(1)}
          style={{
            opacity: shopList[0]["enabled"] ? "1" : "0.3",
            width: "330px",
            maxHeight: "160px",
          }}
        />
        <img
          src={amazonLogo}
          alt="Amazon"
          //onClick={() => deactProd(1)}
          style={{
            opacity: shopList[0]["enabled"] ? "1" : "0.3",
            width: "330px",
            maxHeight: "160px",
          }}
        />

        <img
          src={christLogo}
          alt="Christ"
          //onClick={() => deactProd(2)}
          style={{
            opacity: shopList[1]["enabled"] ? "1" : "0.3",
            width: "330px",
            maxHeight: "160px",
          }}
        />
        <img
          src={swarovskiLogo}
          alt="Swarovski"
          //onClick={() => deactProd(2)}
          style={{
            opacity: shopList[1]["enabled"] ? "1" : "0.3",
            width: "330px",
            maxHeight: "160px",
          }}
        />
      </StyledList>
      <div
        style={{
          width: "50px",
          height: "50px",
          alignSelf: "center",
          justifyItems: "flex-end",
        }}
      >
        <img
          src={rightPicArrow}
          alt="RightArrow"
          style={{ width: "100%", height: "100%" }}
        ></img>
      </div>*/}
    </StyledDiv>
  );
}

export default SetProducts;
