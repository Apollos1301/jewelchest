import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import likeHeart from "../../imgs/likeHeart.png";
import contactUs from "../../imgs/contactUs.png";
import searchIcon from "../../imgs/searchIcon.png";
import { Link } from "react-router-dom";
import { animated, useSpring, config } from "react-spring";
import { easeSinInOut, easeSinIn, easeExpIn } from "d3-ease";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import LikeBar from "./LikeBar";
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

const NavDiv = styled.div`
  position: fixed;
  display: flex;
  align-items: left;
  flex-direction: column;
  width: 100%;
  z-index: 90;
  margin-top: 20px;
  border-top: 15px outset #e5e0e2;
`;
////////////////////////////////////////////////////////////////
const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 5px;
  padding: 6px;
  padding-left: 10px;
  background-color: #fedde6;
`;
const LogoSpan = styled(Link)`
  font-family: "Miama", sans-serif;
  color: black;
  font-size: 85px;
  text-decoration: none;
  list-style-type: none;
`;
////////////////////////////////////////////////////////////////
const NavList = styled.div`
  font-family: "PlayFair", sans-serif;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
////////////////////////////////
const NavListLeft = styled.ul`
  display: flex;
  width: 60%;
  height: 45px;
  gap: 5vw;
  padding-left: 5vw;
  background-color: #fedde6;
  /*
  border-bottom: 1px solid black;*/
  list-style-type: none;
`;
const StyledLink = styled(Link)`
  font-size: 1.2vw;
  font-family: "PlayFair", sans-serif;
  color: black;
  padding-left: 10px;
  margin-top: 12px;
  cursor: pointer;
  text-decoration: none;
  list-style-type: none;
  /*filter: drop-shadow(0px 0px 25px #fee7eb);*/
  @media only screen and (max-width: 500px) {
    font-size: 10px;
  }
  :hover {
    color: rgba(0, 0, 0, 0.45);
  }
`;
////////////////////////////////
const NavListRight = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 40%;
  height: 58px;
`;
const NavListRightSearchBar = styled.div`
  display: flex;
  width: 87%;
  height: 45px;
  background-color: #fedde6;
`;
const Searchimg = styled.img`
  width: 35px;
  height: 35px;
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
`;
const NavlistRightIcons = styled.div`
  display: flex;
  justify-content: center;
  width: 16%;
  height: 58px;
  background-color: #fedde6;
`;
const BorderDiv = styled.div`
  width: 100%;
  height: 25%;
  /*border-left: 1px solid black;
  border-bottom: 1px solid black;*/
`;
const SearchedLink = styled(Link)`
  color: white;
  cursor: pointer;
  text-decoration: none;
  list-style-type: none;
