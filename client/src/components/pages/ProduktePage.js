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
  const [filter, setFilter] = useState([
    [
      "sort",
      {
        preisAuf: false,
        preisAb: false,
        bewertungAuf: false,
        bewertungAb: false,
      },
    ],
    [
      "filter",
      ["marke", { pandora: false, swarowski: false }],
      ["metalle", { gold: false, silber: false, edelstahl: false }],
    ],
  ]);

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

  return (
    <div style={{ overflowY: "hidden" }}>
      <TopDiv>
        <Navbar_produkte />
      </TopDiv>
      <MidDiv1>
        <SearchBar searchOn={searchText} />
        <SetProducts deactProd={deactProd} />
        <Products allprods_display={allprods} filter={ filter }/>
      </MidDiv1>
      <MidDiv2>
        <MidCards />
      </MidDiv2>
      s<FootDiv></FootDiv>
    </div>
  );
}

export default ProduktePage;


