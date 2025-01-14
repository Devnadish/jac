import React from "react";
import cpm from "./aboutCpm";

function Heroimag({imagename,w}) {
  return (
    <>
      <cpm.ImageWraper>
        {/* <cpm.Image  src="/banner.webp" /> */}
        <cpm.Image  src={imagename} w={w} />
        {/* <cpm.Image  src="/heroImage.webp" /> */}
      </cpm.ImageWraper>
    </>
  );
}

export default Heroimag;
