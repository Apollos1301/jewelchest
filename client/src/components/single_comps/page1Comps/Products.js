import React from "react";
import styled from "styled-components";
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const StyledDiv = styled.div`
  display: flex;
  width: 80%;
  align-content: flex-start;
  justify-content: space-around;
  float: right;
  height: 2850px;
  right: 0;
  flex-wrap: wrap;
  margin-top: 35px;
`;
////////////////////////////////////////////////////////////////
const MainDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const AddDiv = styled.div`
  width: 220px;
  height: 1450px;
  border: 1px solid black;
  margin-top: 60px;
  margin-left: 10px;
`;

const ProductDiv = styled.div`
  display: flex;
  background-color: white;
  flex-wrap: wrap;
  width: 210px;
  height: 350px;
  border: 0.1px solid black;
  margin-top: 10px;
  align-items: flex-start;
`;
const ProductImage = styled.div`
  display: flex;
  align-items: center;
  width: 210px;
  height: 280px;
  border: 1px solid black;
  img {
    max-width: 80%;
    height: auto;
    left: 0;
    right: 0;
    margin: 0px auto;
  }
`;
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const NextPage = styled.div`
  overflow-y: hidden;
  display: flex;
  justify-content: space-between;
  width: 350px;
  height: 50px;
  border: 1px solid black;
  margin-top: 45px;
  margin-right: 15px;
  float: right;
`;
const NextPageIcons = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  h1 {
    position: absolute;
    text-align: center;
    font-size: 40px;
    top: -5px;
  }
`;
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function Products() {
  return (
    <div>
      <MainDiv>
        <AddDiv></AddDiv>
        <StyledDiv>
          <ProductDiv>
            <ProductImage>
              <img
                src={
                  "https://images-eu.ssl-images-amazon.com/images/I/61Sxu3XttGL.__AC_SY300_SX300_QL70_ML2_.jpg"
                }
                alt=""
              />
            </ProductImage>
          </ProductDiv>
          <ProductDiv>
            <ProductImage>
              <img
                src={
                  "https://images-eu.ssl-images-amazon.com/images/I/61q3C8FoqUL.__AC_SY445_SX342_QL70_ML2_.jpg"
                }
                alt=""
              />
            </ProductImage>
          </ProductDiv>
          <ProductDiv>
            <img src="" alt="" />
          </ProductDiv>
          <ProductDiv>
            <img src="" alt="" />
          </ProductDiv>
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
        </StyledDiv>
      </MainDiv>
      <NextPage>
        <NextPageIcons>
          <button>1</button>
        </NextPageIcons>
        <NextPageIcons>
          <button>2</button>
        </NextPageIcons>
        <NextPageIcons>
          <button>3</button>
        </NextPageIcons>
        <NextPageIcons>
          <h1>...</h1>
        </NextPageIcons>
        <NextPageIcons>
          <button>5</button>
        </NextPageIcons>
      </NextPage>
    </div>
  );
}

export default Products;
