import React from "react";
import styled from "styled-components";

const Wraper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-top: 1.5rem;
padding: 1rem;
gap:1rem;
@media (max-width: 500px) {
    flex-direction: column;
  }


`;
const ImgWraper = styled.div`
  max-width: 300px;
  width: 100%;
  height: 300px;

`;
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
`;

function Accessory() {
  return (
    <>
      
      <Wraper>
        <ImgWraper>
          <Image src={"/assets/product/Accessory/1.png"} loading="lazy" />
        </ImgWraper>
        <ImgWraper>
          <Image src={"/assets/product/Accessory/2.png"} loading="lazy" />
        </ImgWraper>
        <ImgWraper>
          <Image src={"/assets/product/Accessory/3.png"} loading="lazy" />
        </ImgWraper>
        <ImgWraper>
          <Image src={"/assets/product/Accessory/4.png"} loading="lazy"/>
        </ImgWraper>
        <ImgWraper>
          <Image src={"/assets/product/Accessory/5.png"} loading="lazy"/>
        </ImgWraper>
        <ImgWraper>
          <Image src={"/assets/product/Accessory/6.png"} loading="lazy"/>
        </ImgWraper>
        <ImgWraper>
          <Image src={"/assets/product/Accessory/7.png"} loading="lazy"/>
        </ImgWraper>

        <ImgWraper>
          <Image src={"/assets/product/Accessory/8.png"} loading="lazy"/>
        </ImgWraper>

        <ImgWraper>
          <Image src={"/assets/product/Accessory/9.png"} loading="lazy"/>
        </ImgWraper>

        <ImgWraper>
          <Image src={"/assets/product/Accessory/10.png"} loading="lazy"/>
        </ImgWraper>

        <ImgWraper>
          <Image src={"/assets/product/Accessory/11.png"} loading="lazy"/>
        </ImgWraper>
        <ImgWraper>
          <Image src={"/assets/product/Accessory/12.png"} loading="lazy"/>
        </ImgWraper>
        <ImgWraper>
          <Image src={"/assets/product/Accessory/13.png"} loading="lazy"/>
        </ImgWraper>
        <ImgWraper>
          <Image src={"/assets/product/Accessory/14.png"} loading="lazy"/>
        </ImgWraper>
        <ImgWraper>
          <Image src={"/assets/product/Accessory/15.png"} loading="lazy"/>
        </ImgWraper>
        <ImgWraper>
          <Image src={"/assets/product/Accessory/16.png"} loading="lazy"/>
        </ImgWraper>
      </Wraper>
    </>
  );
}

export default Accessory;