`;
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function Navbar_produkte({
  passProd,
  allprods_display,
  likeList,
  setList,
  setListUpdater,
}) {
  const [setOn, setSetOn] = useState(false);
  const searchSetter = useRef(false);
  const searchedProds = useRef();
  //console.log(searchedProds.current);
  const { height, width } = useWindowDimensions();
  const [inputText, setInput] = useState("");
  const prodSearcher = () => {
    var word = inputText.toLowerCase();
    var newList = [];
    var currenList = allprods_display.flat();
    currenList.map((prod, index) => {
      let prodName = "";
      let prodKeywords = "";
      if (prod.product_name != null) {
        prodName = prod.product_name.toLowerCase();
        if (prodName.search(word) != -1) {
          //console.log(prod.product_name.search(inputText));
          newList.push(prod);
        } else if (prod.product_keywords != null) {
          prodKeywords = prod.product_keywords.toLowerCase();
          if (prodKeywords.search(word) != -1) {
            //console.log(prod.product_keywords.search(inputText));
            newList.push(prod);
          }
        }
      } else if (prod.product_keywords != null) {
        prodKeywords = prod.product_keywords.toLowerCase();
        if (prodKeywords.search(word) != -1) {
          //console.log(prod.product_keywords.search(inputText));
          newList.push(prod);
        }
      }
    });
    return newList;
  };
  searchedProds.current = prodSearcher();
  const [searchAnim, setSearchAnim] = useSpring(() => ({
    position: "absolute",
    display: "flex",
    top: "145px",
    left: "63vw",
    width: "7vw",
    height: "40px",
    opacity: "1",
    transform: "scale(1)",
    pointerEvents: "all",
    config: { duration: 500, easing: easeSinIn },
  }));
  const searchInput = useRef();
  const searchInputDiv = useRef();
  const [navShow, setNavShow] = useState(true);
  const [heartStyle, setHeartStyle] = useSpring(() => ({
    opacity: 0.7,
    cursor: "pointer",
    width: "2vw",
    height: "2vw",
    zIndex: 90,
    transform: "scale(1)",
  }));
  const [style, setStyle] = useSpring(() => ({
    opacity: 1,
    y: 0,
    pointerEvents: "all",
    config: { duration: 250, easing: easeSinInOut },
  }));
  const controllNav = () => {
    if (window.scrollY >= 1200) {
      setNavShow(false);
      searchSetter.current = false;
      setInput("");
    } else {
      setNavShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controllNav);
    return () => {
      window.removeEventListener("scroll", controllNav);
    };
  }, []);
  if (!navShow) {
    setStyle.stop();
    setStyle.start({ opacity: 0, y: -20, pointerEvents: "none" });
  } else {
    setStyle.stop();
    setStyle.start({ opacity: 1, y: 0, pointerEvents: "all" });
  }
  useEffect(() => {
    if (searchSetter.current) {
      setSearchAnim.stop();
      setSearchAnim.start({
        from: {
          x: 0,
          y: 0,
          transform: "scale(1)",
        },
        to: {
          x:
            -(width / 2 - searchInputDiv.current.offsetTop) +
            searchInputDiv.current.offsetWidth / 2,
          y:
            height / 3 -
            searchInputDiv.current.offsetTop -
            searchInputDiv.current.offsetHeight / 2,
          transform: "scale(2.6)",
        },
      });
    } else {
      setSearchAnim.stop();
      setSearchAnim.start({
        position: "absolute",
        width: "700px",
        height: "40px",
        opacity: "1",
        y: 0,
        x: 0,

        transform: "scale(1)",
        pointerEvents: "all",
      });
    }
  }, [searchSetter.current]);
  //console.log(searchInputDiv.current.offsetTop);
  return (
    <NavDiv as={animated.div} style={style}>
      <div
        style={{
          position: "absolute",
          pointerEvents: searchSetter.current ? "all" : "none",
          zIndex: 1,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: searchSetter.current ? "#0000007d" : "transparent",
        }}
      >
        <animated.div style={searchAnim} ref={searchInputDiv}>
          <textarea
            name="searchProd"
            cols="40"
            rows="1"
            ref={searchInput}
            value={inputText}
            style={{
              width: "25vw",
              height: "90%",
              resize: "none",
              backgroundColor: "#ffffff99",
              fontSize: "22px",
              fontFamily: "PlayFair, sans-serif",
              paddingLeft: " 10px",
              outline: "none",
            }}
            resize="false"
            spellcheck="false"
            placeholder="search..."
            onChange={(inp) => {
              setInput(inp.target.value);
              if (inp.target.value.length > 1) {
                searchSetter.current = true;
              } else if (inp.target.value.length == 0) {
                searchSetter.current = false;
              }
            }}
          />
          <Searchimg
            src={searchIcon}
            alt="icon"
            onClick={() => {
              searchInput.current.focus();
              console.log("click");
            }}
          />
        </animated.div>
        <div
          style={{
            position: "absolute",
            pointerEvents: searchSetter.current ? "all" : "none",
            visibility: searchSetter.current ? "visible" : "hidden",
            width: "100%",
            maxHeight: "540px",
            top: "40vh",
            border: "1px solid black",
            zIndex: 99,
            color: "white",
            backgroundColor: "#febecfed",
          }}
        >
          <div
            style={{
              width: "90%",
              overflowY: "Scroll",
              maxHeight: "540px",
              paddingleft: "20vw",
            }}
          >
            <div
              style={{
                width: "60%",
                height: "120px",
                border: "1px solid black",
                marginLeft: "20vw",
                marginTop: "10px",
                paddingTop: "40px",
                textAlign: "center",
              }}
            >
              <SearchedLink
                to="/products/search"
                onClick={() => {
                  passProd([searchedProds.current, null, inputText]);
                  setInput("");
                  searchSetter.current = false;
                }}
              >
                <h1 style={{ fontSize: "2.5vw", fontWeight: "100" }}>
                  {" > > "}Alle Produkte mit{" "}
                  <span style={{ fontSize: "3.5vw", fontWeight: "700" }}>
                    "{inputText}"
                  </span>
                </h1>
              </SearchedLink>
            </div>
            {searchedProds.current.map((prod, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingleft: "20vw",
                  }}
                >
                  <SearchedLink
                    to="/products/search"
                    onClick={() => {
                      passProd([searchedProds.current, prod, inputText]);
                      setInput("");
                      searchSetter.current = false;
                    }}
                  >
                    <div
                      style={{
                        width: "300px",
                        backgroundColor: "white",
                        border: "1px solid black",
                        marginLeft: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <img
                        src={prod.product_image}
                        alt="xProduct Imagex"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          maxHeight: "100%",
                          margin: " auto auto",
                        }}
                      />
                    </div>
                  </SearchedLink>
                  <SearchedLink
                    to="/products/search"
                    onClick={() => {
                      passProd([searchedProds.current, prod, inputText]);
                      setInput("");
                      searchSetter.current = false;
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "650px",
                        border: "1px solid black",
                        borderLeft: "none",
                        marginTop: "10px",
                      }}
                    >
                      <h1>{prod.product_name}</h1>
                      <span style={{ fontSize: "22px" }}>
                        {prod.product_keywords}
                      </span>
                      <div style={{ opacity: 0.65 }}>{prod.product_root}</div>
                      <span
                        style={{
                          fontSize: "30px",
                          fontFamily: "serif",
                          fontWeight: "bold",
                          alignSelf: "flex-end",
                        }}
                      >
                        {prod.product_price.replace(",", ".")}€
                      </span>
                    </div>
                  </SearchedLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Logo>
        <div>
          <LogoSpan to="/">J</LogoSpan>
          <LogoSpan to="/">e</LogoSpan>
          <LogoSpan to="/">w</LogoSpan>
          <LogoSpan to="/">e</LogoSpan>
          <LogoSpan to="/">l</LogoSpan>
          <LogoSpan to="/">C</LogoSpan>
          <LogoSpan to="/">h</LogoSpan>
          <LogoSpan to="/">e</LogoSpan>
          <LogoSpan to="/">s</LogoSpan>
          <LogoSpan to="/">t</LogoSpan>
        </div>
      </Logo>
      <NavList>
        <NavListLeft>
          <StyledLink to="/schmuck_produkte">SCHMUCK</StyledLink>
          <StyledLink to="/top_bewertet">TOP BEWERTET</StyledLink>
          <StyledLink to="/all_shops">SHOPS</StyledLink>
          <StyledLink to="/coupons">COUPONS</StyledLink>
          <StyledLink to="/info">ÜBER UNS</StyledLink>
        </NavListLeft>
        <NavListRight>
          <NavListRightSearchBar />
          <NavlistRightIcons>
            <div
              style={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                paddingRight: "10px",
                gap: ".8vw",
              }}
            >
              <animated.img
                src={likeHeart}
                alt="cart"
                style={heartStyle}
                onClick={() => {
                  setSetOn(true);
                }}
                onMouseOver={() => {
                  setHeartStyle.stop();
                  setHeartStyle.start({ transform: "scale(1.3)" });
                }}
                onMouseOut={() => {
                  setHeartStyle.stop();
                  setHeartStyle.start({ transform: "scale(1)" });
                }}
              />
              {/*<img
                src={contactUs}
                alt="contactUs"
                style={{
                  opacity: 0.7,
                  cursor: "pointer",
                  width: "2vw",
                  height: "2vw",
                  zIndex: 90,
                }}
              />*/}
            </div>
          </NavlistRightIcons>
        </NavListRight>
      </NavList>
      <LikeBar
        setOn={setOn}
        setSideLike={() => {
          setSetOn(false);
        }}
        likeList={likeList}
        setList={setList}
        setListUpdater={setListUpdater}
      />
    </NavDiv>
  );
}

export default Navbar_produkte;
