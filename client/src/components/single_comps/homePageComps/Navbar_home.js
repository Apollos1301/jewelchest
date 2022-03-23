import React, { useEffect, useState } from "react";
import styled from "styled-components";
import likeHeart from "../../imgs/likeHeart.png";
import contactUs from "../../imgs/contactUs.png";
import { Link } from "react-router-dom";
import { animated, useSpring, config } from "react-spring";
import { easeSinInOut } from "d3-ease";
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

const NavDiv = styled.div`
  z-index: 99;
  position: fixed;
  display: flex;
  align-items: left;
  flex-direction: column;
  width: 100%;
  
  margin-top: 20px;
  border-top: 15px outset #e5e0e2;
`;
////////////////////////////////////////////////////////////////
const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 5px;
  padding: 6px;
  padding-left: 10px;
  background-color: #fedde6;
`;
const LogoSpan = styled(Link)`
  font-size: 25px;
  text-decoration: none;
  list-style-type: none;
`;
////////////////////////////////////////////////////////////////
const NavList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
////////////////////////////////
const NavListLeft = styled.ul`
  display: flex;
  width: 90%;
  height: 45px;
  gap: 5vw;
  background-color: #fedde6;
  /*
  border-bottom: 1px solid black;*/
  list-style-type: none;
`;
const StyledLink = styled(Link)`
  font-size: 14px;
  color: black;
  padding-left: 10px;
  margin-top: 12px;
  cursor: pointer;
  text-decoration: none;
  list-style-type: none;
  /*filter: drop-shadow(0px 0px 25px #fee7eb);*/
  @media only screen and (max-width: 500px) {
    font-size: 10px;
  }
  :hover {
    color: rgba(0, 0, 0, 0.45);
  }
`;
////////////////////////////////
const NavListRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 10%;
  height: 58px;
  background-color: #fedde6;
`;
const BorderDiv = styled.div`
  width: 100%;
  height: 25%;
  /*border-left: 1px solid black;
  border-bottom: 1px solid black;*/
`;

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function Navbar() {
  const [navShow, setNavShow] = useState(true);
  const [style, setStyle] = useSpring(() => ({
    opacity: 1,
    y: 0,
    pointerEvents: "all",
    config: { duration: 250, easing: easeSinInOut },
  }));
  const controllNav = () => {
    if (window.scrollY >= 1200) {
      setNavShow(false);
    } else {
      setNavShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controllNav);
    return () => {
      window.removeEventListener("scroll", controllNav);
    };
  }, []);
  if (!navShow) {
    setStyle.stop();
    setStyle.start({ opacity: 0, y: -20, pointerEvents: "none" });
  } else {
    setStyle.stop();
    setStyle.start({ opacity: 1, y: 0, pointerEvents: "all" });
  }

  return (
    <NavDiv as={animated.div} style={style}>
      <Logo>
        <div>
          <LogoSpan to="/">J</LogoSpan>
          <LogoSpan to="/">e</LogoSpan>
          <LogoSpan to="/">w</LogoSpan>
          <LogoSpan to="/">e</LogoSpan>
          <LogoSpan to="/">l</LogoSpan>
          <LogoSpan to="/">C</LogoSpan>
          <LogoSpan to="/">h</LogoSpan>
          <LogoSpan to="/">e</LogoSpan>
          <LogoSpan to="/">s</LogoSpan>
          <LogoSpan to="/">t</LogoSpan>
        </div>
      </Logo>
      <NavList>
        <NavListLeft>
          <StyledLink to="/schmuck_produkte">SCHMUCK</StyledLink>
          <StyledLink to="/top_bewertet">TOP BEWERTET</StyledLink>
          <StyledLink to="/all_shops">SHOPS</StyledLink>
          <StyledLink to="/coupons">COUPONS</StyledLink>
          <StyledLink to="/info">ÜBER UNS</StyledLink>
        </NavListLeft>
        <NavListRight>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "15px",
              gap: "15px",
            }}
          >
            <img
              src={contactUs}
              alt="contactUs"
              width="40px"
              height="40px"
              style={{ opacity: 0.7 }}
            />
            <img
              src={likeHeart}
              alt="cart"
              width="40px"
              height="40px"
              style={{ opacity: 0.7 }}
            />
          </div>
          <BorderDiv></BorderDiv>
        </NavListRight>
      </NavList>
    </NavDiv>
  );
}

export default Navbar;
