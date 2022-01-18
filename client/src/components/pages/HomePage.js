import React from 'react'
import Navbar from '../single_comps/page1Comps/Navbar'
import SearchBar from '../single_comps/page1Comps/SearchBar'
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
        <SearchBar/>
      </TopDiv>
    </div>
  );
}

export default Home
