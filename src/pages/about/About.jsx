import React from "react";

import Heroimag from "./Heroimag";
import Typo from "./Typo";
import Prodct from "./Prodct";
import cpm from "./aboutCpm";
import Distributer from "./Distributer";

function About({ language }) {
  

  return (
    <>
      <cpm.Wraper>
        <Heroimag imagename={"/banner.jpg"} w={"100%"}/>
        <Typo />
        <cpm.Hr/>
        <Distributer/>
        <Heroimag imagename={"/DistributerMap1.png"} w={"70%"}/>
        {/* <Prodct /> */}
      </cpm.Wraper>
    </>
  );
}

export default About;
