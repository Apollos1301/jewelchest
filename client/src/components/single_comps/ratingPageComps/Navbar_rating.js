import styled from "styled-components";
import react, { useEffect } from "react";
import cartImg from "../../imgs/shopping-cart.png";
import contactUs from "../../imgs/contactUs.png";
import { Link } from "react-router-dom";
import { animated, useSpring, config } from "react-spring";
import { easeSinInOut } from "d3-ease";
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

const NavDiv = styled.div`
  position: fixed;
  display: flex;
  align-items: left;
  flex-direction: column;
  width: 100%;
  height: 100px;
  margin-top: 20px;
  border-top: 15px outset black;
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
  height: 200px;
  justify-content: space-between;
`;
////////////////////////////////
const NavListLeft = styled.ul`
  display: flex;
  width: 70%;
  height: 45px;
  gap: 5vw;
  background-color: #f8f1f3;
  border-bottom: 1px solid black;
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
  width: 30%;
  background-color: #f8f1f3;
`;
const BorderDiv = styled.div`
  width: 100%;
  height: 25%;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
`;

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function Navbar_rating() {
  const [style, setStyle] = useSpring(() => ({
    opacity: 1,
    y: 0,
    pointerEvents: "all",
    config: { duration: 250, easing: easeSinInOut },
  }));
  const controllNav = () => {
    if (window.scrollY >= 1200) {
      setStyle.stop();
      setStyle.start({ opacity: 0, y: -20, pointerEvents: "none" });
    } else {
      setStyle.stop();
      setStyle.start({ opacity: 1, y: 0, pointerEvents: "all" });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controllNav);
    return () => {
      window.removeEventListener("scroll", controllNav);
    };
  }, []);
  return (
    <NavDiv as={animated.div} style={style}>
      <Logo>
        <LogoSpan to="/">L</LogoSpan>
        <LogoSpan to="/">O</LogoSpan>
        <LogoSpan to="/">G</LogoSpan>
        <LogoSpan to="/">O</LogoSpan>
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
              src={cartImg}
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

export default Navbar_rating;
