import React from "react";
import styled from "styled-components";
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const StyledDiv = styled.div`
  width: 90%;
  height: 80px;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 20px;
  border: 1px solid black;
`;
const StyledList = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`;
const StyledListItems = styled.li`
  cursor: pointer;
`;
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function SetProducts() {
  return (
    <StyledDiv>
      <StyledList>
        <StyledListItems>
          <a href="#">a</a>
        </StyledListItems>
        <StyledListItems>
          <a href="#">b</a>
        </StyledListItems>
        <StyledListItems>
          <a href="#">c</a>
        </StyledListItems>
        <StyledListItems>
          <a href="#">d</a>
        </StyledListItems>
      </StyledList>
    </StyledDiv>
  );
}

export default SetProducts;
