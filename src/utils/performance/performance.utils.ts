import { PerformanceData } from "src/types/performance/performance.types";

export const setMetrics = (
  goal?: string,
  realized?: string,
  percentage?: string,
  wheight?: string,
  result?: string,
) => {
  return {
    goal: goal,
    realized: realized,
    percentage: percentage,
    wheight: wheight,
    result: result,
  };
};

export const getMetrics = (data: PerformanceData): any => {
  return {
    newSales: setMetrics(
      data.META_NOVOSCLIENTES,
      data.REALIZADO_NOVOSCLIENTES,
      data.RESULTADO_VENDAS_NOVOS_CLIENTES,
      data.PESO_NOVOS_CLIENTES,
      data.resultado_vendas_novos_clientes_peso,
    ),
    salesMix: setMetrics(
      data.META_MIXVENDAS,
      data.REALIZADO_MIXVENDAS,
      data.RESULTADO_MIXVENDAS,
      data.PESO_MIXVENDAS,
      data.RESULTADO_MIXVENDAS_PESO,
    ),
    discount: setMetrics(
      data.META_DESCONTO,
      data.REALIZADO_DESCONTO,
      data.RESULTADO_DESCONTO,
      data.PESO_DESCONTO,
      data.RESULTADO_DESCONTO_PESO,
    ),

    positivity: setMetrics(
      data.META_POSITIVACAO,
      data.REALIZADO_POSITIVACAO,
      data.RESULTADO_POSITIVACAO,
      data.PESO_POSITIVACAO,
      data.RESULTADO_POSITIVACAO_PESO,
    ),
    bonus: setMetrics(
      data.META_BONIFICACAO,
      data.REALIZADO_BONIFICACAO,
      data.RESULTADO_BONIFICACAO,
      data.PESO_BONIFICACAO,
      data.RESULTADO_BONIFICACAO_PESO,
    ),
    profitability: setMetrics(
      data.META_RENTABILIDADE,
      data.REALIZADO_RENTABILIDADE,
      data.RESULTADO_RENTABILIDADE,
      data.PESO_RENTABILIDADE,
      data.RESULTADO_RENTABILIDADE_PESO,
    ),
    monthlySalesTarget: setMetrics(
      data.META_VENDAS,
      data.REALIZADO_VENDAS,
      data.RESULTADO_VENDAS,
      data.PESO_VENDAS,
      data.RESULTADO_VENDAS_PESO,
    ),
    averageTicket: setMetrics(
      data.META_TICKETMEDIO,
      data.REALIZADO_TICKETMEDIO,
      data.RESULTADO_TICKETMEDIO,
      data.PESO_TICKETMEDIO,
      data.RESULTADO_TICKETMEDIO_PESO,
    ),
  };
};