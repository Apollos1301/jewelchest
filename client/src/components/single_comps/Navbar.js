import React from "react";
import styled from "styled-components";

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  margin-top: 20px;
  background-color: white;
  border-bottom: 1px solid black;
`;

function Navbar() {
  return (
    <NavDiv>
      <a href="">NEUHEITEN</a>
      <a href="">TOP BEWERTET</a>
      <a href="">SCHMUCK</a>
      <a href="">SHOPS</a>
      <a href="">ÜBER UNS</a>
    </NavDiv>
  );
}

export default Navbar;
