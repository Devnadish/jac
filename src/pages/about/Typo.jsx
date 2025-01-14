import { Box } from "@mui/material";

import React,{useState} from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import cpm from "./aboutCpm";
 
 
function Typo() {
  const { t } = useTranslation();
  const [iskh,setIskh]=useState(true);
  const crntLanguage = i18n.language;
  // console.log(typeof iskh)
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "space-evenly"
        }}
      >
        <cpm.SelectBtn1  type1={iskh}  onClick={() => setIskh((pre) => !iskh)}>{t("selectBtn1")}</cpm.SelectBtn1>
        <cpm.SelectBtn2  type1={iskh} onClick={() => setIskh((pre) => !iskh)}>{t("selectBtn2")}</cpm.SelectBtn2>
      </Box>
      {iskh ? (
        <cpm.Txt lng={crntLanguage}>{t("alkurami")}</cpm.Txt>
      ) : (
        <cpm.Txt lng={crntLanguage}>{t("about")}</cpm.Txt>
      )}
    </div>
  );
}

export default Typo;
