import React, { useState } from "react";
import cpm from "./cpmContact";
import { BiMailSend } from "react-icons/bi";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import Footer  from "../../component/footer/Footer";
function Contact() {
  const { t } = useTranslation();
  const [mail, setMail] = useState("");
  const [namex, setNamex] = useState("");
  const [company, setCompany] = useState("");
  const [mobile, setMobile] = useState("");
  const [wahtapp, setWhatspp] = useState("");
  const [msg, setMsg] = useState("");

  let config = {};

  const handlemail = (e) => {
    e.preventDefault();




    
    config = {
        //   Host : "smtp.elasticemail.com",
        // Username : "saeed@jacforkliftksa.com",
        // Password : "3B0D3B5EADDC403B01AD71E8F4552DB39360",
      SecureToken: "fbcb1861-562a-4d7c-8100-fbc23a1c2f4d",
      To: "saeed@jacforkliftksa.com",
      
      From:"saeed@jacforkliftksa.com",
      Subject: "mail From WebSite",
      Body: `Email : ${mail} <hr/> name : ${namex}  <hr/> company : ${company} <hr/><strong> mobile: ${mobile} </strong>  <hr/> wahtapp:${wahtapp} <hr/> message : ${msg}`
    };
// console.log(config)
    if (window.Email) {
      window.Email.send(config).then((message) => toast.success(t("mailconfirm")));
    }
  };

  return (
    <>
      <form onSubmit={handlemail}>
        <cpm.Wraper>
          {/* -------------------------------------------------- */}
          <cpm.InputWraper width={"100%"}>
            <cpm.LabelTxt>{t("email")} *</cpm.LabelTxt>
            <cpm.Input1
              value={mail}
              onChange={(e) => setMail((pre) => e.target.value)}
            />
          </cpm.InputWraper>
          {/* -------------------------------------------------- */}
          <cpm.InputWraper width={"100%"}>
            <cpm.LabelTxt>{t("name")} *</cpm.LabelTxt>
            <cpm.Input1
              value={namex}
              onChange={(e) => setNamex((pre) => e.target.value)}
            />
          </cpm.InputWraper>
          {/* -------------------------------------------------- */}
          <cpm.InputWraper width={"100%"}>
            <cpm.LabelTxt>{t("company")}</cpm.LabelTxt>
            <cpm.Input1
              value={company}
              onChange={(e) => setCompany((pre) => e.target.value)}
            />
          </cpm.InputWraper>
          {/* -------------------------------------------------- */}

          <cpm.InputWraper width={"48%"}>
            <cpm.LabelTxt>{t("phone")} *</cpm.LabelTxt>
            <cpm.Input1
              value={mobile}
              onChange={(e) => setMobile((pre) => e.target.value)}
            />
          </cpm.InputWraper>
          {/* -------------------------------------------------- */}
          <cpm.InputWraper width={"48%"}>
            <cpm.LabelTxt>{t("whatsApp")}</cpm.LabelTxt>
            <cpm.Input1
              value={wahtapp}
              onChange={(e) => setWhatspp((pre) => e.target.value)}
            />
          </cpm.InputWraper>
          {/* -------------------------------------------------- */}
          <cpm.InputWraper width={"100%"}>
            <cpm.LabelTxt>{t("msg")}</cpm.LabelTxt>
            <cpm.Inputarea
              value={msg}
              onChange={(e) => setMsg((pre) => e.target.value)}
              rows={"4"}
            />
          </cpm.InputWraper>
          <cpm.SendBtn type="submit">
            <>{t("sendBtn")}</>
            <BiMailSend size={"1.5rem"} />
          </cpm.SendBtn>
           <Footer />
        </cpm.Wraper>
      </form>
    </>
  );
}

export default Contact;
