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
          <td colSpan="3"> Model </td> <td colSpan="2"> CPD30J </td>
          <td colSpan="2"> CPD35J </td>
        </tr>
        <tr>
          <td rowSpan="14"> Features </td> <td colSpan="2"> Power type </td>
          <td colSpan="4"> Battery </td>
        </tr>
        <tr>
          <td colSpan="2"> Rated load（） </td> <td colSpan="2"> 3000 </td>
          <td colSpan="2"> 3500 </td>
        </tr>
        <tr>
          <td colSpan="2"> Load center distance（mm） </td>
          <td colSpan="4"> 500 </td>
        </tr>
        <tr>
          <td colSpan="2"> Lift height（mm） </td> <td colSpan="4"> 3000 </td>
        </tr>
        <tr>
          <td colSpan="2"> Free lift height（mm） </td>
          <td colSpan="2"> 160 </td> <td colSpan="2"> 70 </td>
        </tr>
        <tr>
          <td> Fork size </td> <td> L×W×T（mm） </td>
          <td colSpan="2"> 1070×125×45 </td> <td colSpan="2"> 1070×125×50 </td>
        </tr>
        <tr>
          <td> Mast tilt angle </td> <td> Front/Rear </td>
          <td colSpan="4"> 8°/10° </td>
        </tr>
        <tr>
          <td colSpan="2"> Minimum turning radius（mm） </td>
          <td colSpan="2"> 2497 </td> <td colSpan="2"> 2520 </td>
        </tr>
        <tr>
          <td colSpan="2">Minimum right angle stacking aisle width（mm）</td>
          <td colSpan="2"> 4181 </td> <td colSpan="2"> 4204 </td>
        </tr>
        <tr>
          <td colSpan="2"> Minimum right angle aisle width（mm） </td>
          <td colSpan="2"> 2609 </td> <td colSpan="2"> 2720 </td>
        </tr>
        <tr>
          <td colSpan="2"> Minimum ground clearance（mm） </td>
          <td colSpan="4"> 120 </td>
        </tr>
        <tr>
          <td colSpan="2"> Height of overhead guard（mm） </td>
          <td colSpan="4"> 2180 </td>
        </tr>
        <tr>
          <td colSpan="2"> Height form seat to overhead guard（mm） </td>
          <td colSpan="4"> 980 </td>
        </tr>
        <tr>
          <td colSpan="2"> Overhang (FR)（mm） </td> <td colSpan="2"> 474 </td>
          <td colSpan="2"> 492 </td>
        </tr>
        <tr>
          <td rowSpan="7"> Performance </td>
          <td rowSpan="2">
            <br /> Maximum travel speed
          </td>
          <td> Full load（km/h） </td> <td colSpan="4"> 12 </td>
        </tr>
        <tr>
          <td> No load（km/h） </td> <td colSpan="4"> 13 </td>
        </tr>
        <tr>
          <td rowSpan="2">
            <br /> Maximum lift speed
          </td>
          <td> Full load（mm/s） </td> <td> 240 </td> <td> 260 </td>
          <td> 200 </td> <td> 240 </td>
        </tr>
        <tr>
          <td> No load（mm/s） </td> <td colSpan="2"> 400 </td>
          <td colSpan="2"> 380 </td>
        </tr>
        <tr>
          <td rowSpan="2">
            <br /> Maximum lowering speed
          </td>
          <td> Full load（mm/s） </td> <td colSpan="2"> 400 </td>
          <td colSpan="2"> 350 </td>
        </tr>
        <tr>
          <td> No load（mm/s） </td> <td colSpan="2"> 460 </td>
          <td colSpan="2"> 400 </td>
        </tr>
        <tr>
          <td colSpan="2"> Maximum gradeability（%） </td> <td> 15 </td>
          <td> 15 </td> <td> 10 </td> <td> 10 </td>
        </tr>
        <tr>
          <td rowSpan="4"> Dimensions </td> <td> Overall length </td>
          <td> Without forks（mm） </td> <td colSpan="2"> 2609 </td>
          <td colSpan="2"> 2627 </td>
        </tr>
        <tr>
          <td colSpan="2"> Overall width（mm） </td> <td colSpan="4"> 1250 </td>
        </tr>
        <tr>
          <td colSpan="2">
            <br /> Mast height at maximum lift (with backrest)（mm）
          </td>
          <td colSpan="4"> 4228 </td>
        </tr>
        <tr>
          <td colSpan="2"> Mast lowered height（mm） </td>
          <td colSpan="2"> 2065 </td> <td colSpan="2"> 2120 </td>
        </tr>
        <tr>
          <td rowSpan="11"> Power </td> <td rowSpan="2"> Tires </td>
          <td> Front wheel </td> <td colSpan="2"> 28×9-15-14PR </td>
          <td colSpan="2"> 28×9-15 </td>
        </tr>
        <tr>
          <td> Rear wheel </td> <td colSpan="4"> 6.50-10-10PR </td>
        </tr>
        <tr>
          <td colSpan="2"> Wheelbase（mm） </td> <td colSpan="4"> 1700 </td>
        </tr>
        <tr>
          <td> Tread </td> <td> Front wheel/rear wheel（mm） </td>
          <td colSpan="4"> 1000/990 </td>
        </tr>
        <tr>
          <td> Self weight </td> <td> Without load（kg） </td>
          <td colSpan="2"> 4960 </td> <td colSpan="2"> 5400 </td>
        </tr>
        <tr>
          <td> Battery </td> <td> Voltage/capacity（V/Ah） </td>
          <td colSpan="4"> 80/500 </td>
        </tr>
        <tr>
          <td rowSpan="2"> Motor </td> <td> Traveling（KW） </td>
          <td colSpan="4"> 16.6 </td>
        </tr>
        <tr>
          <td> Lifting（KW） </td> <td nowrap=""> 13 </td>
          <td nowrap=""> 13.5 </td> <td nowrap=""> 13 </td>
          <td nowrap=""> 13.5 </td>
        </tr>
        <tr>
          <td colSpan="2"> Way of control </td> <td> BC </td> <td> AC </td>
          <td> BC </td> <td> AC </td>
        </tr>
        <tr>
          <td colSpan="2"> Operating pressure（Mpa） </td>
          <td colSpan="4"> 18.5 </td>
        </tr>
        <tr>
          <td colSpan="2"> Maximum drawbar pull（KN） </td>
          <td colSpan="4"> 21 </td>
        </tr>
      </table>
    </>
  );
};
export default TableVeiw;
