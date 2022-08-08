import "./SassFiles/mainstyle.css";


import { MainHeader } from "./LayoutComponents/MainHeader";
import { MainFooter } from "./LayoutComponents/MainFooter";
import { LandingPic } from "./Components/LandingPic";

import ExploreBox from "./Components/ExploreBox";
import { AboutBlock } from "./Components/AboutBlock";
import MainCarousel from "./Components/MainCarousel";

// Prototype Landing Page for Serverine Weber.
// Serves as introduction for Art Projects and avenue for client sales.
// Made with IPhone 12 Cellphones in mind (Width = 390 Height = 844) and will be expanded to Desktops at later date.

function App() {
  return (
    <div id="SeverineApp">
      <MainHeader></MainHeader>

      <LandingPic></LandingPic>
      <span>
        "I create art that connects us with the world around us, because nature
        is our biggest teacher"
      </span>
      <ExploreBox
        sendTitle="Originals"
        sendValue="Explore Originals"
      ></ExploreBox>
      <ExploreBox
        sendTitle="Best Sellers"
        sendValue="View Products"
      ></ExploreBox>
      <ExploreBox
        sendTitle="LargePrints"
        sendValue="View Large Prints"
      ></ExploreBox>

      <AboutBlock></AboutBlock>

      <section id="OrderCallSection">
        <div className="OrderCallItems" id="orderCall1">
          <button>ORDER VINYL</button>
        </div>
        <div className="OrderCallItems" id="orderCall2">
          <h1>CHARACTER ARTWORK</h1>
          <button>VIEW CHARACTERS</button>
        </div>

        <div className="OrderCallItems" id="orderCall3">
          <h1>PRINT BUNDLES</h1>
          <button>VIEW SETS</button>
        </div>

        <div className="OrderCallItems" id="orderCallBrown">
          <p>FREE SHIPPING ON PRINTS AUS ORDER OVER AUDO 2000$ TandC APP</p>
        </div>
      <div className="OrderCallItems" id="orderCall4">

      </div>

      </section>

      <MainCarousel></MainCarousel>
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
