import React from "react";
import { useSelector } from "react-redux";
import PerformancePage from "src/components/performance/page/page.performance";
import { RootState } from "src/store/store";

const MixVendas = () => {
  const result = useSelector((state: RootState) => state.performance.performancePages['salesMix']);

  return (
    <PerformancePage metrics={result.metrics} data={result.data} page="salesMix" />
  );
};

export default MixVendas;