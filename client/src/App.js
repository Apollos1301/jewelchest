import HomePage from "./components/pages/HomePage";
import ProduktePage from "./components/pages/ProduktePage";
import RatingPage from "./components/pages/RatingPage";
import ShopsPage from "./components/pages/ShopsPage";
import CouponPage from "./components/pages/CouponPage";
import InfoPage from "./components/pages/InfoPage";
import SearchedProd from "./components/pages/SearchedProd";
//////////////////////////////////////////
import AppHomePage from "./components/appV/appPages/AppHomePage";
import AppProduktePage from "./components/appV/appPages/AppProduktePage";
import AppRatingPage from "./components/appV/appPages/AppRatingPage";
import AppShopsPage from "./components/appV/appPages/AppShopsPage";
import AppCouponPage from "./components/appV/appPages/AppCouponPage";
import AppInfoPage from "./components/appV/appPages/AppInfoPage";
//////////////////////////////////////////
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import amazon_produkte from "./components/products/amazon_produkte.json";
import christ_produkte from "./components/products/christ_produkte.json";
import useWindowDimensions from "./components/hooks/useWindowDimensions";

function App() {
  const { height, width } = useWindowDimensions();
  const [passedProds, setPassedProds] = useState([]);
  const mobileV = useRef(false);
  var allprods_past = [];
  var allprods = [];
  var amazon = [];
  var christ = [];

  const prodMaker = () => {
    amazon_produkte.map((prod, index) => {
      let p = prod.product_price.replace(/\./g, "");
      p = p.replace(/\,/g, "");
      if (p.length > 2) {
        p =
          p.substring(0, p.length - 2) +
          "." +
          p.substring(p.length - 2, p.length);
      }
      let obj = {
        product_root: prod.product_root,
        product_link: prod.product_link,
        product_name: prod.product_name,
        product_keywords: prod.product_keywords,
        product_price: p,
        product_image: prod.product_image,
        product_rating: prod.product_rating,
        product_image_res: prod.product_image_res,
        product_marke: prod.product_marke,
        product_material: prod.product_material
          .split(",")[0]
          .split(";")[0]
          .replace("-", " "),
        product_farbe: prod.product_farbe,
        product_Key: ["amazon", index, false],
      };
      amazon.push(obj);
    });

    christ_produkte.map((prod, index) => {
      let p = prod.product_price.replace(/\./g, "");
      p = p.replace(/\,/g, "");
      if (p.length > 2) {
        p =
          p.substring(0, p.length - 2) +
          "." +
          p.substring(p.length - 2, p.length);
      }
      let obj = {
        product_root: prod.product_root,
        product_link: prod.product_link,
        product_name: prod.product_name,
        product_keywords: prod.product_keywords,
        product_price: p,
        product_image: prod.product_image,
        product_rating: prod.product_rating,
        product_image_res: prod.product_image_res,
        product_marke: prod.product_marke,
        product_material: prod.product_material
          .split(",")[0]
          .split(";")[0]
          .replace("-", " "),
        product_farbe: prod.product_farbe,
        product_Key: ["christ", index, false],
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
  var [allprods_display, setAllprods_display] = useState([
    ...shuffle(allprods),
  ]);
  useEffect(() => {
    setAllprods_display([...shuffle(allprods)]);
  }, [product]);

  function deactivateProd(deactId) {
    var newObj = [...product];
    newObj.map((obj, index) => {
      if (deactId == obj.id) {
        obj["enabled"] = !obj.enabled;
      }
    });
    setProduct(newObj);
  }

  const storageCheck = () => {
    let storage = JSON.parse(localStorage.getItem("likes"));
    let newStorageitem = [];
    if (storage != null && storage.length > 0) {
      storage.map((storageItem, indexS) => {
        allprods.map((prod, ind) => {
          if (storageItem[2].product_link == prod.product_link) {
            newStorageitem.push([
              prod.product_Key[0],
              prod.product_Key[1],
              prod,
            ]);
            //console.log(prod.product_link);
          } else {
            //console.log("not same");
          }
        });
      });
    } else {
      //console.log("nothing");
    }
    localStorage.setItem("likes", JSON.stringify(newStorageitem));
    //console.log(newStorageitem);
  };

  useEffect(() => {
    storageCheck();
  }, []);
  if (width <= 1325) {
    mobileV.current = true;
  } else {
    mobileV.current = false;
  }
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
                shopList={product}
              />
            }
          />
          <Route
            path="/top_bewertet"
            exact
            element={
              <AppRatingPage
                allprods_display={allprods_display}
                deactProd={deactivateProd}
                shopList={product}
              />
            }
          />
          <Route
            path="/all_shops"
            exact
            element={<AppShopsPage shopList={product} />}
          />
          <Route path="/coupons" exact element={<AppCouponPage />} />
          <Route path="/info" exact element={<AppInfoPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/"
            exact
            element={
              <HomePage
                passProd={(prods) => {
                  setPassedProds([...prods]);
                }}
                allprods_display={allprods_display}
              />
            }
          />
          <Route
            path="/schmuck_produkte"
            exact
            element={
              <ProduktePage
                allprods_display={allprods_display}
                deactProd={deactivateProd}
                shopList={product}
                passProd={(prods) => {
                  setPassedProds([...prods]);
                }}
              />
            }
          />
          <Route
            path="/top_bewertet"
            exact
            element={
              <RatingPage
                allprods_display={allprods_display}
                deactProd={deactivateProd}
                shopList={product}
                passProd={(prods) => {
                  setPassedProds([...prods]);
                }}
              />
            }
          />
          <Route
            path="/all_shops"
            exact
            element={
              <ShopsPage
                shopList={product}
                allprods_display={allprods_display}
                passProd={(prods) => {
                  setPassedProds([...prods]);
                }}
              />
            }
          />
          <Route
            path="/coupons"
            exact
            element={
              <CouponPage
                passProd={(prods) => {
                  setPassedProds([...prods]);
                }}
                allprods_display={allprods_display}
              />
            }
          />
          <Route
            path="/info"
            exact
            element={
              <InfoPage
                passProd={(prods) => {
                  setPassedProds([...prods]);
                }}
                allprods_display={allprods_display}
              />
            }
          />
          <Route
            path="/products/search"
            exact
            element={
              <SearchedProd
                allprods_display={allprods_display}
                allProds={passedProds}
                passProd={(prods) => {
                  setPassedProds([...prods]);
                }}
              />
            }
          ></Route>
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

  var a = packer(d);

  return a;
}
function packer(d) {
  var b;
  var c = [];
  var a = [];
  var size = 55;
  for (var i = 0; i < d.length; i += size) {
    a.push(d.slice(i, i + size));
  }
  return a;
}
