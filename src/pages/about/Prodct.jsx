import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip,Box } from "@mui/material";
import cpm from "./aboutCpm";
import { useTranslation } from "react-i18next";
import prod from "../product/product.json";



export default function Prodct() {
  const { t } = useTranslation();

  return (
    <>
    

      <cpm.CardWrapper>
        {/* <cpm.SectionTitle>{t("dezel")}</cpm.SectionTitle> */}
        <MyCard
          image={prod.D1.aboutPic}
          // title={t("D1.title")}
          subtitle={prod.D1.name}
          description={t("deselF")}
        />
        <MyCard
          image={prod.D2.aboutPic}
          title={t("D2.title")}
          subtitle={prod.D2.name}
          description={t("deselF")}
        />
        <MyCard
          image={prod.D3.aboutPic}
          title={t("D3.title")}
          subtitle={prod.D3.name}
          description={t("deselF")}
        />
        {/* <MyCard
          image={prod.D4.aboutPic}
          title={t("D4.title")}
          subtitle={prod.D4.name}
          description={t("deselF")}
        /> */}
        {/* <MyCard
          image={prod.D5.aboutPic}
          title={t("D5.title")}
          subtitle={prod.D5.name}
          description={t("deselF")}
        />
        <MyCard
          image={prod.D6.aboutPic}
          title={t("D6.title")}
          subtitle={prod.D6.name}
          description={t("deselF")}
        />
        <MyCard
          image={prod.D7.aboutPic}
          title={t("D7.title")}
          subtitle={prod.D7.name}
          description={t("deselF")}
        />
        <MyCard
          image={prod.D8.aboutPic}
          title={t("D8.title")}
          subtitle={prod.D8.name}
          description={t("deselF")}
        />
        <MyCard
          image={prod.D9.aboutPic}
          title={t("D9.title")}
          subtitle={prod.D9.name}
          description={t("deselF")}
        />
        <MyCard
          image={prod.D10.aboutPic}
          title={t("D10.title")}
          subtitle={prod.D10.name}
          description={t("deselF")}
        /> */}
        {/* ------------------------------------------------------------------- */}
        {/* <cpm.SectionTitle>{t("electric")}</cpm.SectionTitle> */}
        <EMyCard
          image={prod.E1.aboutPic}
          title={t("E1.title")}
          subtitle={prod.E1.name}
          description={t("electF")}
          borderColor="red"
        />
        <EMyCard
          image={prod.E2.aboutPic}
          title={t("E2.title")}
          subtitle={prod.E2.name}
          description={t("electF")}
        />
        <EMyCard
          image={prod.E3.aboutPic}
          title={t("E3.title")}
          subtitle={prod.E3.name}
          description={t("electF")}
        />


      <EMyCard
          image={prod.A1.aboutPic}
          // title={t("E3.title")}
          subtitle={prod.A1.name}
          description={t("accessory")}
          chipColor={"success"}
        />
        
      <EMyCard
          image={prod.A2.aboutPic}
          // title={t("E3.title")}
          subtitle={prod.A2.name}
          description={t("accessory")}
          chipColor={"success"}
        />
        
      <EMyCard
          image={prod.A3.aboutPic}
          // title={t("E3.title")}
          subtitle={prod.A3.name}
          description={t("accessory")}
          chipColor={"success"}
        />


        {/* <EMyCard
          image={prod.E4.aboutPic}
          title={t("E4.title")}
          subtitle={prod.E4.name}
          description={t("electF")}
        /> */}
        {/* <EMyCard
          image={prod.E5.aboutPic}
          title={t("E5.title")}
          subtitle={prod.E5.name}
          description={t("electF")}
        />
        <EMyCard
          image={prod.E6.aboutPic}
          title={t("E6.title")}
          subtitle={prod.E6.name}
          description={t("electF")}
        />
        <EMyCard
          image={prod.E7.aboutPic}
          title={t("E7.title")}
          subtitle={prod.E7.name}
          description={t("electF")}
        /> */}
        {/* <EMyCard
          image={prod.E8.aboutPic}
          title={t("E8.title")}
          subtitle={prod.E8.name}
          description={t("electF")}
        />
        <EMyCard
          image={prod.E9.aboutPic}
          title={t("E9.title")}
          subtitle={prod.E9.name}
          description={t("electF")}
        />
        <EMyCard
          image={prod.E10.aboutPic}
          title={t("E10.title")}
          subtitle={prod.E10.name}
          description={t("electF")}
        /> */}

        {/* <MyCard  image={"/assets/product/H-153243-1-5.jpg"}/> */}
      </cpm.CardWrapper>
    </>
  );
}

const EMyCard = ({ image, title, subtitle, description ,chipColor="error"}) => {
  const { t } = useTranslation();
  return (
    <>
      <Card sx={{ maxWidth: {xs:"85%", md:"25%"}, minWidth: {xs:"85%", md:"25%"}  }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent sx={{ p:0     }}>
          
          <Box
            sx={{
              backgroundColor: "rgba(25,25,25,.4)",
              width: "100%",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              color: "#fff",
              gap: "15px",
              padding: ".5rem",
             
              // borderRadius: "0px 25px 0px 0px",

              
            }}
          >
            <Chip  variant="filled" color={chipColor} label={description} sx={{fontFamily:"tb"}}/>
            {subtitle}
            
          </Box>
          </CardContent>
        </CardActionArea>
        
      </Card>
    </>
  );
};

const MyCard = ({ image, title, subtitle, description ,borderColor}) => {
  const { t } = useTranslation();
  return (
    <>
      <Card sx={{ maxWidth: {xs:"85%", md:"25%"}, minWidth: {xs:"85%", md:"25%"}  }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent sx={{ p:0     }}>
        
          <Box
            sx={{
              backgroundColor: "rgba(25,25,25,.7)",
              width: "100%",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              color: "#fff",
              gap: "15px",
              padding: ".5rem",
             
              // borderRadius: "0px 25px 0px 0px",

              
            }}
          >
            <Chip variant="filled" color="primary" label={description} sx={{fontFamily:"tb"}}/>
            {subtitle}
            
          </Box>
          </CardContent>
        </CardActionArea>
        
      </Card>
    </>
  );
};

