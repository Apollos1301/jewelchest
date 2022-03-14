import styled from "styled-components";
import Navbar_produkte from "../single_comps/produktePageComps/Navbar_produkte";
import SearchBar from "../single_comps/produktePageComps/SearchBar";
import SetProducts from "../single_comps/produktePageComps/SetProducts";
import Products from "../single_comps/produktePageComps/Products";
import MidCards from "../single_comps/produktePageComps/MidCards";
import { useRef, useState, useEffect } from "react";

const TopDiv = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;
`;
const MidDiv1 = styled.div`
  width: 100%;
  margin-top: 10px;
`;
const MidDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1600px;
  height: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 550px;

  border: 1px solid black;
`;
const FootDiv = styled.div`
  margin-top: 140px;
  width: 100%;
  height: 300px;
`;
function ProduktePage({ allprods_display, deactProd }) {
  const [allprods, setAllProds] = useState(allprods_display);
  const filterDeleteList = useRef();
  var [filter, setFilter] = useState([
    filterKategorie(allprods.flat()),
    filterMarke(allprods.flat()),
    filterMaterial(allprods.flat()),
    filterFarbe(allprods.flat()),
  ]);
  const filterSetts = useRef([]);
  const filterlist = useRef([[filter, 999, "X"]]);
  const prodlist = useRef([allprods.flat()]);
  ////////////////////////////////////////////////////////////////
  useEffect(() => {
    filterDeleteList.current = [];
    setFilter([
      filterKategorie(allprods_display.flat()),
      filterMarke(allprods_display.flat()),
      filterMaterial(allprods_display.flat()),
      filterFarbe(allprods_display.flat()),
    ]);
    filterlist.current = [[filter, 999, "X"]];
    prodlist.current = [allprods.flat()];
    setAllProds([...allprods_display]);
  }, [allprods_display]);
  ////////////////////////////////////////////////////////////////
  const newFilter = (filter, n, m, setter, prods) => {
    filterSetts.current = [n, m, setter, prods];
    console.log(prods);
    if (prods.length > 0) {
      if (filterSetts.current[2]) {
        let newFilt = addFilter(filterSetts.current);
        filterDeleteList.current = [];
        newFilt[0][0].map((item, index) => {
          if (index > 0) {
            filterDeleteList.current.push(item);
          }
        });
        let size = 25;
        let newProds = [];
        for (
          var i = 0;
          i < newFilt[1][0][newFilt[1][1] - 1].length;
          i += size
        ) {
          newProds.push(newFilt[1][0][newFilt[1][1] - 1].slice(i, i + size));
        }
        setAllProds([...newProds]);
        setFilter([...newFilt[0][0][newFilt[0][1] - 1][0]]);
      } else {
        let newFilt = deleteFilter(filterSetts.current);
        filterDeleteList.current = [];
        newFilt[0][0].map((item, index) => {
          if (index > 0) {
            filterDeleteList.current.push(item);
          }
        });

        let size = 25;
        let newProds = [];
        for (
          var i = 0;
          i < newFilt[1][0][newFilt[1][1] - 1].length;
          i += size
        ) {
          newProds.push(newFilt[1][0][newFilt[1][1] - 1].slice(i, i + size));
        }
        setAllProds([...newProds]);
        setFilter([...newFilt[0][0][newFilt[0][1] - 1][0]]);
        //console.log(filterDeleteList.current);
        //console.log(newFilt[0][0]);
      }
    } else {
      window.alert("no products");
    }
  };
  const addFilter = (filtersetts) => {
    let length1 = filterlist.current.length;
    let length2 = prodlist.current.length;
    let allprds = [];
    if (filtersetts[0] == filterlist.current[length1 - 1][1]) {
      allprds = filtersetts[3].concat(prodlist.current[length2 - 1]);
    } else {
      allprds = filtersetts[3];
    }
    prodlist.current.push(allprds);

    filterlist.current.push([
      except(
        filtersetts[0],
        prodlist.current[length2],
        filterlist.current[length1 - 1][0]
      ),
      filtersetts[0],
      filtersetts[1],
    ]);
    if (filterlist.current.length > 1) {
      for (let i = 1; i < filterlist.current.length; i++) {
        for (
          let j = 0;
          j < filterlist.current[i][0][filterlist.current[i][1]].length;
          j++
        ) {
          if (
            filterlist.current[i][2] ==
            filterlist.current[i][0][filterlist.current[i][1]][j][0]
          ) {
            filterlist.current[length1][0][filterlist.current[i][1]][
              j
            ][2] = true;
          }
        }
      }
    }
    //console.log(filterlist.current);
    // console.log(prodlist.current);
    let endarr = [
      [filterlist.current, filterlist.current.length],
      [prodlist.current, prodlist.current.length],
    ];
    return endarr;
  };
  const deleteFilter = (filtersetts) => {
    let length1 = filterlist.current.length;
    let length2 = prodlist.current.length;
    let allprds = [];
    let ind;
    for (let i = 0; i < length1; i++) {
      if (filterlist.current[i][2] == filtersetts[1]) {
        ind = i;
      }
    }
    filterlist.current.splice(ind, 1);
    prodlist.current.splice(ind, 1);

    for (let i = 1; i < filterlist.current.length; i++) {
      allprds = [];
      let currentProd = [filterlist.current[i][1], filterlist.current[i][2]];
      for (
        let j = 0;
        j < filterlist.current[i - 1][0][currentProd[0]].length;
        j++
      ) {
        if (
          filterlist.current[i - 1][0][currentProd[0]][j][0] == currentProd[1]
        ) {
          if (currentProd[0] == filterlist.current[i - 1][1]) {
            allprds = prodlist.current[i - 1].concat(
              filterlist.current[i - 1][0][currentProd[0]][j][1]
            );
          } else {
            allprds = filterlist.current[i - 1][0][currentProd[0]][j][1];
          }
        }
      }
      prodlist.current[i] = allprds;
      filterlist.current[i][0] = except(
        filterlist.current[i][1],
        prodlist.current[i],
        filterlist.current[i - 1][0]
      );
    }

    if (filterlist.current.length > 1) {
      for (let a = 1; a < filterlist.current.length; a++) {
        for (
          let b = 0;
          b < filterlist.current[a][0][filterlist.current[a][1]].length;
          b++
        ) {
          if (
            filterlist.current[a][2] ==
            filterlist.current[a][0][filterlist.current[a][1]][b][0]
          ) {
            filterlist.current[filterlist.current.length - 1][0][
              filterlist.current[a][1]
            ][b][2] = true;
          }
        }
      }
    }
    let endarr = [
      [filterlist.current, filterlist.current.length],
      [prodlist.current, prodlist.current.length],
    ];
    //console.log(filterlist.current);
    //console.log(prodlist.current);
    return endarr;
  };
  //console.log(allprods);
  return (
    <div style={{ overflowY: "hidden" }}>
      <TopDiv>
        <Navbar_produkte />
      </TopDiv>
      <MidDiv1>
        <SetProducts
          deactProd={deactProd}
          filter={filter}
          setFilter={newFilter}
          deleteList={filterDeleteList.current}
          filterlist={filterlist.current}
        />
        <Products
          allprods_display={allprods}
          filter={filter}
          filterSetts={filterSetts.current}
        />
      </MidDiv1>
      <MidDiv2>
        <MidCards />
      </MidDiv2>
      <FootDiv></FootDiv>
    </div>
  );
}
export default ProduktePage;
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
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
  let prod = [...lastprods];
  let endprods = [...neuProds];
  let check = false;
  for (let i = 0; i < prod.length; i++) {
    for (let j = 0; j < prod[i].length; j++) {
      check = false;
      for (let k = 0; k < neuProds[i].length; k++) {
        if (prod[i][j][0] == neuProds[i][k][0]) {
          check = true;
        }
      }
      if (check !== true) {
        let a = [...prod[i][j]];
        a[1] = [];
        endprods[i].push(a);
      }
    }
  }
  //console.log(neuProds);
  //console.log(endprods);
  return endprods;
};

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const filterKategorie = (prods) => {
  let filter = [];
  let uniq = [];
  let endArr = [];
  uniq = ["Armband", "Creole", "Damenring", "Kette", "Ohrring", "Ohrstecker"];
  endArr = [];
  uniq.map((item, index) => {
    prods.map((prct, ind) => {
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
  let filter = [];
  let uniq = [];
  let endArr = [];
  let markenArr = [];
  prods.map((prod, ind) => {
    if (prod.product_marke != null) {
      markenArr.push(prod.product_marke.toLowerCase());
    }
  });
  uniq = [...new Set(markenArr)];

  uniq.map((item, index) => {
    prods.map((prct, ind) => {
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
  let filter = [];
  let uniq = [];
  let endArr = [];
  let materialArr = [];
  prods.map((prod, ind) => {
    if (prod.product_material != null) {
      materialArr.push(prod.product_material.toLowerCase());
    }
  });
  uniq = [...new Set(materialArr)];

  uniq.map((item, index) => {
    prods.map((prct, ind) => {
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
  let filter = [];
  let uniq = [];
  let endArr = [];
  let farbenArr = [];
  prods.map((prod, ind) => {
    if (prod.product_farbe != null) {
      farbenArr.push(prod.product_farbe.toLowerCase());
    }
  });
  uniq = [...new Set(farbenArr)];

  uniq.map((item, index) => {
    prods.map((prct, ind) => {
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
