import React from "react";
import "./Home.css";
import Header from "./Header";
import Product from "./Product";
import banner from "../assets/banner.png";
import colourme from "../assets/parfum.jpg";
import coco from "../assets/coco_chanel.jpg";
import dior from "../assets/dior.jpg";
import inito from "../assets/initio.jpg";
import ysl from "../assets/YSL.jpg";
import versace from "../assets/Versace.jpg";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <img className="home_banner" src={banner} alt="banner" />
        <div className="home_row">
          <Product
            id="1"
            title="Fragrance for Women"
            price={19.5}
            rating={6}
            image={colourme}
          />
          <Product
            id="2"
            title="manneke"
            price={99.5}
            rating={10}
            image={coco}
          />
        </div>

        <div className="home_row">
          <Product
            id="3"
            title="Dior J'Adore"
            price={99.5}
            rating={7}
            image={dior}
          />
          <Product
            id="4"
            title="Initio Oud For Greatness"
            price={371.28}
            rating={8}
            image={inito}
          />
          <Product
            id="5"
            title="Yves Saint Laurent Libre"
            price={41}
            rating={4}
            image={ysl}
          />
        </div>

        <div className="home_row">
          <Product
            id="6"
            title="Versace Eros"
            price={49.99}
            rating={6}
            image={versace}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
