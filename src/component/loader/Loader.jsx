import cpm from "./cpmLoader"
import HashLoader from "react-spinners/HashLoader";
import { useTranslation } from "react-i18next";
function Loader() {
  const {t} =useTranslation()
  return (
    <cpm.Container >
     <HashLoader  size={25} color={"#F37A24"} loading={true} />
      <cpm.TXT>{t("loading")}</cpm.TXT>
    </cpm.Container>
  );
}

export default Loader;
