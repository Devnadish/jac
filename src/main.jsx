import React,{Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import Loader from "./component/loader/Loader";
import App from './App'
import './index.css'
import './fonts.css'
import './i18n';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import cpm from "./cpmApp";


const LoadingApp = ({ load=true }) => {
  return (
    <>
      <div className="mainloader">
        <cpm.LoaderWraper>
          <ClimbingBoxLoader size={25} color={"#fa10bf"} loading={true} />
        </cpm.LoaderWraper>
        <cpm.LogoTxtA>موسسة سعيد الخريمي التجارية</cpm.LogoTxtA>
        <cpm.LogoTxtE> Saeed Alkhuraimi Trading Est </cpm.LogoTxtE>
      </div>
    </>
  );
};



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  {/* <Suspense fallback={<LoadingApp/>}> */}
  
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  {/* </Suspense> */}
  </>
)

