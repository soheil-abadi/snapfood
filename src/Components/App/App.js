import React, { useEffect, useState } from "react";
import Header from "../Header/Header.js";
import Sort from "../Section/Sorting/sort.js";
import Discount from "../Section/Discounts/Discount.js";
import SecondSection from "../Section/Second-Section/Second-Section.js";
import Footer from "../Footer/Fotter.js";

const App = () => {
  const [products, setproducts] = useState([]);
  const Get = () => {
    fetch("http://localhost:3004/img")
      .then((res) => res.json())
      .then((json) => {
        setproducts(json);
      });
  };

  const [New, setNew] = useState([]);
  const newsnapp = () => {
    fetch("http://localhost:3004/new")
      .then((res) => res.json())
      .then((json) => {
        setNew(json);
      });
  };
  const [Best, Bestset] = useState([]);
  const BestGet = () => {
    fetch("http://localhost:3004/bests")
      .then((res) => res.json())
      .then((json) => {
        Bestset(json);
      });
  };

  useEffect(() => {
    Get();
    newsnapp();
    BestGet();
  }, []);

  return (
    <>
      <Header />
      <Sort />
      <Discount products={products} New={New} Best={Best} />
      <SecondSection />
      <Footer />
    </>
  );
};

export default App;
