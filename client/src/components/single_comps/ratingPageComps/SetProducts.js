import React from "react";
import styled from "styled-components";
import amazonLogo from "../../imgs/amazonLogo.jpg";
import christLogo from "../../imgs/christLogo.png";
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const StyledDiv = styled.div`
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
  justify-content: center;
  gap: 20px;
  align-items: center;
  list-style-type: none;
`;
const StyledListItems = styled.div`
  width: 165px;
  height: 80px;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
`;
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function SetProducts({ deactProd, shopList }) {
  return (
    <StyledDiv>
      <StyledList>
        <StyledListItems>
          <img
            src={amazonLogo}
            alt="Amazon"
            onClick={() => deactProd(1)}
            style={{ opacity: shopList[0]["enabled"] ? "1" : "0.3" }}
          />
        </StyledListItems>
        <StyledListItems>
          <img
            src={christLogo}
            alt="Christ"
            onClick={() => deactProd(2)}
            style={{ opacity: shopList[1]["enabled"] ? "1" : "0.3" }}
          />
        </StyledListItems>
      </StyledList>
    </StyledDiv>
  );
}

export default SetProducts;
