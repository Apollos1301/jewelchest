import React from "react";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import SingleProd from "./SingleProd";
import amazon_produkte from "../../products/amazon_produkte.json";
import christ_produkte from "../../products/christ_produkte.json";

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  align-content: flex-start;
  justify-content: space-around;
  gap: 35px;
  float: right;
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
  width: 100%;
  height: 450px;
  border: 1px solid black;
  margin-top: 60px;

  @media only screen and (max-width: 420px) {
    pointer-events: none;
    display: none;
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
  margin-top: 10px;
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
function Products({ allprods_display, filter, filterSetts, changer }) {
  const [prodPage, setProdPage] = useState(0);

  
  return (
    <div>
      <AddDiv />
      <NextPage>
        <NextPageIcons>
          <button onClick={() => setProdPage(0)}>1</button>
        </NextPageIcons>
        <NextPageIcons>
          <button onClick={() => setProdPage(1)}>2</button>
        </NextPageIcons>
        <NextPageIcons>
          <button onClick={() => setProdPage(2)}>3</button>
        </NextPageIcons>
        <NextPageIcons>
          <h1>...</h1>
        </NextPageIcons>
        <NextPageIcons>
          <button>{allprods_display.length}</button>
        </NextPageIcons>
      </NextPage>
      <MainDiv>
        <StyledDiv>
          {allprods_display[prodPage].map((prod, index) => (
            <a href={prod.product_link}>
              <SingleProd
                key={index}
                id={index}
                imgRes={prod.product_image_res[1]}
                produkt={prod}
              />
            </a>
          ))}
        </StyledDiv>
      </MainDiv>
    </div>
  );
}

export default Products;

const except = (out, prods, lastprods) => {
  let neuProds = [];
  switch (out) {
    case 0:
      neuProds = [
        lastprods[0],
        filterMarke(prods),
        filterMaterial(prods),
        filterFarbe(prods),
      ];
      break;
    case 1:
      neuProds = [
        filterKategorie(prods),
        lastprods[1],
        filterMaterial(prods),
        filterFarbe(prods),
      ];
      break;
    case 2:
      neuProds = [
        filterKategorie(prods),
        filterMarke(prods),
        lastprods[2],
        filterFarbe(prods),
      ];
      break;
    case 3:
      neuProds = [
        filterKategorie(prods),
        filterMarke(prods),
        filterMaterial(prods),
        lastprods[3],
      ];
      break;
  }
  var outputArr = lastprods;
  var check = false;
  for (let i = 0; i < outputArr.length; i++) {
    for (let j = 0; j < outputArr[i].length; j++) {
      check = false;
      for (let k = 0; k < neuProds[i].length; k++) {
        if (outputArr[i][j][0] == neuProds[i][k][0]) {
          outputArr[i][j][1] = neuProds[i][k][1];
          check = true;
        }
      }
      if (check == false) {
        outputArr[i][j][1] = [];
      }
    }
  }
  return outputArr;
};

const filterKategorie = (prods) => {
  var flatprods = prods.flat();
  let filter = [];
  let uniq = [];
  let endArr = [];
  uniq = ["Ohrring", "Ohrstecker", "Kette", "Ring", "Armband", "Creole"];
  endArr = [];
  uniq.map((item, index) => {
    flatprods.map((prct, ind) => {
      if (prct.product_keywords != null) {
        let prodKategorie = prct.product_keywords.toLowerCase();
        let savedKategorie = item.toLowerCase();
        if (prodKategorie.search(savedKategorie) != -1) {
          endArr.push(prct);
        }
      }
    });
    filter.push([item, endArr, false]);
    endArr = [];
  });
  return filter;
};
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

const filterMarke = (prods) => {
  var flatprods = prods.flat();
  let filter = [];
  let uniq = [];
  let endArr = [];
  let markenArr = [];
  flatprods.map((prod, ind) => {
    if (prod.product_marke != null) {
      markenArr.push(prod.product_marke.toLowerCase());
    }
  });
  uniq = [...new Set(markenArr)];

  uniq.map((item, index) => {
    flatprods.map((prct, ind) => {
      if (prct.product_marke != null) {
        let prodMarke = prct.product_marke.toLowerCase();
        let savedMarke = item.toLowerCase();
        if (prodMarke.search(savedMarke) != -1) {
          endArr.push(prct);
        }
      }
    });
    filter.push([item, endArr, false]);
    endArr = [];
  });
  return filter;
};
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const filterMaterial = (prods) => {
  var flatprods = prods.flat();
  let filter = [];
  let uniq = [];
  let endArr = [];
  let materialArr = [];
  flatprods.map((prod, ind) => {
    if (prod.product_material != null) {
      materialArr.push(prod.product_material.toLowerCase());
    }
  });
  uniq = [...new Set(materialArr)];

  uniq.map((item, index) => {
    flatprods.map((prct, ind) => {
      if (prct.product_material != null) {
        let prodMaterial = prct.product_material.toLowerCase();
        let savedMaterial = item.toLowerCase();
        if (prodMaterial.search(savedMaterial) != -1) {
          endArr.push(prct);
        }
      }
    });
    filter.push([item, endArr, false]);
    endArr = [];
  });
  return filter;
};
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const filterFarbe = (prods) => {
  var flatprods = prods.flat();
  let filter = [];
  let uniq = [];
  let endArr = [];
  let farbenArr = [];
  flatprods.map((prod, ind) => {
    if (prod.product_farbe != null) {
      farbenArr.push(prod.product_farbe.toLowerCase());
    }
  });
  uniq = [...new Set(farbenArr)];

  uniq.map((item, index) => {
    flatprods.map((prct, ind) => {
      if (prct.product_farbe != null) {
        let prodFarbe = prct.product_farbe.toLowerCase();
        let savedFarbe = item.toLowerCase();
        if (prodFarbe.search(savedFarbe) != -1) {
          endArr.push(prct);
        }
      }
    });
    filter.push([item, endArr, false]);
    endArr = [];
  });
  return filter;
};
