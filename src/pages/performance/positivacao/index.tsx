import React from "react";
import { useSelector } from "react-redux";
import PerformancePage from "src/components/performance/page/page.performance";
import { RootState } from "src/store/store";

const Positivacao = () => {
  const result = useSelector((state: RootState) => state.performance.performancePages['positivity']);

  return (
    <PerformancePage metrics={result.metrics} data={result.data} page="positivity" />
  );
};

export default Positivacao;