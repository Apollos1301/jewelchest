import React from "react";
import styled from "styled-components";

const Menue = styled.div`
  display: flex;
  width: 85%;
  height: 500px;
  gap: 10%;
  border: 1px solid black;
`;
const MenueIcons = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid black;
`;

function Menue_prods() {
  return (
    <Menue>
      <MenueIcons></MenueIcons>
      <MenueIcons></MenueIcons>
      <MenueIcons></MenueIcons>
      <MenueIcons></MenueIcons>
    </Menue>
  );
}

export default Menue_prods;
