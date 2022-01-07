import React from "react";
import styled from "styled-components";

const NavDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  margin-top: 20px;
  background-color: #f8f1f3;
  border-bottom: 1px solid black;
`;
const StyledLink = styled.a`
  background-color: #fee7ea6e;
  font-size: 20px;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.47);
  padding: 8px;
  filter: drop-shadow(0px 0px 25px #fee7eb);
  text-decoration: none;
  @media only screen and (max-width: 500px) {
    font-size: 10px;
  }
  :hover {
    color: rgba(0, 0, 0, 0.47);
  }
`;

function Navbar() {
  return (
    <NavDiv>
      <StyledLink href="">NEUHEITEN</StyledLink>
      <StyledLink href="">TOP BEWERTET</StyledLink>
      <StyledLink href="">SCHMUCK</StyledLink>
      <StyledLink href="">SHOPS</StyledLink>
      <StyledLink href="">ÜBER UNS</StyledLink>
    </NavDiv>
  );
}

export default Navbar;
