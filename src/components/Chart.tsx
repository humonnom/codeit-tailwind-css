type DoughnutChartProps = {
  percentage: number;
  radius: number;
  strokeWidth: number;
};

const DonutChart = ({}: DoughnutChartProps) => {
  return (
    <svg width={100} height={100} viewBox={"0 0 100 100"}>
      <circle cx="50" cy="50" r="50" />
    </svg>
  );
};

export default DonutChart;
