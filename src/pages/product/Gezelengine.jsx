import React, { lazy, Suspense } from "react";
import cpm from "./productCpm";
import Loader from "../../component/loader/Loader";
import GengineSpesfication from "./spesfication/GengineSpesfication";
import { IoMdArrowRoundBack } from "react-icons/io";

function Gezelengine() {
  
  
  
  return (
    <>
      <cpm.ProdctPageWraper>
        <cpm.VerticalDiv>
          <cpm.RTxt>Gazolne Engine</cpm.RTxt>


          <cpm.SectionTitle>
          <cpm.ModelTxt>Gazolne Engine</cpm.ModelTxt>
        </cpm.SectionTitle>


          <cpm.BackArrow>
            <cpm.LinkTxt to="/product">
              <IoMdArrowRoundBack />
            </cpm.LinkTxt>
          
          
          </cpm.BackArrow>
        </cpm.VerticalDiv>

      

        <Suspense fallback={<p>loading...</p>}>
          <cpm.TableWraper>
            <GengineSpesfication />
          </cpm.TableWraper>
        </Suspense>
      </cpm.ProdctPageWraper>
    </>
  );
}

export default Gezelengine;

