import React, { useEffect, useState } from "react";
import styled from "styled-components";
import likeHeart from "../../../imgs/likeHeart.png";
import contactUs from "../../../imgs/contactUs.png";
import menueImg from "../../../imgs/menu.png";
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
  border-top: 10px outset black;
  border-bottom: 1px solid black;
`;
////////////////////////////////////////////////////////////////
const Logo = styled.div`
  display: flex;
  gap: 5px;
  padding: 6px;
  padding-left: 10px;
  background-color: #f8f1f3;
`;
const LogoSpan = styled(Link)`
  font-size: 15px;
  text-decoration: none;
  list-style-type: none;
`;
////////////////////////////////////////////////////////////////
const NavList = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  padding-top: 8px;
  justify-content: space-between;
  background-color: #f8f1f3;
`;
////////////////////////////////
const NavListLeft = styled.ul`
  display: flex;
  padding-top: 3px;
  width: 70%;
  gap: 5vw;
  margin-left: 10px;
  list-style-type: none;
`;
const StyledLink = styled(Link)`
  font-size: 20px;
  color: black;
  padding-left: 20px;
  cursor: pointer;
  text-decoration: none;
  list-style-type: none;
  /*filter: drop-shadow(0px 0px 25px #fee7eb);*/
  /*@media only screen and (max-width: 500px) {
    font-size: 10px;
  }*/
  :hover {
    color: rgba(0, 0, 0, 0.45);
  }
`;

////////////////////////////////
const NavListRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
`;
const DropDown = styled.div`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  opacity: 0.85;
  gap: 30px;
  height: 250px;
  width: 100%;
  background-color: #d4d4d4;
`;
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function Navbar_rating() {
  const [menueOn, setMenueOn] = useState(false);
  const [navShow, setNavShow] = useState(true);
  const [menueAni, setMenueAni] = useSpring(() => ({
    opacity: 0.7,
    cursor: "pointer",
    transform: "rotate(0deg)",
  }));
  const [dropdown, setDropdown] = useSpring(() => ({
    pointerEvents: "none",
    height: "0px",
    paddingTop: "0px",
  }));
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
  const menueClick = () => {
    if (menueOn) {
      setMenueAni.stop();
      setMenueAni.start({ transform: "rotate(0deg)" });
      setDropdown.stop();
      setDropdown.start({
        height: "0px",
        paddingTop: "0px",
        pointerEvents: "none",
        config: { duration: 500, easing: easeSinInOut },
      });
    } else {
      setMenueAni.stop();
      setMenueAni.start({ transform: "rotate(90deg)" });
      setDropdown.stop();
      setDropdown.start({
        pointerEvents: "all",
        height: "250px",
        paddingTop: "15px",
        config: { duration: 500, easing: easeSinInOut },
      });
    }
  };
  return (
    <NavDiv as={animated.div} style={style}>
      <NavList>
        <NavListLeft>
          <animated.img
            src={menueImg}
            alt="Menue"
            width="45px"
            height="35px"
            style={menueAni}
            onClick={() => {
              setMenueOn(!menueOn);
              menueClick();
            }}
          />
          <Logo>
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
          </Logo>
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
        </NavListRight>
      </NavList>
      <DropDown as={animated.div} style={dropdown}>
        <div style={{ height: "20px" }}>
          <StyledLink to="/schmuck_produkte">SCHMUCK</StyledLink>
        </div>
        <div style={{ height: "20px" }}>
          <StyledLink to="/top_bewertet">TOP BEWERTET</StyledLink>
        </div>
        <div style={{ height: "20px" }}>
          <StyledLink to="/all_shops">SHOPS</StyledLink>
        </div>
        <div style={{ height: "20px" }}>
          <StyledLink to="/coupons">COUPONS</StyledLink>
        </div>
        <div style={{ height: "20px" }}>
          <StyledLink to="/info">ÜBER UNS</StyledLink>
        </div>
      </DropDown>
    </NavDiv>
  );
}

export default Navbar_rating;

