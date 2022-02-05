import HomePage from "./components/pages/HomePage";
import ProduktePage from "./components/pages/ProduktePage";
import RatingPage from "./components/pages/RatingPage";
import ShopsPage from "./components/pages/ShopsPage";
import CouponPage from "./components/pages/CouponPage";
import InfoPage from "./components/pages/InfoPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import amazon_produkte from "./components/products/amazon_produkte.json";
import christ_produkte from "./components/products/christ_produkte.json";

function App() {
  var allprods_past = [];
  var allprods = [];
  const [product, setProduct] = useState([
    {
      id: 1,
      enabled: true,
      seite: "amazon",
      produkte: amazon_produkte,
    },
    {
      id: 2,
      enabled: true,
      seite: "christ",
      produkte: christ_produkte,
    },
  ]);

  product.map((shop, index) => {
    if (shop.enabled) {
      allprods_past.push(shop.produkte);
    }
  });

  allprods = allprods_past.flat();

  const allprods_display = shuffle(allprods);

  function deactivateProd(deactId) {
    var newObj = [...product];
    newObj.map((obj, index) => {
      if (deactId == obj.id) {
        obj["enabled"] = !obj.enabled;
      }
    });
    setProduct(newObj);
  }
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route
          path="/schmuck_produkte"
          exact
          element={
            <ProduktePage
              allprods_display={allprods_display}
              deactProd={deactivateProd}
            />
          }
        />
        <Route
          path="/top_bewertet"
          exact
          element={<RatingPage allprods_display={allprods_display} />}
        />
        <Route path="/all_shops" exact element={<ShopsPage />} />
        <Route path="/coupons" exact element={<CouponPage />} />
        <Route path="/info" exact element={<InfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
function shuffle(d) {
  var j, x, i;
  for (i = d.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = d[i];
    d[i] = d[j];
    d[j] = x;
  }
  var b;
  var c = [];
  var a = [];
  var size = 25;
  for (var i = 0; i < d.length; i += size) {
    a.push(d.slice(i, i + size));
  }
  return a;
}


