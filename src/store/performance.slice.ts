import { Metrics } from "src/types/metrics";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  PerformancePageParams,
  PerformanceRequest,
  PerformanceResponsePage
} from "src/types/performance/performance.types";
import { PerformanceService } from "src/service/performance/performance.service";
import { getMetrics } from "src/utils/performance/performance.utils";
import { PerformanceState } from "./types/performance.types.store";
import { RootState } from "./store";
import { chartDataMock } from "src/mock/performance/performance.mock";

export const initialStateMetrics: Metrics = {
  goal: '0',
  realized: '0',
  percentage: '0',
  wheight: '0',
  result: '0',
};

const PerformancePages: any = {
  newSales: {
    url: 'novosClientes',
    title: 'Novas Vendas',
    CODVEND: '',
    metrics:initialStateMetrics,
    data: [],
  },
  salesMix: {
    url: 'mixVendas',
    title: 'Mix de Vendas',
    CODVEND: '',
    metrics:initialStateMetrics,
    data: [],
  },
  discount: {
    url: 'desconto',
    title: 'Desconto',
    CODVEND: '',
    metrics:initialStateMetrics,
    data: [],
  },
  positivity: {
    url: 'positivacao',
    title: 'Positivação',
    CODVEND: '',
    metrics:initialStateMetrics,
    data: [],
  },
  bonus: {
    url: 'bonificacao',
    title: 'Bonificação',
    CODVEND: '',
    metrics:initialStateMetrics,
    data: [],
  },
  profitability: {
    url: 'rentabilidade',
    title: 'Rentabilidade',
    CODVEND: '',
    metrics:initialStateMetrics,
    data: [],
  },
  monthlySalesTarget: {
    url: 'metaVendas',
    title: 'Meta de Vendas',
    CODVEND: '',
    schema: 'MonthlySalesTarget',
    metrics:initialStateMetrics,
  },
  averageTicket: {
    url: 'ticket',
    schema: 'AverageTicket',
    title: 'Ticket Médio',
    CODVEND: '',
    metrics:initialStateMetrics,
    data: [],
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
      const result = await PerformanceService.getHome(
        params,
        'Vidya',
        'f7wynpM',
      );
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
    const URLERP = (getState() as RootState).servers.currentServer?.ipImage;
    const CODVEND = (getState() as RootState).auth.CODVEND;

    let data: PerformanceResponsePage
    try {
      const result = await PerformanceService.getPage(
        PerformancePages[page].url,
        'vidya',
        'f7wynpM',

        // URLERP ?? '',
        // CODVEND ?? '',
        'http://acaifruit.fmcdatacom.com.br:8648',
        '36',

      );
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

        const metrics = getMetrics(dataHome);
        for (const page in state.performancePages) {
          if (metrics[page]) state.performancePages[page].metrics = metrics[page]
        }
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

        const { page, data, CODVEND } = action.payload;
        console.log('data', CODVEND, state.performancePages[page].CODVEND, page);
        const {
          meta,
          realizado,
          peso,
          resultado,
          resultadoPeso,
          indicadores,
        } = data;
        state.performancePages[page].status = 'success';
        state.performancePages[page].CODVEND = CODVEND;

        state.performancePages[page].data = indicadores;

        // state.performancePages[page].data = chartDataMock;

        state.performancePages[page].metrics = {
          goal: meta || '0',
          realized: realizado || '0',
          percentage: resultado || '0',
          wheight: peso || '0',
          result: resultadoPeso || '0',
        }
        state.statusPage = 'success';
      })
      .addCase(fetchPerformancePage.rejected, (state) => {
        state.statusPage = 'error';
        state.error = true;
      });
  }
});

export default performanceSlice.reducer;