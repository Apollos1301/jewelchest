import React from 'react'
import Navbar from '../single_comps/Navbar'
import styled from "styled-components";

const TopDiv = styled.div`
  width: 100%;
  height: 100vh;
`;
function Home() {
  return (
    <div>
      <TopDiv>
        <Navbar />
      </TopDiv>
    </div>
  );
}

export default Home
