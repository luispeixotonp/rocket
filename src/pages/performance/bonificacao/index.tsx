import React from "react";
import { useSelector } from "react-redux";
import PerformancePage from "src/components/performance/page/page.performance";
import { RootState } from "src/store/store";

const Bonificacao = () => {
  const result = useSelector((state: RootState) => state.performance.performancePages['bonus']);
  
return (
    <PerformancePage metrics={result.metrics} data={result.data} page="bonus" />
  );
};

export default Bonificacao;