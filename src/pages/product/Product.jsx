import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip } from "@mui/material";
import cpm from "./productCpm";
import { useTranslation } from "react-i18next";

import diselProduct from "./Dproduct.json";
import electricProduct from "./Eproduct.json";
import { FaGasPump } from "react-icons/fa";
import { GiForklift, GiElectric } from "react-icons/gi";
import { t } from "i18next";
import { TbEngine } from "react-icons/tb";
import Dezelengine from "./Dezelengine"




export default function Prodct({language}) {
  const [toggleProduct, setToggleProduct] = useState(0);
  

  return (
    <>
      <cpm.Container>
        <BtnControl setToggleProduct={setToggleProduct} />

        <cpm.CardWrapper>
          {toggleProduct === 0 && (
            <>
              <DeselProduct language={language}/> <ElectricProduct language={language} />
            </>
          )}
          {toggleProduct === 1 && <DeselProduct language={language} />}
          {toggleProduct === 2 && <ElectricProduct language={language} />}
          {toggleProduct === 3 && <Engine />}
        </cpm.CardWrapper>
      </cpm.Container>
    </>
  );
}

const BtnControl = ({ setToggleProduct }) => {
  return (
    <>
      <cpm.SelecttionWraper>
        <cpm.BtnSelect onClick={() => setToggleProduct((pre) => 0)}>
        <GiForklift size={"1.5rem"} />
          <div style={{display:"flex",gap:"15px"}}>

          <FaGasPump />
          <GiElectric />
          </div>
        </cpm.BtnSelect>
        <cpm.BtnSelect onClick={() => setToggleProduct((pre) => 1)}>
          <GiForklift size={"1.5rem"} />
          {t("deselF")}
        </cpm.BtnSelect>
        <cpm.BtnSelect onClick={() => setToggleProduct((pre) => 2)}>
          <GiForklift  size={"1.5rem"}/>
          {t("electF")} 
        </cpm.BtnSelect>
        <cpm.BtnSelect onClick={() => setToggleProduct((pre) => 3)}>
          <TbEngine size={"1.5rem"} />
          {t("engine")} 
        </cpm.BtnSelect>
      </cpm.SelecttionWraper>


      
    </>
  );
};

const DeselProduct = ({language}) => {
  const  { t } = useTranslation();
  // console.log("product language ",language)
  
  return (
    <>
      {/* --------------Loop For Desel Product ---------------------- */}
      <cpm.SectionTitle>{t("dezel")}</cpm.SectionTitle>
      {diselProduct.map((el, idx) => {
        const Dimage = `/assets/product/${el}/1.jpg`;
        const Dtitle = `${el}.subtitle`;
        const Edescription = `${el}.Edescription`;
        return (
          <React.Fragment key={el.id}>
            <MyCard
              image={el.Image}
              subtitle={el.name}
              hrefLink={`/product/${el.directory}/${el.imageCount}?model=${el.name}&typex=1&language=${language}`}
              gazoline={t("deselF")}
              description={language === "en" ? el.Edescription:el.Adescription}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};


const ElectricProduct = ({language}) => {
  const { t } = useTranslation();

  return (
    <>
      {/* --------------Loop For Electric Product ---------------------- */}
      <cpm.SectionTitle>{t("electric")}</cpm.SectionTitle>
      {electricProduct.map((el, idx) => {
        const Dimage = `/assets/product/${el}/1.jpg`;
        const Dtitle = `${el}.subtitle`;
        return (
          <React.Fragment key={el.id}>
            <MyCard
              image={el.Image}
              subtitle={el.name}
              hrefLink={`/product/${el.directory}/${el.imageCount}?model=${el.name}&typex=2`}
              gazoline={t("electF")}
              description={language === "en" ? el.Edescription:el.Adescription}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};





const Engine = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* --------------Loop For Electric Product ---------------------- */}
      <cpm.SectionTitle>{t("engine")}</cpm.SectionTitle>

      <MyCard
              image={"assets/product/Engine/d.jpg"}
              subtitle={"Diesel Engine"}
              hrefLink={"/dezelengine"}
              gazoline={t("deselF")}
            />
            <MyCard
              image={"assets/product/Engine/g.jpg"}
              subtitle={"Petrol Engine"}
              hrefLink={"/gezelengine"}
              gazoline={t("electF")}
            />


 
    </>
  );
};

const MyCard = ({ image, title, subtitle, description, hrefLink ,gazoline}) => {
  const { t } = useTranslation();
  return (
    <>
      <Card sx={{ maxWidth:{xs:"90%" ,md: "30%"}, minWidth:{xs:"90%" ,md: "30%"} }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />

          <CardContent>
            <Typography
              variant="body2"
              textAlign={"center"}
              color="text.secondary"
              sx={{ fontFamily: "tb" ,borderBottom:"2px solid rgba(0,0,0,.1)",mb:1}}
            >
              {subtitle}
            </Typography>
            <Typography
              variant="body2"
              textAlign={"center"}
              color="text.secondary"
              sx={{ fontFamily: "tb" }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            fullWidth
            color="success"
            sx={{ mx: "5px" }}
            component={Link}
            to={hrefLink}
          >
            <Typography
              variant="body2"
              textAlign={"left"}
              color="text.white"
              sx={{ fontFamily: "tb" }}
            >
              {t("detailBtn")}
            </Typography>
          </Button>
          <Chip size="small" variant="filled" color="primary" label={gazoline} sx={{ fontFamily: "tb" }}/>
        </CardActions>
      </Card>
    </>
  );
};
