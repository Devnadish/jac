import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TableVeiw = () => {
  return (
    <>
      <table cellPadding="1" cellSpacing="1">
        <tbody>
          <tr>
            <td colSpan="3" nowrap="">
              Model
            </td>
            <td nowrap=""> CPCD20H </td> <td nowrap=""> CPCD25H </td>
          </tr>
          <tr>
            <td rowSpan="14"> Features </td>
            <td colSpan="2" nowrap="">
              Power type
            </td>
            <td colSpan="2" nowrap="">
              Diesel
            </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Rated load（kg）
            </td>
            <td nowrap=""> 2000 </td> <td nowrap=""> 2500 </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Load center distance（mm）
            </td>
            <td colSpan="2" nowrap="">
              500
            </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Lift height（mm）
            </td>
            <td colSpan="2" nowrap="">
              3000
            </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Free lift height（mm）
            </td>
            <td colSpan="2" nowrap="">
              140
            </td>
          </tr>
          <tr>
            <td nowrap=""> Fork size </td> <td nowrap=""> L×W×T（mm） </td>
            <td colSpan="2" nowrap="">
              1070×122×40
            </td>
          </tr>
          <tr>
            <td nowrap=""> Mast tilt angle </td>
            <td nowrap=""> Front/Rear </td>
            <td colSpan="2" nowrap="">
              6°/12°
            </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Minimum turning radius（mm）
            </td>
            <td nowrap=""> 2170 </td> <td nowrap=""> 2230 </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Minimum right angle stacking aisle width（mm）
            </td>
            <td nowrap=""> 3635 </td> <td nowrap=""> 3695 </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Minimum right angle aisle width（mm）
            </td>
            <td nowrap=""> 2370 </td> <td nowrap=""> 2430 </td>
          </tr>
          <tr>
            <td rowSpan="2"> Minimum ground clearance </td>
            <td nowrap=""> Frame center(no load)（mm） </td>
            <td colSpan="2" nowrap="">
              115
            </td>
          </tr>
          <tr>
            <td nowrap=""> Mast Bottom（no load）（mm） </td>
            <td colSpan="2" nowrap="">
              110
            </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Height of overhead guard（mm）
            </td>
            <td colSpan="2" nowrap="">
              2070
            </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Overhang (FR)（mm）
            </td>
            <td colSpan="2" nowrap="">
              465
            </td>
          </tr>
          <tr>
            <td rowSpan="6"> Performance </td>
            <td rowSpan="2"> Maximum travel speed </td>
            <td nowrap=""> Full load（km/h） </td>
            <td colSpan="2" nowrap="">
              18
            </td>
          </tr>
          <tr>
            <td nowrap=""> No load（km/h） </td>
            <td colSpan="2" nowrap="">
              18
            </td>
          </tr>
          <tr>
            <td rowSpan="2"> Maximum lift speed </td>
            <td nowrap=""> Full load（mm/s） </td>
            <td colSpan="2" nowrap="">
              500
            </td>
          </tr>
          <tr>
            <td nowrap=""> No load（mm/s） </td>
            <td colSpan="2" nowrap="">
              700
            </td>
          </tr>
          <tr>
            <td nowrap=""> Maximum drawbar pull </td>
            <td nowrap=""> Full load（KN） </td> <td nowrap=""> 11.7 </td>
            <td nowrap=""> 11.4 </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Maximum gradeability（%）
            </td>
            <td nowrap=""> 20 </td> <td nowrap=""> 18 </td>
          </tr>
          <tr>
            <td rowSpan="4"> Dimensions </td>
            <td nowrap=""> Overall length </td>
            <td nowrap=""> Without forks（mm） </td> <td nowrap=""> 2485 </td>
            <td nowrap=""> 2560 </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Overall width（mm）
            </td>
            <td colSpan="2" nowrap="">
              1160
            </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Mast height at maximum lift (with backrest)（mm）
            </td>
            <td colSpan="2" nowrap="">
              4030
            </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
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
            <td nowrap=""> Front wheel </td>
            <td colSpan="2" nowrap="">
              7.00-12-12PR
            </td>
          </tr>
          <tr>
            <td nowrap=""> Rear wheel </td>
            <td colSpan="2" nowrap="">
              6.00-9-10PR
            </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Wheelbase（mm）
            </td>
            <td colSpan="2" nowrap="">
              1600
            </td>
          </tr>
          <tr>
            <td nowrap=""> Tread </td>
            <td nowrap=""> Front wheel/rear wheel（mm） </td>
            <td colSpan="2" nowrap="">
              970/970
            </td>
          </tr>
          <tr>
            <td nowrap=""> Self weight </td>
            <td nowrap=""> Without load（Kg） </td> <td nowrap=""> 3300 </td>
            <td nowrap=""> 3660 </td>
          </tr>
          <tr>
            <td rowSpan="10" nowrap="">
              Drive
            </td>
            <td nowrap=""> Battery </td>
            <td nowrap=""> Voltage/capacity（V/Ah） </td>
            <td colSpan="2" nowrap="">
              12/80
            </td>
          </tr>
          <tr>
            <td rowSpan="6" nowrap="">
              Engine
            </td>
            <td nowrap=""> Model </td> <td colSpan="2"> 4D27G31 Xinchang </td>
          </tr>
          <tr>
            <td nowrap=""> Rated output（kw/r.p.m） </td>
            <td colSpan="2" nowrap="">
              36.8/2500
            </td>
          </tr>
          <tr>
            <td nowrap=""> Rated torque（Nm/r.p.m） </td>
            <td colSpan="2" nowrap="">
              156/1700-1900
            </td>
          </tr>
          <tr>
            <td nowrap=""> Bore x stroke（mm） </td>
            <td colSpan="2" nowrap="">
              90×105
            </td>
          </tr>
          <tr>
            <td nowrap=""> Number of cylinders </td>
            <td colSpan="2" nowrap="">
              4
            </td>
          </tr>
          <tr>
            <td nowrap=""> Displacement（L） </td>
            <td colSpan="2" nowrap="">
              2.67
            </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Fuel tank capacity（L）
            </td>
            <td colSpan="2" nowrap="">
              55
            </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Transmissions (FWD/RWD)
            </td>
            <td colSpan="2"> 1/1 manual shift </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Operating pressure（Mpa）
            </td>
            <td colSpan="2" nowrap="">
              18.5
            </td>
          </tr>
          <tr>
            <td rowSpan="6"> Supplement </td>
            <td colSpan="2" nowrap="">
              Tire type (FR/RR)
            </td>
            <td colSpan="2" nowrap="">
              Pneumatic
            </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Number of wheels (FR/RR)（pcs）
            </td>
            <td colSpan="2" nowrap="">
              2/2
            </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Lowering speed (full load)（mm/s）
            </td>
            <td colSpan="2" nowrap="">
              450
            </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Lowering speed (no load)（mm/s）
            </td>
            <td colSpan="2" nowrap="">
              500
            </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Axle load distribution (full load) (FR/RR)（kg）
            </td>
            <td nowrap=""> 4770/530 </td> <td nowrap=""> 5544/616 </td>
          </tr>
          <tr>
            <td colSpan="2" nowrap="">
              Axle load distribution (no load) (FR/RR)（kg）
            </td>
            <td nowrap=""> 1320/1980 </td> <td nowrap=""> 1464/2196 </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default TableVeiw;
