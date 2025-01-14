
import { useTranslation } from "react-i18next";
import cpm from "../../component/footer/cpmFooter";
// import cpm from "./aboutCpm";
function Distributer() {
    const { t } = useTranslation();
  return (
    <>
    <h1>{t("subagent")}</h1>
    <cpm.Wraper>
    <cpm.Agncy>
      <cpm.Linemsg1>{t("agent")}</cpm.Linemsg1>
      <cpm.Txt>{t("footerData")}</cpm.Txt>
      <cpm.Txt>{t("forklifts")}</cpm.Txt>
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

  </>



  )
}

export default Distributer