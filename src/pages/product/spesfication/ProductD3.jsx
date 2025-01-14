import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cpm from "../productCpm";
import prod from "../product.json";

import { useTranslation } from "react-i18next";

const TableVeiw = () => {
  return (
    <>
      <table cellPadding="1" cellSpacing="1">
        
        <tr>
          
          <td colSpan="4" nowrap="">
            
            Model
          </td>
          <td> CPCD20J </td> <td> CPCD25J </td>
        </tr>
        <tr>
          
          <td rowSpan="14"> Features </td>
          <td colSpan="3" nowrap="">
            
            Power type
          </td>
          <td colSpan="2" nowrap="">
            
            Diesel
          </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Rated load（kg）
          </td>
          <td> 2000 </td> <td> 2500 </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Load center distance（mm）
          </td>
          <td colSpan="2" nowrap="">
            
            500
          </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Lift height（mm）
          </td>
          <td colSpan="2" nowrap="">
            
            3000
          </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Free lift height（mm）
          </td>
          <td colSpan="2" nowrap="">
            
            140
          </td>
        </tr>
        <tr>
          
          <td nowrap=""> Fork size </td>
          <td colSpan="2" nowrap="">
            
            L×W×T（mm）
          </td>
          <td colSpan="2" nowrap="">
            
            1070×122×40
          </td>
        </tr>
        <tr>
          
          <td nowrap=""> Mast tilt angle </td>
          <td colSpan="2" nowrap="">
            
            Front/Rear
          </td>
          <td colSpan="2" nowrap="">
            
            6°/12°
          </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Minimum turning radius（mm）
          </td>
          <td> 2245 </td> <td> 2300 </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Minimum right angle stacking aisle width（mm）
          </td>
          <td> 4021 </td> <td> 4076 </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Minimum right angle aisle width（mm）
          </td>
          <td> 2240 </td> <td> 2295 </td>
        </tr>
        <tr>
          
          <td rowSpan="2"> Minimum ground clearance </td>
          <td colSpan="2" nowrap="">
            
            Frame center(no load)（mm）
          </td>
          <td colSpan="2" nowrap="">
            
            123
          </td>
        </tr>
        <tr>
          
          <td colSpan="2" nowrap="">
            
            Mast Bottom（no load）（mm）
          </td>
          <td colSpan="2" nowrap="">
            
            115
          </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Height of overhead guard（mm）
          </td>
          <td colSpan="2" nowrap="">
            
            2090
          </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Overhang (FR)（mm）
          </td>
          <td colSpan="2" nowrap="">
            
            476
          </td>
        </tr>
        <tr>
          
          <td rowSpan="6"> Performance </td>
          <td rowSpan="2">
            
            <br /> Maximum travel speed
          </td>
          <td colSpan="2" nowrap="">
            
            Full load（km/h）
          </td>
          <td colSpan="2" nowrap="">
            
            19
          </td>
        </tr>
        <tr>
          
          <td colSpan="2" nowrap="">
            
            No load（km/h）
          </td>
          <td colSpan="2" nowrap="">
            
            19.5
          </td>
        </tr>
        <tr>
          
          <td rowSpan="2">
            
            <br /> Maximum lift speed
          </td>
          <td colSpan="2" nowrap="">
            
            Full load（mm/s）
          </td>
          <td> 530 </td> <td> 490 </td>
        </tr>
        <tr>
          
          <td colSpan="2" nowrap="">
            
            No load（mm/s）
          </td>
          <td> 585 </td> <td> 530 </td>
        </tr>
        <tr>
          
          <td colSpan="2" nowrap="">
            
            Maximum drawbar pull
          </td>
          <td> Full load（KN） </td>
          <td colSpan="2" nowrap="">
            
            17
          </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Maximum gradeability（%）
          </td>
          <td colSpan="2" nowrap="">
            
            20
          </td>
        </tr>
        <tr>
          
          <td rowSpan="4"> Dimensions </td> <td nowrap=""> Overall length </td>
          <td colSpan="2" nowrap="">
            
            Without forks（mm）
          </td>
          <td> 2535 </td> <td> 2595 </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Overall width（mm）
          </td>
          <td colSpan="2" nowrap="">
            
            1160
          </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Mast height at maximum lift (with backrest)（mm）
          </td>
          <td colSpan="2" nowrap="">
            
            4015
          </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Mast lowered height（mm）
          </td>
          <td colSpan="2" nowrap="">
            
            1995
          </td>
        </tr>
        <tr>
          
          <td rowSpan="5"> Chassis </td>
          <td rowSpan="2" nowrap="">
            
            Tires
          </td>
          <td colSpan="2" nowrap="">
            
            Front wheel
          </td>
          <td colSpan="2" nowrap="">
            
            7.00-12-12PR
          </td>
        </tr>
        <tr>
          
          <td colSpan="2" nowrap="">
            
            Rear wheel
          </td>
          <td colSpan="2" nowrap="">
            
            6.00-9-10PR
          </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Wheelbase（mm）
          </td>
          <td colSpan="2" nowrap="">
            
            1600
          </td>
        </tr>
        <tr>
          
          <td nowrap=""> Tread </td>
          <td colSpan="2" nowrap="">
            
            Front wheel/rear wheel（mm）
          </td>
          <td colSpan="2" nowrap="">
            
            970/970
          </td>
        </tr>
        <tr>
          
          <td nowrap=""> Self weight </td>
          <td colSpan="2" nowrap="">
            
            Without load（Kg）
          </td>
          <td> 3400 </td> <td> 3800 </td>
        </tr>
        <tr>
          
          <td rowSpan="10" nowrap="">
            
            Drive
          </td>
          <td nowrap=""> Battery </td>
          <td colSpan="2" nowrap="">
            
            Voltage/capacity（V/Ah）
          </td>
          <td colSpan="2" nowrap="">
            
            12/80
          </td>
        </tr>
        <tr>
          
          <td rowSpan="6" nowrap="">
            
            Engine
          </td>
          <td colSpan="2" nowrap="">
            
            Model
          </td>
          <td colSpan="2" nowrap="">
            
            AK-C240PKJ-30
          </td>
        </tr>
        <tr>
          
          <td colSpan="2" nowrap="">
            
            Rated output（kw/r.p.m）
          </td>
          <td colSpan="2" nowrap="">
            
            34.3～36.5/2500
          </td>
        </tr>
        <tr>
          
          <td colSpan="2" nowrap="">
            
            Rated torque（Nm/r.p.m）
          </td>
          <td colSpan="2" nowrap="">
            
            137.7/1800
          </td>
        </tr>
        <tr>
          
          <td colSpan="2" nowrap="">
            
            Bore x stroke（mm）
          </td>
          <td colSpan="2" nowrap="">
            
            86×102
          </td>
        </tr>
        <tr>
          
          <td colSpan="2" nowrap="">
            
            Number of cylinders
          </td>
          <td colSpan="2" nowrap="">
            
            4
          </td>
        </tr>
        <tr>
          
          <td colSpan="2" nowrap="">
            
            Displacement（L）
          </td>
          <td colSpan="2" nowrap="">
            
            2.369
          </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Fuel tank capacity（L）
          </td>
          <td colSpan="2" nowrap="">
            
            60
          </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Transmissions (FWD/RWD)
          </td>
          <td colSpan="2"> 1/1 electro-hydraulic directional valve </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Operating pressure（Mpa）
          </td>
          <td colSpan="2"> 17 </td>
        </tr>
        <tr>
          
          <td rowSpan="6"> Supplement </td>
          <td colSpan="3" nowrap="">
            
            Tire type (FR/RR)
          </td>
          <td colSpan="2" nowrap="">
            
            Pneumatic
          </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Number of wheels (FR/RR)（pcs）
          </td>
          <td colSpan="2" nowrap="">
            
            2/2
          </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Lowering speed (full load)（mm/s）
          </td>
          <td colSpan="2" nowrap="">
            
            450
          </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Lowering speed (no load)（mm/s）
          </td>
          <td colSpan="2" nowrap="">
            
            400
          </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Axle load distribution (full load) (FR/RR)（kg）
          </td>
          <td> 4752/648 </td> <td> 5544/756 </td>
        </tr>
        <tr>
          
          <td colSpan="3" nowrap="">
            
            Axle load distribution (no load) (FR/RR)（kg）
          </td>
          <td> 1530/1870 </td> <td> 1710/2090 </td>
        </tr>
      </table>
    </>
  );
};
export default TableVeiw;
