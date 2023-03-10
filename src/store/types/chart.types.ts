import { Metrics } from "src/types/metrics";
import { PerformanceChartData } from "src/types/performance.types";

export interface ChartData {
  status: string;
  metrics: Metrics;
  data: PerformanceChartData[];
}
