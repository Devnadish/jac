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
          
          <td colSpan="4" rowSpan="2">
            
            Model
          </td>
          <td colSpan="2" rowSpan="2">
             
          </td>
          <td> CPD30He </td> <td> CPD35He </td> <td> CPD38He </td>
          <td> CPD40He </td> <td> CPD45He </td> <td> CPD50He </td>
        </tr>
        <tr>
          
          <td colSpan="6"> 156VVersatility Model- 156V </td>
        </tr>
        <tr>
          
          <td colSpan="4"> Power type </td> <td colSpan="2"> </td>
          <td colSpan="6"> Lithium battery </td>
        </tr>
        <tr>
          
          <td colSpan="4"> Rated load </td> <td colSpan="2"> kg </td>
          <td> 3000 </td> <td> 3500 </td> <td> 3800 </td> <td> 4000 </td>
          <td> 4500 </td> <td> 5000 </td>
        </tr>
        <tr>
          
          <td colSpan="4"> Load center distance </td> <td colSpan="2"> mm </td>
          <td> 500 </td> <td> 500 </td> <td> 500 </td> <td> 500 </td>
          <td colSpan="2"> 500 </td>
        </tr>
        <tr>
          
          <td colSpan="4"> Lift height </td> <td colSpan="2"> mm </td>
          <td> 3000 </td> <td> 3000 </td> <td> 3000 </td> <td> 3000 </td>
          <td colSpan="2"> 3000 </td>
        </tr>
        <tr>
          
          <td colSpan="4"> Free lift height </td> <td colSpan="2"> mm </td>
          <td> 150 </td> <td> 65 </td> <td> 70 </td> <td> 80 </td>
          <td colSpan="2"> 150 </td>
        </tr>
        <tr>
          
          <td colSpan="2"> Fork size </td> <td colSpan="2"> L×W×T </td>
          <td colSpan="2"> mm </td> <td> 1070×125×45 </td>
          <td> 1070×125×50 </td> <td colSpan="2"> 1070×150×50 </td>
          <td colSpan="2"> 1070×150×50 </td>
        </tr>
        <tr>
          
          <td colSpan="2"> Mast tilt angle </td>
          <td colSpan="2"> Front/Rear </td> <td colSpan="2"> 。 </td>
          <td colSpan="6"> 8/10 </td>
        </tr>
        <tr>
          
          <td colSpan="4"> Minimum turning radius </td>
          <td colSpan="2"> mm </td> <td> 2550 </td> <td> 2570 </td>
          <td> 2585 </td> <td> 2835 </td> <td> 3190 </td> <td> 3210 </td>
        </tr>
        <tr>
          
          <td colSpan="4" nowrap="nowrap">
            
            Minimum right angle stacking aisle width
          </td>
          <td colSpan="2"> mm </td> <td> 4025 </td> <td> 4045 </td>
          <td> 4065 </td> <td> 4325 </td> <td> 4915 </td> <td> 4935 </td>
        </tr>
        <tr>
          
          <td colSpan="4"> Minimum right angle aisle width </td>
          <td colSpan="2"> mm </td> <td> 2750 </td> <td> 2770 </td>
          <td> 2785 </td> <td> 3035 </td> <td> 2678 </td> <td> 2698 </td>
        </tr>
        <tr>
          
          <td colSpan="4"> Minimum ground clearance </td>
          <td colSpan="2"> mm </td> <td colSpan="2"> 140 </td> <td> 172 </td>
          <td> 212 </td> <td colSpan="2"> 180 </td>
        </tr>
        <tr>
          
          <td colSpan="4"> Height of overhead guard </td>
          <td colSpan="2"> mm </td> <td colSpan="2"> 2090 </td> <td> 2105 </td>
          <td> 2140 </td> <td colSpan="2"> 2280 </td>
        </tr>
        <tr>
          
          <td colSpan="4"> Height from seat to overhead guard </td>
          <td colSpan="2"> mm </td> <td colSpan="2"> 1000 </td> <td> 980 </td>
          <td> 945 </td> <td colSpan="2"> 950 </td>
        </tr>
        <tr>
          
          <td colSpan="4"> Front overhang </td> <td colSpan="2"> mm </td>
          <td> 475 </td> <td> 485 </td> <td> 495 </td> <td> 490 </td>
          <td colSpan="2"> 547 </td>
        </tr>
        <tr>
          
          <td rowSpan="2"> Maximum travel speed </td>
          <td colSpan="3"> Full load </td>
          <td colSpan="2" rowSpan="2">
            
            km/h
          </td>
          <td colSpan="2"> 20 </td> <td> 19 </td> <td> 19 </td>
          <td colSpan="2"> 18 </td>
        </tr>
        <tr>
          
          <td colSpan="3"> No load </td> <td colSpan="3"> 20 </td> <td> 20 </td>
          <td colSpan="2"> 18 </td>
        </tr>
        <tr>
          
          <td rowSpan="2"> Maximum lift speed </td>
          <td colSpan="3"> Full load </td>
          <td colSpan="2" rowSpan="2">
            
            mm/s
          </td>
          <td> 470 </td> <td> 420 </td> <td> 380 </td> <td> 370 </td>
          <td> 350 </td> <td> 330 </td>
        </tr>
        <tr>
          
          <td colSpan="3"> No load </td> <td> 500 </td> <td> 420 </td>
          <td> 420 </td> <td> 420 </td> <td> 420 </td> <td> 420 </td>
        </tr>
        <tr>
          
          <td rowSpan="2"> Maximum lowering speed </td>
          <td colSpan="3"> Full load </td>
          <td colSpan="2" rowSpan="2">
            
            mm/s
          </td>
          <td> 460 </td> <td> 360 </td> <td> 500 </td> <td> 480 </td>
          <td> 440 </td> <td> 450 </td>
        </tr>
        <tr>
          
          <td colSpan="3"> No load </td> <td> 430 </td> <td> 330 </td>
          <td> 480 </td> <td> 450 </td> <td> 430 </td> <td> 430 </td>
        </tr>
        <tr>
          
          <td> Overall length </td> <td colSpan="3"> Without forks </td>
          <td colSpan="2"> mm </td> <td> 2765 </td> <td> 2810 </td>
          <td> 2824 </td> <td> 2950 </td> <td colSpan="2"> 3190 </td>
        </tr>
        <tr>
          
          <td colSpan="4"> Overall width </td> <td colSpan="2"> mm </td>
          <td colSpan="2"> 1230 </td> <td> 1255 </td> <td> 1435 </td>
          <td colSpan="2"> 1480 </td>
        </tr>
        <tr>
          
          <td colSpan="4">
            
            Mast height at maximum lift (with backrest)
          </td>
          <td colSpan="2"> mm </td> <td colSpan="4"> 4260 </td>
          <td colSpan="2"> 4270 </td>
        </tr>
        <tr>
          
          <td colSpan="4"> Standard mast height </td> <td colSpan="2"> mm </td>
          <td colSpan="3"> 2075 </td> <td> 2125 </td>
          <td colSpan="2"> 2230 </td>
        </tr>
        <tr>
          
          <td rowSpan="2"> Tires </td> <td colSpan="3"> Front wheel </td>
          <td colSpan="2"> </td> <td colSpan="2"> 28×9-15-14PR </td>
          <td> 250-15-16PR </td> <td> 250-15-16PR </td>
          <td colSpan="2"> 300-15-20RP </td>
        </tr>
        <tr>
          
          <td colSpan="3"> Rear wheel </td> <td colSpan="2"> </td>
          <td colSpan="3"> 6.50-10-10PR </td> <td> 7.00-12-12PR </td>
          <td colSpan="2"> 7.00-12-12RP </td>
        </tr>
        <tr>
          
          <td colSpan="4"> Wheelbase </td> <td colSpan="2"> mm </td>
          <td colSpan="3"> 1760 </td> <td> 1900 </td>
          <td colSpan="2"> 2000 </td>
        </tr>
        <tr>
          
          <td> Tread </td> <td colSpan="3"> Front wheel/rear wheel </td>
          <td colSpan="2"> mm </td> <td colSpan="2"> 1000/970 </td>
          <td> 1015/970 </td> <td> 1160/1048 </td>
          <td colSpan="2"> 1182/1202 </td>
        </tr>
        <tr>
          
          <td> Self weight </td> <td colSpan="3"> Without load </td>
          <td colSpan="2"> kg </td> <td> 4150 </td> <td> 4550 </td>
          <td> 4880 </td> <td> 5340 </td> <td> 6350 </td> <td> 6720 </td>
        </tr>
        <tr>
          
          <td rowSpan="3"> Lithium battery </td> <td colSpan="3"> Voltage </td>
          <td colSpan="2"> V </td> <td colSpan="6"> 156V </td>
        </tr>
        <tr>
          
          <td colSpan="2" rowSpan="2">
            
            Capacity
          </td>
          <td> Maximum climbing ability of 15% </td>
          <td colSpan="2" rowSpan="2">
            
            Ah
          </td>
          <td colSpan="3" nowrap="nowrap">
            
            165Ah
          </td>
          <td nowrap="nowrap"> / </td> <td colSpan="2"> / </td>
        </tr>
        <tr>
          
          <td> Maximum climbing ability of 20% </td>
          <td colSpan="4" nowrap="nowrap">
            
            220Ah
          </td>
          <td colSpan="2"> 220AH(18%) </td>
        </tr>
        <tr>
          
          <td rowSpan="2"> Motor </td> <td colSpan="3"> Traveling </td>
          <td colSpan="2"> kW </td> <td colSpan="4"> 18 </td>
          <td colSpan="2"> 20 </td>
        </tr>
        <tr>
          
          <td colSpan="3"> Lifting </td> <td colSpan="2"> kW </td>
          <td colSpan="4" nowrap="nowrap">
            
            20
          </td>
          <td colSpan="2"> 20 </td>
        </tr>
        <tr>
          
          <td colSpan="6"> Way of motor control </td>
          <td colSpan="6"> Permanent magnet </td>
        </tr>
        <tr>
          
          <td colSpan="5"> Operating pressure </td> <td> Mpa </td>
          <td colSpan="4"> 18.5 </td> <td colSpan="2"> 19.5 </td>
        </tr>
        <tr>
          
          <td colSpan="5"> Maximum drawbar pull </td> <td> kN </td>
          <td> 20 </td> <td> 21 </td> <td> 22 </td> <td> 22 </td> <td> 29 </td>
          <td> 30 </td>
        </tr>
      </table>
    </>
  );
};
export default TableVeiw;
