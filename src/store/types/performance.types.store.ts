import { Metrics } from "src/types/metrics";
import { EntityState, FetchStatus } from ".";
import { ChartData } from "./chart.types";

export interface Performance extends EntityState<Metrics> {
  nickname: string;
  result: string;
  newSales: ChartData;
  salesMix: ChartData;
  discount: ChartData;
  positivity: ChartData;
  profitability: ChartData;
  monthlySalesTarget: ChartData;
  averageTicket: ChartData;
}

export interface PerformanceState extends Performance {
  status: FetchStatus;
  error: boolean;
  nickname: string;
  performanceResult: string;
  engagementResult: string;
  performancePages: any;
  statusPage: FetchStatus;
  statusHome: FetchStatus;
}