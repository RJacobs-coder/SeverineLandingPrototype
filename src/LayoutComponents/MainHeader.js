import React from "react";

import hamIcon from "../ArtAssets/iconFolder/hamIcon.png";
import bagIcon from "../ArtAssets/iconFolder/bagIcon.png";
import magIcon from "../ArtAssets/iconFolder/magIcon.png";

export const MainHeader = () => {
  return (
    <section className="HeaderSection">
        <img id="HamIcon" src={hamIcon}></img>


      <div id="HeaderTitle">
        <h1>SEVERINE</h1>
      </div>

      <div id="HeaderIconsDiv">
      <img className="HeaderIcons" src={magIcon}></img>
      <img className="HeaderIcons" src={bagIcon}></img>
      </div>
    </section>
  );
};
