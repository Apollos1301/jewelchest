import React from "react";
import cartImg from "../../imgs/shopping-cart.png";
import styled from "styled-components";

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

const NavDiv = styled.div`
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
const LogoSpan = styled.span`
  font-size: 15px;
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
  gap: 100px;
  background-color: #f8f1f3;
  border-bottom: 1px solid black;
  list-style-type: none;
`;
const StyledLink = styled.li`
  font-size: 14px;
  color: black;
  padding-left: 10px;
  margin-top: 18px;
  cursor: pointer;
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
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function Navbar() {
  return (
    <NavDiv>
      <Logo>
        <LogoSpan>L</LogoSpan>
        <LogoSpan>O</LogoSpan>
        <LogoSpan>G</LogoSpan>
        <LogoSpan>O</LogoSpan>
      </Logo>
      <NavList>
        <NavListLeft>
          <StyledLink>NEUHEITEN</StyledLink>

          <StyledLink>TOP BEWERTET</StyledLink>

          <StyledLink>SCHMUCK</StyledLink>

          <StyledLink>SHOPS</StyledLink>

          <StyledLink>ÜBER UNS</StyledLink>
        </NavListLeft>
        <NavListRight>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "15px",
            }}
          >
            <img
              src={cartImg}
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
