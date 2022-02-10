import React from "react";
import Contact from "./main/Contact";
import Information from "./main/Information";
import Maps from "./main/Maps";
import Slides from "./main/Slides";

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Slides />
        <Information />
        <Contact />
        <Maps />
      </div>
    );
  }
}
