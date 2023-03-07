// @ts-nocheck
// @ts-ignore
import { Metrics } from "src/types/metrics";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {

  // PerformancePageParams,
  PerformanceRequest,
  PerformanceResponsePage
} from "src/types/performance/performance.types";

// import { PerformanceService } from "src/service/performance/performance.service";

// import { getMetrics } from "src/utils/performance/performance.utils";
import { PerformanceState } from "./types/performance.types.store";
import { RootState } from "./store";
import {
  averageTicketMock,
  bonusMock,

  // chartDataMock,
  discountMock,
  monthlySalesTargetMock,
  newSalesMock,
  positivityMock,
  profitabilityMock,
  salesMixMock
} from "src/mock/performance/performance.mock";

export const initialStateMetrics: Metrics = {
  goal: '0',
  realized: '0',
  percentage: '0',
  wheight: '0',
  result: '0',
};

const PerformancePages: any = {
  monthlySalesTarget: {
    url: 'metaVendas',
    title: 'Meta de Vendas',
    CODVEND: '',
    schema: 'MonthlySalesTarget',
    metrics: {
      goal: 'R$ 110.000',
      realized: 'R$ 33.000',
      percentage: '30',
      wheight: '10',
      result: '3',
    },
    data: monthlySalesTargetMock,
  },
  salesMix: {
    url: 'mixVendas',
    title: 'Mix de Vendas',
    CODVEND: '',
    metrics: {
      goal: '30 sku',
      realized: '50 sku',
      percentage: '100',
      wheight: '10',
      result: '20',
    },
    data: salesMixMock,
  },
  profitability: {
    url: 'rentabilidade',
    title: 'Rentabilidade',
    CODVEND: '',
    metrics: {
      goal: '15%',
      realized: '10%',
      percentage: '66',
      wheight: '5',
      result: '3',
    },
    data: profitabilityMock,
  },
  averageTicket: {
    url: 'ticket',
    schema: 'AverageTicket',
    title: 'Ticket Médio',
    CODVEND: '',
    metrics: {
      goal: 'R$ 1.000',
      realized: 'R$ 1.000',
      percentage: '100',
      wheight: '10',
      result: '10',
    },
    data: averageTicketMock,
  },
  positivity: {
    url: 'positivacao',
    title: 'Positivação',
    CODVEND: '',
    metrics: {
      goal: '90%',
      realized: '98%',
      percentage: '100',
      wheight: '10',
      result: '8',
    },
    data: positivityMock,
  },
  newSales: {
    url: 'novosClientes',
    title: 'Novas Vendas',
    CODVEND: '',
    metrics: {
      goal: '10',
      realized: '0 qtd',
      percentage: '0',
      wheight: '10',
      result: '0',
    },
    data: newSalesMock,
  },
  discount: {
    url: 'desconto',
    title: 'Desconto',
    CODVEND: '',
    metrics: {
      goal: '10%',
      realized: '0%',
      percentage: '0',
      wheight: '10',
      result: '0',
    },
    data: discountMock,
  },
  bonus: {
    url: 'bonificacao',
    title: 'Bonificação',
    CODVEND: '',
    metrics: {
      goal: 'R$ 100,00',
      realized: 'R$ 40,00',
      percentage: '40',
      wheight: '10',
      result: '6',
    },
    data: bonusMock,
  },
};

const initialState: PerformanceState = {
  status: 'idle',
  statusPage: 'idle',
  statusHome: 'idle',
  error: false,
  entities: {},
  performanceResult: '0',
  engagementResult: '76',
  nickname: '',
  performancePages: PerformancePages,
};

export const fetchPerformanceHome = createAsyncThunk(
  'performance/fetchPerformanceHome',
  async (params: PerformanceRequest) => {
    try {
      console.log('params', params);

      // const result = await PerformanceService.getHome(
      //   params,
      //   'Vidya',
      //   'f7wynpM',
      // );
      const result = {
        "performance": [
          {
            "CODVEND": "36",
            "APELIDO": "ANIBAL FURTADO",
            "META_VENDAS": "R$ 120.000,00",
            "REALIZADO_VENDAS": "R$ ,00",
            "PESO_VENDAS": "10",
            "RESULTADO_VENDAS": "0",
            "RESULTADO_VENDAS_PESO": "0",
            "META_MIXVENDAS": "30 sku",
            "REALIZADO_MIXVENDAS": "0 sku",
            "PESO_MIXVENDAS": "10",
            "RESULTADO_MIXVENDAS": "0",
            "RESULTADO_MIXVENDAS_PESO": "0",
            "META_RENTABILIDADE": "15 %",
            "REALIZADO_RENTABILIDADE": "0 %",
            "PESO_RENTABILIDADE": "10",
            "RESULTADO_RENTABILIDADE": "0",
            "RESULTADO_RENTABILIDADE_PESO": "0",
            "META_TICKETMEDIO": "R$ 1.500,00",
            "REALIZADO_TICKETMEDIO": "R$ ",
            "PESO_TICKETMEDIO": "5",
            "RESULTADO_TICKETMEDIO": "0",
            "RESULTADO_TICKETMEDIO_PESO": "0",
            "META_POSITIVACAO": "90 %",
            "REALIZADO_POSITIVACAO": "0 %",
            "PESO_POSITIVACAO": "10",
            "RESULTADO_POSITIVACAO": "0",
            "RESULTADO_POSITIVACAO_PESO": "0",
            "META_NOVOSCLIENTES": "10 qtd",
            "REALIZADO_NOVOSCLIENTES": "0 qtd",
            "PESO_NOVOS_CLIENTES": "10",
            "RESULTADO_VENDAS_NOVOS_CLIENTES": "0",
            "resultado_vendas_novos_clientes_peso": "0",
            "META_DESCONTO": "10 %",
            "REALIZADO_DESCONTO": "0 %",
            "PESO_DESCONTO": "5",
            "RESULTADO_DESCONTO": "0",
            "RESULTADO_DESCONTO_PESO": "0",
            "META_BONIFICACAO": "R$ 100,00",
            "REALIZADO_BONIFICACAO": "R$ ,00",
            "PESO_BONIFICACAO": "5",
            "RESULTADO_BONIFICACAO": "100",
            "RESULTADO_BONIFICACAO_PESO": "20",
            "RESULTADO": "30.76923076923076923076923076923076923077"
          }
        ]
      } as PerformanceResponseHome;
      if (result === null) return null;

      return result;

    } catch (error) {
      console.error('error', error);

      return null;
    }
  },
);

