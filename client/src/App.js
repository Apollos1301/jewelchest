import HomePage from "./components/pages/HomePage";
import ProduktePage from "./components/pages/ProduktePage";
import RatingPage from "./components/pages/RatingPage";
import ShopsPage from "./components/pages/ShopsPage";
import CouponPage from "./components/pages/CouponPage";
import InfoPage from "./components/pages/InfoPage";
//////////////////////////////////////////
import AppHomePage from "./components/appV/appPages/AppHomePage";
import AppProduktePage from "./components/appV/appPages/AppProduktePage";
import AppRatingPage from "./components/appV/appPages/AppRatingPage";
import AppShopsPage from "./components/appV/appPages/AppShopsPage";
import AppCouponPage from "./components/appV/appPages/AppCouponPage"
import AppInfoPage from "./components/appV/appPages/AppInfoPage"
//////////////////////////////////////////
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import amazon_produkte from "./components/products/amazon_produkte.json";
import christ_produkte from "./components/products/christ_produkte.json";
import useWindowDimensions from "./components/useWindowDimensions";

function App() {
  const { height, width } = useWindowDimensions();
  const mobileV = useRef(false);
  var allprods_past = [];
  var allprods = [];
  var amazon = [];
  var christ = [];
  const prodMaker = () => {
    amazon_produkte.map((prod, index) => {
      let obj = {
        product_root: prod.product_root,
        product_link: prod.product_link,
        product_name: prod.product_name,
        product_keywords: prod.product_keywords,
        product_price: prod.product_price,
        product_image: prod.product_image,
        product_rating: prod.product_rating,
        product_image_res: prod.product_image_res,
        product_marke: prod.product_marke,
        product_material: prod.product_material
          .split(",")[0]
          .split(";")[0]
          .replace("-", " "),
        product_farbe: prod.product_farbe,
      };
      amazon.push(obj);
    });

    christ_produkte.map((prod, index) => {
      let obj = {
        product_root: prod.product_root,
        product_link: prod.product_link,
        product_name: prod.product_name,
        product_keywords: prod.product_keywords,
        product_price: prod.product_price,
        product_image: prod.product_image,
        product_rating: prod.product_rating,
        product_image_res: prod.product_image_res,
        product_marke: prod.product_marke,
        product_material: prod.product_material
          .split(",")[0]
          .split(";")[0]
          .replace("-", " "),
        product_farbe: prod.product_farbe,
      };
      christ.push(obj);
    });
  };
  prodMaker();
  const [product, setProduct] = useState([
    {
      id: 1,
      enabled: true,
      seite: "amazon",
      produkte: amazon,
    },
    {
      id: 2,
      enabled: true,
      seite: "christ",
      produkte: christ,
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
    console.log("awdaw");
    setProduct(newObj);
  }
  if (width <= 1325) {
    mobileV.current = true;
  } else {
    mobileV.current = false;
  }
  console.log(mobileV.current);
  return (
    <Router>
      {mobileV.current ? (
        <Routes>
          <Route path="/" exact element={<AppHomePage />} />
          <Route
            path="/schmuck_produkte"
            exact
            element={
              <AppProduktePage
                allprods_display={allprods_display}
                deactProd={deactivateProd}
              />
            }
          />
          <Route
            path="/top_bewertet"
            exact
            element={<AppRatingPage allprods_display={allprods_display} />}
          />
          <Route path="/all_shops" exact element={<AppShopsPage />} />
          <Route path="/coupons" exact element={<AppCouponPage />} />
          <Route path="/info" exact element={<AppInfoPage />} />
        </Routes>
      ) : (
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
      )}
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
