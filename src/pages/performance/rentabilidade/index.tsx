import React from "react";
import { useSelector } from "react-redux";
import PerformancePage from "src/components/performance/page/page.performance";
import { RootState } from "src/store/store";

const Rentabilidade = () => {
  const result = useSelector((state: RootState) => state.performance.performancePages['profitability']);

  return (
    <PerformancePage metrics={result.metrics} data={result.data} page="profitability" />
  );
};

export default Rentabilidade;