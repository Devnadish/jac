import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cpm from "../productCpm";

import { useTranslation } from "react-i18next";

const TableVeiw = () => {
  return (
    <>
      <table cellPadding="1" cellSpacing="1">
        <tr>
          <td colSpan="3"> Model </td> <td> CPD45S </td> <td> CPD50S </td>
          <td> CPD60S </td>
        </tr>
        <tr>
          <td rowSpan="14"> Features </td> <td colSpan="2"> Power type </td>
          <td colSpan="3"> Battery </td>
        </tr>
        <tr>
          <td colSpan="2"> Rated load（kg） </td> <td> 4500 </td>
          <td> 5000 </td> <td> 6000 </td>
        </tr>
        <tr>
          <td colSpan="2"> Load center distance（mm） </td> <td> 500 </td>
          <td> 500 </td> <td> 600 </td>
        </tr>
        <tr>
          <td colSpan="2"> Lift height（mm） </td> <td colSpan="3"> 3000 </td>
        </tr>
        <tr>
          <td colSpan="2"> Free lift height（mm） </td> <td> 120 </td>
          <td> 120 </td> <td> 150 </td>
        </tr>
        <tr>
          <td> Fork size </td> <td> L×W×T（mm） </td>
          <td colSpan="2"> 1070×150×50 </td> <td> 1220×150×60 </td>
        </tr>
        <tr>
          
          <td> Mast tilt angle </td> <td> Front/Rear </td>
          <td colSpan="3"> 6°/9° </td>
        </tr>
        <tr>
          
          <td colSpan="2"> Minimum turning radius（mm） </td> <td> 2704 </td>
          <td> 2704 </td> <td> 2780 </td>
        </tr>
        <tr>
          
          <td colSpan="2">
            
            Minimum right angle stacking aisle width（mm）
          </td>
          <td> 4300 </td> <td> 4300 </td> <td> 4350 </td>
        </tr>
        <tr>
          
          <td colSpan="2"> Minimum right angle aisle width（mm） </td>
          <td> 2904 </td> <td> 2904 </td> <td> 2980 </td>
        </tr>
        <tr>
          
          <td colSpan="2"> Minimum ground clearance（mm） </td>
          <td colSpan="3"> 145 </td>
        </tr>
        <tr>
          
          <td colSpan="2"> Height of overhead guard（mm） </td>
          <td colSpan="3"> 2285 </td>
        </tr>
        <tr>
          
          <td colSpan="2"> Height form seat to overhead guard（mm） </td>
          <td colSpan="3"> 1020 </td>
        </tr>
        <tr>
          
          <td colSpan="2"> Overhang (FR)（mm） </td> <td> 578 </td>
          <td> 578 </td> <td> 586 </td>
        </tr>
        <tr>
          
          <td rowSpan="7"> Performance </td>
          <td rowSpan="2">
            
            <br /> Maximum travel speed
          </td>
          <td> Full load（km/h） </td> <td colSpan="3"> 13 </td>
        </tr>
        <tr>
          
          <td> No load（km/h） </td> <td colSpan="3"> 14 </td>
        </tr>
        <tr>
          
          <td rowSpan="2">
            
            <br /> Maximum lift speed
          </td>
          <td> Full load（mm/s） </td> <td> 280 </td> <td> 280 </td>
          <td> 265 </td>
        </tr>
        <tr>
          
          <td> No load（mm/s） </td> <td> 400 </td> <td> 400 </td>
          <td> 380 </td>
        </tr>
        <tr>
          
          <td rowSpan="2">
            
            <br /> Maximum lowering speed
          </td>
          <td> Full load（mm/s） </td> <td> 380 </td> <td> 400 </td>
          <td> 430 </td>
        </tr>
        <tr>
          
          <td> No load（mm/s） </td> <td> 350 </td> <td> 350 </td>
          <td> 360 </td>
        </tr>
        <tr>
          
          <td colSpan="2"> Maximum gradeability（%） </td> <td> 15 </td>
          <td> 15 </td> <td> 12 </td>
        </tr>
        <tr>
          
          <td rowSpan="4"> Dimensions </td> <td> Overall length </td>
          <td> Without forks（mm） </td> <td> 3046 </td> <td> 3046 </td>
          <td> 3134 </td>
        </tr>
        <tr>
          
          <td colSpan="2"> Overall width（mm） </td> <td colSpan="3"> 1520 </td>
        </tr>
        <tr>
          
          <td colSpan="2">
            
            <br /> Mast height at maximum lift (with backrest)（mm）
          </td>
          <td> 4270 </td> <td> 4270 </td> <td> 4280 </td>
        </tr>
        <tr>
          
          <td colSpan="2"> Mast lowered height（mm） </td>
          <td colSpan="3"> 2245 </td>
        </tr>
        <tr>
          
          <td rowSpan="11"> Power </td> <td rowSpan="2"> Tires </td>
          <td> Front wheel </td> <td colSpan="3"> 28×12.5-15 </td>
        </tr>
        <tr>
          
          <td> Rear wheel </td> <td colSpan="3"> 7.00-12 </td>
        </tr>
        <tr>
          
          <td colSpan="2"> Wheelbase（mm） </td> <td colSpan="3"> 2000 </td>
        </tr>
        <tr>
          
          <td> Tread </td> <td> Front wheel/rear wheel（mm） </td>
          <td colSpan="3"> 1200/1130 </td>
        </tr>
        <tr>
          
          <td> Self weight </td> <td> Without load（kg） </td> <td> 7400 </td>
          <td> 7800 </td> <td> 8950 </td>
        </tr>
        <tr>
          
          <td> Battery </td> <td> Voltage/capacity（V/Ah） </td>
          <td> 80/700 </td> <td> 80/720 </td> <td> 80/720 </td>
        </tr>
        <tr>
          
          <td rowSpan="2"> Motor </td> <td> Traveling（KW） </td>
          <td colSpan="3"> 11×2 </td>
        </tr>
        <tr>
          
          <td> Lifting（KW） </td> <td colSpan="3"> 12×2 </td>
        </tr>
        <tr>
          
          <td colSpan="2"> Way of control </td> <td colSpan="3"> AC </td>
        </tr>
        <tr>
          
          <td colSpan="2"> Operating pressure（Mpa） </td>
          <td colSpan="3"> 18.5 </td>
        </tr>
        <tr>
          
          <td colSpan="2"> Maximum drawbar pull（KN） </td>
          <td colSpan="3"> 40 </td>
        </tr>
      </table>
    </>
  );
};
export default TableVeiw;
