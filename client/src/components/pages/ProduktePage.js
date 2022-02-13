import styled from "styled-components";
import Navbar_produkte from "../single_comps/produktePageComps/Navbar_produkte";
import SearchBar from "../single_comps/produktePageComps/SearchBar";
import SetProducts from "../single_comps/produktePageComps/SetProducts";
import Products from "../single_comps/produktePageComps/Products";
import MidCards from "../single_comps/produktePageComps/MidCards";
import { useRef, useState } from "react";

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
  const [filter, setFilter] = useState(getFilter(allprods_display));
  const filterSetter = (setter) => {
    // console.log(setter)

    setFilter([...setter]);
  };
  /*const toFindDuplicates = (arry) =>
    arry.filter((item, index) => arry.indexOf(item) !== index);
  const duplicateElementa = toFindDuplicates(filterProds);
  console.log(duplicateElementa);*/
  //console.log(counter)
  var allprods = allprods_display;
  const [searchChar, setSearchTextChar] = useState("");
  const searcher = useRef(false);
  var new_prods = useRef([]);
  var past_prods = allprods_display;
  past_prods = past_prods.flat();

  function searchText(text) {
    setSearchTextChar(text);
    if (text) {
      searcher.current = true;
    } else {
      searcher.current = false;
      allprods = allprods_display;
    }
  }
  if (searcher.current) {
    var prods = [];
    new_prods.current = [];
    for (var i = 0; i < past_prods.length; i++) {
      var obj_text = past_prods[i].product_keywords.toString();
      obj_text = obj_text.toLowerCase();
      var text_ = searchChar.toString();
      text_ = text_.toLowerCase();
      if (obj_text.search(text_) != -1) {
        new_prods.current.push(past_prods[i]);
      }
    }

    var size = 25;
    for (var i = 0; i < new_prods.current.length; i += size) {
      prods.push(new_prods.current.slice(i, i + size));
    }
    if (prods.length > 0) {
      allprods = prods;
    } else {
      allprods = allprods_display;
      console.log("error nothing found");
    }
  }
  console.log(filter);

  return (
    <div style={{ overflowY: "hidden" }}>
      <TopDiv>
        <Navbar_produkte />
      </TopDiv>
      <MidDiv1>
        <SearchBar searchOn={searchText} />
        <SetProducts
          deactProd={deactProd}
          filter={filter}
          filterSet={filterSetter}
        />
        <Products allprods_display={allprods} filter={filter} />
      </MidDiv1>
      <MidDiv2>
        <MidCards />
      </MidDiv2>
      s<FootDiv></FootDiv>
    </div>
  );
}

export default ProduktePage;

const getFilter = (allprods_display) => {
  var arr = allprods_display;
  arr = arr.flat();
  var filterArr = [
    { filter: "kategorie", all: [], lastActive: false },
    { filter: "marke", all: [], lastActive: false },
    { filter: "material", all: [], lastActive: false },
    { filter: "farbe", all: [], lastActive: false },
  ];
  var endArr = [];
  var uniq = [];

  //////////////////////////
  //var markenArr = [];
  uniq = ["Ohrring", "Ohrstecker", "Kette", "Ring", "Armband", "Creole"];

  uniq.map((item, index) => {
    arr.map((prct, ind) => {
      if (prct.product_keywords != null) {
        let prodKategorie = prct.product_keywords.toLowerCase();
        let savedKategorie = item.toLowerCase();
        if (prodKategorie.search(savedKategorie) != -1) {
          endArr.push(prct);
        }
      }
    });
    filterArr[0][item] = [false, endArr];
    endArr = [];
  });
  //////////////////////////
  var markenArr = [];
  arr.map((prod, ind) => {
    if (prod.product_marke != null) {
      markenArr.push(prod.product_marke.toLowerCase());
    }
  });
  uniq = [...new Set(markenArr)];

  uniq.map((item, index) => {
    arr.map((prct, ind) => {
      if (prct.product_marke != null) {
        let prodMarke = prct.product_marke.toLowerCase();
        let savedMarke = item.toLowerCase();
        if (prodMarke.search(savedMarke) != -1) {
          endArr.push(prct);
        }
      }
    });
    filterArr[1][item] = [false, endArr];
    endArr = [];
  });
  //////////////////////////
  var materialArr = [];
  arr.map((prod, ind) => {
    if (prod.product_material != null) {
      materialArr.push(prod.product_material.toLowerCase());
    }
  });
  uniq = [...new Set(materialArr)];

  uniq.map((item, index) => {
    arr.map((prct, ind) => {
      if (prct.product_material != null) {
        let prodMaterial = prct.product_material.toLowerCase();
        let savedMaterial = item.toLowerCase();
        if (prodMaterial.search(savedMaterial) != -1) {
          endArr.push(prct);
        }
      }
    });
    filterArr[2][item] = [false, endArr];
    endArr = [];
  });
  //////////////////////////
  var farbenArr = [];
  arr.map((prod, ind) => {
    if (prod.product_farbe != null) {
      farbenArr.push(prod.product_farbe.toLowerCase());
    }
  });
  uniq = [...new Set(farbenArr)];

  uniq.map((item, index) => {
    arr.map((prct, ind) => {
      if (prct.product_farbe != null) {
        let prodFarbe = prct.product_farbe.toLowerCase();
        let savedFarbe = item.toLowerCase();
        if (prodFarbe.search(savedFarbe) != -1) {
          endArr.push(prct);
        }
      }
    });
    filterArr[3][item] = [false, endArr];
    endArr = [];
  });

  return filterArr;
};
const updatedFilter = (lastFilter) => {
  var newProds = [0, ["prod"]]
  var prodArray = []
  prodArray.unshift(newProds)

  if (prodArray.length > 1) {
    
  }

};
