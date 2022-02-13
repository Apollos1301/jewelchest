import React, { useRef } from "react";
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
`;
const FilterOptDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 150px;
  background-color: #b3b3b3cc;
  height: 120px;
  border: 1px solid black;
  span {
    color: black;
    :hover {
      color: grey;
      cursor: pointer;
    }
  }
`;
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function SetProducts({ deactProd, filter, filterSet }) {
  const [dropDown, setDropDown] = useSprings(4, (index) => ({
    transform: "rotate(0deg)",
  }));
  const [showOpt, setShowOpt] = useSprings(4, (index) => ({
    display: "none",
    pointerEvents: "none",
  }));
  const conFilter = useRef(filter);
  const filtersetter = (obj, key) => {
    let allprodObj = [];
    //console.log(conFilter.current[obj][key][1]);
    conFilter.current[obj][key][0] = !conFilter.current[obj][key][0];
    conFilter.current.map((item, indexx) => {
      if (indexx == obj) {
        item["lastActive"] = true;
      } else {
        item["lastActive"] = false;
      }
    });
    if (conFilter.current[obj]["all"].length < 1) {
      console.log(conFilter.current[obj]["all"].length);
      //conFilter.current[obj]["lastActive"] = false;
    }
    Object.keys(conFilter.current[obj]).map((objKey, ind) => {
      if (ind > 2) {
        if (conFilter.current[obj][objKey][0] === true) {
          allprodObj.push(conFilter.current[obj][objKey][1]);
        }
      }
    });
    conFilter.current[obj]["all"] = allprodObj.flat();
    //console.log(conFilter.current[obj][key]);
    filterSet(conFilter.current);
  };

  const kategorieKeys = [];
  const materialKeys = [];
  const markenKeys = [];
  const farbenKeys = [];

  Object.keys(filter[0]).map((key, index) => {
    if (index > 2) {
      kategorieKeys.push(key);
    }
  });
  Object.keys(filter[1]).map((key, index) => {
    if (index > 2) {
      markenKeys.push(key);
    }
  });
  Object.keys(filter[2]).map((key, index) => {
    if (index > 2) {
      materialKeys.push(key);
    }
  });
  Object.keys(filter[3]).map((key, index) => {
    if (index > 2) {
      farbenKeys.push(key);
    }
  });
  kategorieKeys.sort(function (a, b) {
    if (a > b) {
      return -1;
    }
    if (b > a) {
      return 1;
    }
    return 0;
  });
  markenKeys.sort(function (a, b) {
    if (a > b) {
      return -1;
    }
    if (b > a) {
      return 1;
    }
    return 0;
  });
  materialKeys.sort(function (a, b) {
    if (a > b) {
      return -1;
    }
    if (b > a) {
      return 1;
    }
    return 0;
  });
  farbenKeys.sort(function (a, b) {
    if (a > b) {
      return -1;
    }
    if (b > a) {
      return 1;
    }
    return 0;
  });
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
                ? { display: "initial", pointerEvents: "all" }
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
            <span>Kategorie</span>
            <animated.span style={dropDown[0]}>
              <img src={dropDownImg} alt="" />
            </animated.span>
          </FilterTopic>
          <FilterOpt as={animated.div} style={showOpt[0]}>
            <FilterOptDiv style={{ gap: "10px" }}>
              {kategorieKeys.map((key, index) => {
                let newKey = key.charAt(0).toUpperCase() + key.slice(1);
                return (
                  <span
                    style={{ fontWeight: filter[0][key][0] ? 700 : 100 }}
                    onClick={() => filtersetter(0, key)}
                  >
                    {newKey} [{filter[0][key][1].length}]
                  </span>
                );
              })}
            </FilterOptDiv>
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
                ? { display: "initial", pointerEvents: "all" }
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
            <span>Marken</span>
            <animated.span style={dropDown[1]}>
              <img src={dropDownImg} alt="" />
            </animated.span>
          </FilterTopic>
          <FilterOpt as={animated.div} style={showOpt[1]}>
            <FilterOptDiv
              style={{ height: "200px", width: "250px", gap: "18px" }}
            >
              {markenKeys.map((key, index) => {
                let newKey = key.charAt(0).toUpperCase() + key.slice(1);
                return (
                  <span
                    style={{ fontWeight: filter[1][key][0] ? 700 : 100 }}
                    onClick={() => filtersetter(1, key)}
                  >
                    {newKey} [{filter[1][key][1].length}]
                  </span>
                );
              })}
            </FilterOptDiv>
          </FilterOpt>
        </Filter>
        <Filter
          onMouseOver={() => {
            setDropDown.stop();
            setDropDown.start((index) =>
              index == 2
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0deg)" }
            );
            setShowOpt.stop();
            setShowOpt.start((index) =>
              index == 2
                ? { display: "initial", pointerEvents: "all" }
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
            <span>Material</span>
            <animated.span style={dropDown[2]}>
              <img src={dropDownImg} alt="" />
            </animated.span>
          </FilterTopic>
          <FilterOpt as={animated.div} style={showOpt[2]}>
            <FilterOptDiv
              style={{ height: "200px", width: "250px", gap: "18px" }}
            >
              {materialKeys.map((key, index) => {
                let newKey = key.charAt(0).toUpperCase() + key.slice(1);
                return (
                  <span
                    style={{ fontWeight: filter[2][key][0] ? 700 : 100 }}
                    onClick={() => filtersetter(2, key)}
                  >
                    {newKey} [{filter[2][key][1].length}]
                  </span>
                );
              })}
            </FilterOptDiv>
          </FilterOpt>
        </Filter>
        <Filter
          onMouseOver={() => {
            setDropDown.stop();
            setDropDown.start((index) =>
              index == 3
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0deg)" }
            );
            setShowOpt.stop();
            setShowOpt.start((index) =>
              index == 3
                ? { display: "initial", pointerEvents: "all" }
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
            <span>Farben</span>
            <animated.span style={dropDown[3]}>
              <img src={dropDownImg} alt="" />
            </animated.span>
          </FilterTopic>
          <FilterOpt as={animated.div} style={showOpt[3]}>
            <FilterOptDiv
              style={{ height: "200px", width: "250px", gap: "18px" }}
            >
              {farbenKeys.map((key, index) => {
                let newKey = key.charAt(0).toUpperCase() + key.slice(1);
                return (
                  <span
                    style={{ fontWeight: filter[3][key][0] ? 700 : 100 }}
                    onClick={() => filtersetter(3, key)}
                  >
                    {newKey} [{filter[3][key][1].length}]
                  </span>
                );
              })}
            </FilterOptDiv>
          </FilterOpt>
        </Filter>
      </FilterDiv>
    </StyledDiv>
  );
}

export default SetProducts;
