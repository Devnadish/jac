import React, { lazy, Suspense } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cpm from "./productCpm";
import { useTranslation } from "react-i18next";
import { useParams, useSearchParams } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";

import Loader from "../../component/loader/Loader";

function ProductId({ language}) {
  const [search, setSearchParams] = useSearchParams();
  const [Stype, setStype] = useSearchParams();
  const [Slanguage, setLanguageStype] = useSearchParams();
  const modelx = search.get("model");
  const typex = Stype.get("typex");
  const langx = Stype.get("Slanguage");
  const { t } = useTranslation();
  const PX = useParams();

  let Tablex;
  if (language === "en"){
     Tablex = lazy(() =>
    import(`../product/spesfication/Product${PX.id}.jsx`)
  );
  }else{
     Tablex = lazy(() =>
    import(`../product/spesfication/ProductA${PX.id}.jsx`)
  );
  }
  

  /* ----------create file names in array------------------------------------------------------------ */
  // const locWork = locDir.toUpperCase();
  const locWork = PX.id.toUpperCase();
  const Pid = PX.filesNO;
  const workFile = [];
  for (let index = 1; index < parseInt(Pid) + 1; index++) {
    workFile.push(`/assets/product/${locWork}/${index}.jpg`);
  }
  /* ------------------------------------------------------------------ */
  let typeName = "";
  if (typex === "1") {
    typeName = `${t("deselF")}`;
  } else {
    typeName = `${t("electF")}`;
  }
  return (
    <>
      <cpm.ProdctPageWraper>
        <cpm.VerticalDiv>
          <cpm.RTxt>{typeName}</cpm.RTxt>


          <cpm.SectionTitle>
          <cpm.ModelTxt>{modelx}</cpm.ModelTxt>
        </cpm.SectionTitle>


          <cpm.BackArrow>
            <cpm.LinkTxt to="/product">
              <IoMdArrowRoundBack />
            </cpm.LinkTxt>
          
          
          </cpm.BackArrow>
        </cpm.VerticalDiv>

        {/* <cpm.SectionTitle>
          <cpm.ModelTxt>{modelx}</cpm.ModelTxt>
        </cpm.SectionTitle> */}
        <SliderShow imageFiles={workFile} />

        <Suspense fallback={<p>loading...</p>}>
          <cpm.TableWraper>
            <Tablex />
          </cpm.TableWraper>
        </Suspense>
      </cpm.ProdctPageWraper>
    </>
  );
}

export default ProductId;

const SliderShow = ({ imageFiles }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    centerPadding: "0px",
    pauseOnHover: true,
    swipeToSlide: true,
  };

  return (
    <>
      <cpm.SliderWraper>
        <cpm.CpmSlider {...settings}>
          {imageFiles.map((el, idx) => (
            <cpm.SliderImage key={idx} src={el} />
          ))}
        </cpm.CpmSlider>
        {/* ---------------------------- */}
      </cpm.SliderWraper>
    </>
  );
};

const TableVeiw = () => {
  return <></>;
};
