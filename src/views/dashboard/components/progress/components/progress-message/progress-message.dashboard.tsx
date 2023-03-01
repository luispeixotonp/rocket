import React from "react";
import { Text } from "./styles";

interface DashboardProgressMessageProps {
  percentage: number;
}

const DashboardProgressMessage: React.FC<DashboardProgressMessageProps> = ({
  percentage,
}) => {
  let status = "";
  if (percentage >= 0 && percentage < 30) status = "bad";
  else if (percentage >= 30 && percentage < 60) status = "middle";
  else if (percentage >= 60 && percentage <= 100) status = "good";

  const message: any = {
    good: "Parabéns, Time de vendas está em alta performance!",
    middle: "Time de vendas está com performance média",
    bad: "Time de vendas está com performance baixa",
    "": "",
  }

  return (
    <Text>
      {message[status]}
    </Text>
  )
};

export default DashboardProgressMessage;