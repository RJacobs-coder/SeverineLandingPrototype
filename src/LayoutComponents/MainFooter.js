import React from "react";

import placeHolderPic from "../ArtAssets/iconFolder/EndFooterPlaceHolder.png";

export const MainFooter = () => {
  return (
    <section className="FooterSection">
      <h1 id="ShippingText">Shipping</h1>

      <div className="FooterMenu">
        <h1>FooterMenu</h1>
        <h2>SEARCH</h2>
        <h2>Shipping / Returns</h2>
        <h2>COMMISION ENQUIRIES</h2>
        <h2>FRAMING ENQUIRIES</h2>
        <h2>PRIVACY POLICY</h2>
      </div>

      <div className="FooterNewsLetter">
        <h1> NewsLetter</h1>
        <h2>Get 5% off your first order.</h2>
        <p>
          Join the waitlist for exclusive new collections and get the latest
          special offers and announcements.
        </p>
        <ul>
        <button id="placeHolderTextBox">This will be text box later.</button>
        <button type="submit" id="footerButton">
          SUBSCRIBE
        </button>
        </ul>
      </div>
      <div className="FooterEnd">
        <p>Severine Art</p>
        <h1>Powered By Robert Jacobs</h1>
      </div>
      <img src={placeHolderPic} id="placeHolderFooterPic"></img>
    </section>
  );
};
