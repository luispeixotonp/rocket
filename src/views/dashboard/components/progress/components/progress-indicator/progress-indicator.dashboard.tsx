import React, { useState } from "react";
import { Text } from "./styles";

interface ProgressCircleProps {
  targetPercentage: number;
  size: number;
}

const DashboardProgressIndicato: React.FC<ProgressCircleProps> = ({ targetPercentage, size }) => {
  const [percentage, setPercentage] = useState(0);

  React.useEffect(() => {
    let currentPercentage = 0;
    const interval = setInterval(() => {
      currentPercentage =
        currentPercentage >= targetPercentage
          ? targetPercentage
          : currentPercentage + 5;
      setPercentage(currentPercentage);
    }, 100);

    return () => clearInterval(interval);
  }, [targetPercentage]);

  const circleSize = size;
  const circleThickness = 20;
  const circleRadius = circleSize / 2 - circleThickness / 2;
  const circumference = 2 * Math.PI * circleRadius;

  const progress = percentage / 100;
  const dashoffset = circumference * (1 - progress);

  let strokeColor = "";
  if (percentage >= 0 && percentage < 30) {
    strokeColor = "red";
  } else if (percentage >= 30 && percentage < 60) {
    strokeColor = "orange";
  } else if (percentage >= 60 && percentage <= 100) {
    strokeColor = "#6CBC0B";
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <svg
        width={circleSize}
        height={circleSize}
        viewBox={`0 0 ${circleSize} ${circleSize}`}
      >
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={circleRadius}
          fill="transparent"
          stroke="#AFADAB"
          strokeWidth={circleThickness}
        />
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={circleRadius}
          fill="transparent"
          stroke={strokeColor}
          strokeWidth={circleThickness}
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${circleSize / 2} ${circleSize / 2})`}
          style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
        />

        <Text
          x={circleSize / 2}
          y={circleSize / 2}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {percentage}%
        </Text>
      </svg>
    </div >
  );
};

export default DashboardProgressIndicato;