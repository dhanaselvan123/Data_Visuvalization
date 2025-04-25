import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses","Profit"],
  ["2014", 1000, 400,200],
  ["2015", 1170, 460,250],
  ["2016", 660, 1120,300],
  ["2017", 1030, 540,350],
];

// Material chart options
export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales and Expenses over the Years",
  },
  colors:["rgb(53,138,148)","rgb(37,11,165)","#188310"],
};

export default function BarChart() {
  return (
    <Chart
      // Note the usage of Bar and not BarChart for the material version
      chartType="Bar"
      width="100%"
      height="390px"
      data={data}
      options={options}
    />
  );
}