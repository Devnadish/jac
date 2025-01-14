import React, { lazy, Suspense } from "react";
import cpm from "./productCpm";
import Loader from "../../component/loader/Loader";
import DengineSpesfication from "./spesfication/DengineSpesfication";
import { IoMdArrowRoundBack } from "react-icons/io";

function Dezelengine() {
  
  
  
  return (
    <>
      <cpm.ProdctPageWraper>
        <cpm.VerticalDiv>
          <cpm.RTxt>Desel Engine</cpm.RTxt>


          <cpm.SectionTitle>
          <cpm.ModelTxt>Desel Engine</cpm.ModelTxt>
        </cpm.SectionTitle>


          <cpm.BackArrow>
            <cpm.LinkTxt to="/product">
              <IoMdArrowRoundBack />
            </cpm.LinkTxt>
          
          
          </cpm.BackArrow>
        </cpm.VerticalDiv>

      

        <Suspense fallback={<p>loading...</p>}>
          <cpm.TableWraper>
            <DengineSpesfication />
          </cpm.TableWraper>
        </Suspense>
      </cpm.ProdctPageWraper>
    </>
  );
}

export default Dezelengine;

