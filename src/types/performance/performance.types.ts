export type PerformanceData = {
  CODVEND?: string;
  APELIDO?: string;
  META_VENDAS?: string;
  REALIZADO_VENDAS?: string;
  PESO_VENDAS?: string;
  RESULTADO_VENDAS?: string;
  RESULTADO_VENDAS_PESO?: string;
  META_MIXVENDAS?: string;
  REALIZADO_MIXVENDAS?: string;
  PESO_MIXVENDAS?: string;
  RESULTADO_MIXVENDAS?: string;
  META_RENTABILIDADE?: string;
  REALIZADO_RENTABILIDADE?: string;
  PESO_RENTABILIDADE?: string;
  RESULTADO_RENTABILIDADE?: string;
  RESULTADO_RENTABILIDADE_PESO?: string;
  META_TICKETMEDIO?: string;
  REALIZADO_TICKETMEDIO?: string;
  PESO_TICKETMEDIO?: string;
  RESULTADO_TICKETMEDIO?: string;
  RESULTADO_TICKETMEDIO_PESO?: string;
  META_POSITIVACAO?: string;
  REALIZADO_POSITIVACAO?: string;
  PESO_POSITIVACAO?: string;
  RESULTADO_POSITIVACAO?: string;
  RESULTADO_POSITIVACAO_PESO?: string;
  META_NOVOSCLIENTES?: string;
  REALIZADO_NOVOSCLIENTES?: string;
  PESO_NOVOS_CLIENTES?: string;
  RESULTADO_VENDAS_NOVOS_CLIENTES?: string;
  resultado_vendas_novos_clientes_peso?: string;
  META_DESCONTO?: string;
  REALIZADO_DESCONTO?: string;
  PESO_DESCONTO?: string;
  RESULTADO_DESCONTO?: string;
  RESULTADO_DESCONTO_PESO?: string;
  META_BONIFICACAO?: string;
  REALIZADO_BONIFICACAO?: string;
  PESO_BONIFICACAO?: string;
  RESULTADO_BONIFICACAO?: string;
  RESULTADO_BONIFICACAO_PESO?: string;
  RESULTADO?: string;
  RESULTADO_MIXVENDAS_PESO?: string;
};

export type PerformanceResponse = {
  performance: PerformanceData[];
};

export type PerformanceResponsePage = {
  meta?: string;
  realizado?: string;
  peso?: string;
  resultado?: string;
  resultadoPeso?: string;
  indicadores?: any[];
};

export interface PerformancePageParams
  extends PerformanceRequest,
  PerformancePages { }

export interface PerformanceResponsePageList extends PerformancePages {
  data: PerformanceResponsePage;
}

export type PerformanceChartData = {
  chart: {
    title?: string;
    subtitle?: string;
    color?: string;
    type: PerformanceChartType;
    data: any;
    legend?: string[];
  };
};

export type PerformanceChartType = 'bar' | 'pizza' | 'table' | 'linha' | 'coluna'

export type PerformanceRequest = {
  CODVEND: string;
  URLERP: string;
};

export interface PerformancePages {
  page:
  | 'newSales'
  | 'salesMix'
  | 'discount'
  | 'positivity'
  | 'bonus'
  | 'profitability'
  | 'monthlySalesTarget'
  | 'averageTicket';
}