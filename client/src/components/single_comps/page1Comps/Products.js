import React from "react";
import styled from "styled-components";
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 8px;
  img {
    width: 200px;
    height: 100px;
    margin-top: 5px;
  }
`;
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function Products() {
  return (
    <StyledDiv>
      <img
        src={
          "https://images-eu.ssl-images-amazon.com/images/I/61Sxu3XttGL.__AC_SY300_SX300_QL70_ML2_.jpg"
        }
        alt=""
      />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
    </StyledDiv>
  );
}

export default Products;
