type DoughnutChartProps = {
  percentage: number;
  radius: number;
  strokeWidth: number;
};

const DonutChart = ({ radius, strokeWidth }: DoughnutChartProps) => {
  const containerSize = radius * 2 + strokeWidth;

  return (
    <svg
      width={containerSize}
      height={containerSize}
      viewBox={`0 0 ${containerSize} ${containerSize}`}
    >
      <circle
        cx={containerSize / 2}
        cy={containerSize / 2}
        r={radius}
        fill={"transparent"}
        stroke={"#F8FAFC"}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default DonutChart;
