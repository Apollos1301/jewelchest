import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  width: 100%;
  height: 800px;
  border: 1px solid black;
`;
const Card_inner = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  img {
    width: 950px;
    height: 565px;
    border: 1px solid black;
  }
  h1 {
  }
  h4 {
  }
`;

function MidCards({ img }) {
  return (
    <Card>
      <Card_inner style={{ width: "1100px" }}>
        <img src=""></img>
      </Card_inner>
      <Card_inner style={{ width: "500px" }}>
        <h1>hello</h1>
        <h4>bye bye</h4>
      </Card_inner>
    </Card>
  );
}

export default MidCards;
