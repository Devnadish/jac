import React from "react";
import cpm from "./cpmFooter";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <cpm.Wraper>
      <cpm.Agncy>
        <cpm.Linemsg1>{t("agent")}</cpm.Linemsg1>
        <cpm.Txt>{t("footerData")}</cpm.Txt>

        <cpm.ImageWrpaer>
          <cpm.Image src="logo2.png" />
        </cpm.ImageWrpaer>
        <cpm.Txt>{t("contactInfo")}</cpm.Txt>

        <cpm.Txt>{t("contactPhone")}</cpm.Txt>
      </cpm.Agncy>
      <cpm.SubAgncy>
        <cpm.Linemsg2>{t("subagent")}</cpm.Linemsg2>
        <cpm.Txt>{t("qasem")} </cpm.Txt>
        <cpm.Txt>{t("qasemAdr")}</cpm.Txt>
        <cpm.Txt>{t("qasemPhone")}</cpm.Txt>
        <hr />
        <cpm.Hr />
        <cpm.Txt> {t("ryd")} </cpm.Txt>
        <cpm.Txt> {t("rydAdr")}</cpm.Txt>
        <cpm.Txt> {t("rydPhone")}</cpm.Txt>
      </cpm.SubAgncy>
    </cpm.Wraper>
  );
}

export default Footer;
