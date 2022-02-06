import React from "react";
import styled from "styled-components";
import dropDownImg from "../../imgs/drop_down.png";
import { animated, useSpring, config, useSprings } from "react-spring";
import { easeSinInOut } from "d3-ease";
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
const StyledList = styled.ul`
  display: flex;
  width: 100%;
  height: 250px;
  justify-content: space-between;
  align-items: flex-start;
  list-style-type: none;
`;
const StyledListItems = styled.li`
  cursor: pointer;
`;
const FilterDiv = styled.div`
  width: 100%;
  max-height: 150px;
  display: flex;
  align-items: flex-start;
  gap: 30px;
  border: 1px solid black;
`;
const Filter = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  border: 1px solid red;
`;
const FilterTopic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid black;
  gap: 8px;
  span {
    font-size: 20px;
  }
  img {
    width: 12px;
    height: 10px;
    transform: rotate(180deg);
  }
`;
const FilterOpt = styled.div`
  display: none;
  pointer-events: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 80px;
  border: 1px solid black;
`;
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function SetProducts({ deactProd }) {
  const [dropDown, setDropDown] = useSprings(2, (index) => ({
    transform: "rotate(0deg)",
  }));
  const [showOpt, setShowOpt] = useSprings(2, (index) => ({
    display: "none",
    pointerEvents: "none",
  }));
  return (
    <StyledDiv>
      <StyledList onClick={() => deactProd(1)}>
        <StyledListItems>
          <a href="">a</a>
        </StyledListItems>
        <StyledListItems>
          <a href="">b</a>
        </StyledListItems>
        <StyledListItems>
          <a href="">c</a>
        </StyledListItems>
        <StyledListItems>
          <a href="">d</a>
        </StyledListItems>
      </StyledList>
      <FilterDiv>
        <Filter
          onMouseOver={() => {
            setDropDown.stop();
            setDropDown.start((index) =>
              index == 0
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0deg)" }
            );
            setShowOpt.stop();
            setShowOpt.start((index) =>
              index == 0
                ? { display: "flex", pointerEvents: "all" }
                : { display: "none", pointerEvents: "none" }
            );
          }}
          onMouseOut={() => {
            setDropDown.stop();
            setDropDown.start((index) => ({ transform: "rotate(0deg)" }));
            setShowOpt.stop();
            setShowOpt.start((index) => ({
              display: "none",
              pointerEvents: "none",
            }));
          }}
        >
          <FilterTopic>
            <span>Metall</span>
            <animated.span style={dropDown[0]}>
              <img src={dropDownImg} alt="" />
            </animated.span>
          </FilterTopic>
          <FilterOpt as={animated.div} style={showOpt[0]}>
            <span>Gold</span>
            <span>Silber</span>
            <span>Edelstahl</span>
          </FilterOpt>
        </Filter>
        <Filter
          onMouseOver={() => {
            setDropDown.stop();
            setDropDown.start((index) =>
              index == 1
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0deg)" }
            );
            setShowOpt.stop();
            setShowOpt.start((index) =>
              index == 1
                ? { display: "flex", pointerEvents: "all" }
                : { display: "none", pointerEvents: "none" }
            );
          }}
          onMouseOut={() => {
            setDropDown.stop();
            setDropDown.start((index) => ({ transform: "rotate(0deg)" }));
            setShowOpt.stop();
            setShowOpt.start((index) => ({
              display: "none",
              pointerEvents: "none",
            }));
          }}
        >
          <FilterTopic>
            <span>Metall</span>
            <animated.span style={dropDown[1]}>
              <img src={dropDownImg} alt="" />
            </animated.span>
          </FilterTopic>
          <FilterOpt as={animated.div} style={showOpt[1]}>
            <span>Gold</span>
            <span>Silber</span>
            <span>Edelstahl</span>
          </FilterOpt>
        </Filter>
      </FilterDiv>
    </StyledDiv>
  );
}

export default SetProducts;
