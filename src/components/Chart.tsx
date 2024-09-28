type DoughnutChartProps = {
  percentage: number;
  radius: number;
  strokeWidth: number;
};

const DonutChart = ({
  percentage,
  radius,
  strokeWidth,
}: DoughnutChartProps) => {
  const containerSize = radius * 2 + strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

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
      <circle
        cx={containerSize / 2}
        cy={containerSize / 2}
        r={radius}
        fill={"transparent"}
        stroke={"#0F172A"}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        style={{ strokeDashoffset }}
      />
    </svg>
  );
};

export default DonutChart;
