import React from "react";
import styled from "styled-components";

const Menue = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 5vw;
  border: 1px solid black;
`;
const MenueIcons = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

function AppMenue_prods() {
  return (
    <Menue>
      <MenueIcons></MenueIcons>
      <MenueIcons></MenueIcons>
      <MenueIcons></MenueIcons>
      <MenueIcons></MenueIcons>
    </Menue>
  );
}

export default AppMenue_prods;
