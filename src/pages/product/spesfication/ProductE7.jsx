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
          <td colSpan="3"> Model </td>
          <td></td>
          <td> CPD20Je </td>
          <td> CPD30Je </td>
        </tr>
        <tr>
          <td rowSpan="14"> Features </td>
          <td colSpan="2"> Power type </td>
          <td colSpan="3"> Battery </td>
        </tr>
        <tr>
          <td colSpan="2"> Rated load </td>
          <td>kg</td>
          <td> 2000 </td>
          <td> 2500 </td>
        </tr>
        <tr>
          <td colSpan="2"> Load center distance </td>
          <td>mm</td>
          <td> 500 </td>
          <td> 500 </td>
        </tr>
        <tr>
          <td colSpan="2"> Lift height </td>
          <td>mm</td>
          <td> 3000 </td>
          <td> 3000 </td>
        </tr>
        <tr>
          <td colSpan="2"> Free lift height</td>
          <td>mm</td>
          <td> 120 </td>
          <td> 160 </td>
        </tr>
        <tr>
          <td> Fork size </td>
          <td> L×W×T </td>
          <td> mm </td>
          <td> 1070×100×40 </td>
          <td> 1070×125×45 </td>
        </tr>
        <tr>
          <td> Mast tilt angle </td>
          <td> FR/RR </td>
          <td> 。 </td>
          <td> 6/10 </td>
          <td> 8/10 </td>
        </tr>
        <tr>
          <td colSpan="2"> Minimum turning radius </td>
          <td>mm</td>
          <td> 2135</td>
          <td>2497</td>
        </tr>
        <tr>
          <td colSpan="2"> Minimum right angle stacking aisle width </td>
          <td>mm</td>
          <td> 3542 </td>
          <td> 4181</td>
        </tr>
        <tr>
          <td colSpan="2"> Minimum right angle aisle width </td>
          <td>mm</td>
          <td> 2335 </td>
          <td> 2609</td>
        </tr>
        <tr>
          <td colSpan="2"> Minimum ground clearance </td>
          <td>mm</td>
          <td> 93 </td>
          <td> 120</td>
        </tr>
        <tr>
          <td colSpan="2"> Height of overhead guard </td>
          <td>mm</td>
          <td> 2132 </td>
          <td> 2180</td>
        </tr>
        <tr>
          <td colSpan="2"> Height form seat to overhead guard </td>
          <td>mm</td>
          <td> 1020 </td>
          <td> 980</td>
        </tr>
        <tr>
          <td colSpan="2"> Overhang (FR) </td>
          <td>mm</td>
          <td> 407</td>
          <td> 475</td>
        </tr>
        <tr>
          <td rowSpan="7"> Performance </td>
          <td rowSpan="2">
            <br />
            Maximum travel speed
          </td>
          <td> Full load </td>
          <td>km/h</td>
          <td> 12 </td>
          <td> 12 </td>
        </tr>
        <tr>
          <td> No load </td>
          <td>km/h</td>
          <td> 13 </td>
          <td> 12 </td>
        </tr>
        <tr>
          <td rowSpan="2">
            <br />
            Maximum lift speed
          </td>
          <td> Full load </td>
          <td>mm/s</td>
          <td> 240 </td>
          <td> 240 </td>
        </tr>
        <tr>
          <td> No load </td>
          <td>mm/s</td>
          <td> 400 </td>
          <td> 380 </td>
        </tr>
        <tr>
          <td rowSpan="2">
            <br />
            Maximum lowering speed
          </td>
          <td> Full load </td>
          <td>mm/s</td>
          <td> 460 </td>
          <td> 400 </td>
        </tr>
        <tr>
          <td> No load（mm/s） </td>
          <td>mm/s</td>
          <td> 430 </td>
          <td> 460 </td>
        </tr>
        <tr>
          <td colSpan="2"> Maximum gradeability </td>
          <td> % </td>
          <td colSpan="2"> 15 </td>
        </tr>
        <tr>
          <td rowSpan="4"> Dimensions </td>
          <td> Overall length </td>
          <td> Without forks </td>
          <td>mm</td>
          <td>2320</td>
          <td> 2609 </td>
        </tr>
        <tr>
          <td colSpan="2"> Overall width </td>
          <td>mm</td>
          <td>1072</td>
          <td> 1250 </td>
        </tr>
        <tr>
          <td colSpan="2">Mast height at maximum lift (with backrest) </td>
          <td>mm</td>
          <td>3930</td>
          <td> 4260 </td>
        </tr>
        <tr>
          <td colSpan="2"> Mast lowered height</td>
          <td>mm</td>
          <td>1990</td>
          <td> 2065 </td>
        </tr>
        <tr>
          <td rowSpan="11"> Power </td>
          <td rowSpan="2"> Tires </td>
          <td> Front wheel </td>
          <td></td>
          <td colSpan="2"> 23×9-10-18PR </td>
        </tr>
        <tr>
          <td> Rear wheel </td>
          <td></td>
          <td colSpan="2"> 18×7-8-14PR </td>
        </tr>
        <tr>
          <td colSpan="2"> Wheelbase </td>
          <td>mm</td>
          <td>1470</td>
          <td> 1700 </td>
        </tr>
        <tr>
          <td> Tread </td>
          <td> Front wheel/rear wheel </td>
          <td>mm</td>
          <td>894/920</td>
          <td> 1000/990</td>
        </tr>
        <tr>
          <td> Truck weight </td>
          <td> Without load</td>
          <td>kg</td>
          <td> 3220 </td>
          <td> 4550 </td>
        </tr>
        <tr>
          <td> Battery </td>
          <td> Voltage/capacity </td>
          <td>V/Ah</td>
          <td> 48/600 </td>
          <td> 48/630 </td>
        </tr>
        <tr>
          <td rowSpan="2"> Motor </td>
          <td> Traveling </td>
          <td>KW</td>
          <td> 8 </td>
          <td> 11.5 </td>
        </tr>
        <tr>
          <td> Lifting </td>
          <td>KW</td>
          <td> 8.6/10 </td>
          <td> 15 </td>
        </tr>
        <tr>
          <td colSpan="2"> Way of control </td>
          <td></td>
          <td> BC/AC </td>
          <td> AC/BC </td>
        </tr>
        <tr>
          <td colSpan="2"> Operating pressure </td>
          <td> Mpa </td>
          <td> 15.5 </td>
          <td> 18.5 </td>
        </tr>
        <tr>
          <td colSpan="2"> Maximum drawbar pull </td>
          <td>KN</td>
          <td> 13 </td>
          <td> 21 </td>
        </tr>
        <tr>
          <td colSpan="6">
            *The parameters are subject to change without notice.
          </td>
        </tr>
      </table>
    </>
  );
};
export default TableVeiw;
