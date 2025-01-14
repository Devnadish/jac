import { useState, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route ,HashRouter} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./component/utils/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./component/loader/Loader";
import CssBaseline from "@mui/material/CssBaseline";
import { FiPhoneCall } from "react-icons/fi";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Rescroll from "./component/utils/Rescroll"
const MainMenu = lazy(() => import("./component/menu/MainMenu"));

const Footer = lazy(() => import("./component/footer/Footer"));

import i18n from "./i18n";
import cpm from "./cpmApp";
import MyRoute from "./component/myRoute/MyRoute";

const CallMe = () => {
  return (
    <>
     <a href="tel:+966505622380">
      <cpm.CallBtn>
        <FiPhoneCall size={"1.3rem"} color="white" />
      </cpm.CallBtn>
       </a>
    </>
  );
};




function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [langDirection, setLangDirection] = useState("rtl");
  const [language, setLanguage] = useState("ar");
  const [load, setLoad] = useState(false);
  const [flag,setFlag] = useState("en.svg")

  useEffect(() => {
    setLoad(pre=>true);
    setTimeout(() => {
      setLoad(pre=>false);
    }, 3000);
  }, []);

  useEffect(() => {
    document.body.dir = langDirection;
    i18n.changeLanguage(language);
  }, [language]);


  return (
    <>
      {load ? (
        <LoadingApp load={load} />
      ) : (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <cpm.Container>
            <CallMe />
            
              <HashRouter>
                <cpm.BodyWrapper>
                  <MainMenu
                    setLangDirection={setLangDirection}
                    language={language}
                    setLanguage={setLanguage}
                    flag={flag}
                    setFlag={setFlag}
                  />
                  <Suspense fallback={<Loader />}>
                  <Rescroll>
                    <MyRoute language={language}/>
                    {/* <Routes>
                      <Route path="/">
                        <Route index element={<About />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="product" element={<Product  language={language} />} />
                        <Route path="dezelengine" element={<DezelEngine />} />
                        <Route path="gezelengine" element={<GezelEngine />} />
                        
                        <Route
                          path="product/:id/:filesNO"
                          element={<ProductId language={language} />}
                        />
                        <Route path="accessory" element={<Accessory />} />
                        <Route path="*" element={<PageNotFound />} />
                      </Route>
                    </Routes> */}
                    </Rescroll>
                  </Suspense>
                  {/* <Footer /> */}
                </cpm.BodyWrapper>
              </HashRouter>
       
            </cpm.Container>
          </ThemeProvider>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;

const LoadingApp = ({ load }) => {
  return (
    <>
      <div className="mainloader">
        <cpm.LoaderWraper>
          <ClimbingBoxLoader size={25} color={"#F37A24"} loading={load} />
        </cpm.LoaderWraper>
        {/* <cpm.LogoTxtA>موسسة سعيد الخريمي التجارية</cpm.LogoTxtA>
        <cpm.LogoTxtE> Saeed Alkhuraimi Trading Est </cpm.LogoTxtE>
         */}
        <cpm.LogoTxtA>الخريمي التجارية</cpm.LogoTxtA>
        <cpm.LogoTxtE>Alkhuraimi Trading</cpm.LogoTxtE>
        
      </div>
    </>
  );
};
