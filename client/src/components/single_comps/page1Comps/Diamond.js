import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

function Diamond(props) {
  const TopPic = styled.div`
    height: 600px;
    width: 100%;
    border: 5px solid black;
    margin-top: 105px;
  `;
  return (
    <TopPic>
      {/*<Canvas>
        <Suspense fallback={null}></Suspense>
      </Canvas>*/}
    </TopPic>
  );
}

export default Diamond;