export const fetchPerformancePage = createAsyncThunk(
  'performance/fetchPerformancePage',
  async (page: string, { getState }) => {
    // const URLERP = (getState() as RootState).servers.currentServer?.ipImage;
    const CODVEND = (getState() as RootState).auth.CODVEND;

    let data: PerformanceResponsePage
    try {
      // const result = await PerformanceService.getPage(
      //   PerformancePages[page].url,
      //   'vidya',
      //   'f7wynpM',

      //   // URLERP ?? '',
      //   // CODVEND ?? '',
      //   'http://acaifruit.fmcdatacom.com.br:8648',
      //   '36',

      // );
      const result = {
        "meta": "15 %",
        "realizado": "0 %",
        "peso": "10",
        "resultado": "0",
        "resultadoPeso": "0",
        "indicadores": [
          {
            "name": "TOP 5 - Vendas de maior rentabilidade",
            "type": "table",
            "fields": [
              {
                "label": "Pedido"
              },
              {
                "label": "Parceiro"
              },
              {
                "label": "Valor"
              },
              {
                "label": "Rentabilidade"
              },
              {}
            ],
            "data": []
          },
          {
            "name": "TOP 5 - Vendas de menor rentabilidade",
            "type": "table",
            "fields": [
              {
                "label": "Pedido"
              },
              {
                "label": "Parceiro"
              },
              {
                "label": "Valor"
              },
              {
                "label": "Rentabilidade"
              },
              {}
            ],
            "data": []
          }
        ]
      } as PerformanceResponsePage;
      if (result === null) return null;
      data = result;

      return {
        data,
        page: page,
        CODVEND: CODVEND ?? '',
      };
    }
    catch (error) {
      console.error('error', error);

      return null;
    }
  },
);

const performanceSlice = createSlice({
  name: 'performance',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPerformanceHome.pending, (state) => {
        state.statusHome = 'loading';
      })
      .addCase(fetchPerformanceHome.fulfilled, (state, action) => {
        if (action.payload == null || !action.payload.performance[0]) {
          state.statusHome = 'error';
          state.error = true;

          return;
        }

        const home = action.payload;
        const dataHome = home.performance[0];
        state.error = false;
        state.nickname = dataHome.APELIDO || '';
        state.performanceResult = dataHome.RESULTADO || '0';

        // const metrics = getMetrics(dataHome);
        // for (const page in state.performancePages) {
        //   if (metrics[page]) state.performancePages[page].metrics = metrics[page]
        // }
        state.statusHome = 'success';
      })
      .addCase(fetchPerformanceHome.rejected, (state) => {
        state.statusHome = 'error';
        state.error = true;
      })
      .addCase(fetchPerformancePage.pending, (state) => {
        state.statusPage = 'loading';
      })
      .addCase(fetchPerformancePage.fulfilled, (state, action) => {
        if (action.payload == null) {
          state.statusPage = 'error';
          state.error = true;

          return;
        }

        const { 
          page, 

          // data, 
          CODVEND } = action.payload;
        console.log('data', CODVEND, state.performancePages[page].CODVEND, page);

        // const {
        //   meta,
        //   realizado,
        //   peso,
        //   resultado,
        //   resultadoPeso,
        //   indicadores,
        // } = data;
        state.performancePages[page].status = 'success';
        state.performancePages[page].CODVEND = CODVEND;

        // state.performancePages[page].data = indicadores;
        // state.performancePages[page].data = chartDataMock;

        //   state.performancePages[page].metrics = {
        //     goal: meta || '0',
        //     realized: realizado || '0',
        //     percentage: resultado || '0',
        //     wheight: peso || '0',
        //     result: resultadoPeso || '0',
        //   }
        state.statusPage = 'success';
      })
      .addCase(fetchPerformancePage.rejected, (state) => {
        state.statusPage = 'error';
        state.error = true;
      });
  }
});

export default performanceSlice.reducer;