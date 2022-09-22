/** @format */

import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const valueArray = props.datapoints.map((data) => {
    return data.value;
  });
  const totalMax = Math.max(...valueArray);
  return (
    <div className='chart'>
      {props.datapoints.map((data) => {
        return (
          <ChartBar
            key={data.label}
            label={data.label}
            value={data.value}
            maxValue={totalMax}
          />
        );
      })}
    </div>
  );
}

export default Chart;
