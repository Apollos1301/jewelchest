import React from "react";
import styled from "styled-components";
import searchIcon from "../.././imgs/searchIcon.png";
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const SearchBarDiv = styled.div`
  display: flex;
  left: 0;
  right: 0;
  margin: auto;
  width: 70%;
  height: 50px;
  justify-content: stretch;
`;
const SuchInput = styled.input`
  width: 80%;
  border: 1px solid black;
  border-right: none;
  outline: none;
`;
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function SearchBar() {
  return (
    <SearchBarDiv>
      <SuchInput type="text" placeholder=" ... " />
      <img
        src={searchIcon}
        alt="Search"
        style={{
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
          borderRight: "1px solid black",
          cursor: "pointer",
        }}
      />
    </SearchBarDiv>
  );
}

export default SearchBar;
