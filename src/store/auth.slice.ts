import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthService } from "src/service/auth/auth.service";
import { User } from "src/types/user/user.types";
import { RootState } from "./store";
import { AuthState, Credentials } from "./types/auth.type";

const initialState: AuthState = {
  cacheLoginFetchStatus: 'idle',
  loginFetchStatus: 'idle',
  companyFetchStatus: 'idle',
  isLoggedIn: false,
  company: {},
  CODEMP: '',
  user: undefined,
  cacheLoginError: undefined,
  companies: undefined,
  companyError: undefined,
  credentials: undefined,
  loginError: undefined,
  isManager: false,
  sellers: [],
  CODVEND: '',
  sellerCurrent: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: Credentials, { getState }) => {
    const { currentServer } = (getState() as RootState).servers;
    if (currentServer == null) return null;

    // const user = await AuthService.signIn(
    //   credentials,
    //   currentServer?.ipServer,
    // );

    const user = {
      codvend: "60",
      codemp: "1",
      codusu: "855",
      nomeusu: "vidya",
      NOMEUSU: "vidya",
      CODUSU: "855",
      CODVEND: "60",
      CODEMP: "1",
      erro: "OK",
      ACESSOVISUALCAB: "T",
      SEQVISITA: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      CODCENCUS: "0",
      CODREG: "10000",
      vendedores: [
        {
          "CODVEND": "60",
          "APELIDO": "MARQUENES -GO"
        }
      ]
    } as User;

    if (user) {
      return {
        credentials,
        user,
      };
    }
  },
);

export const signOut = createAsyncThunk('auth/signOut', async () => {
  try {
    AuthService.signOut();

    return true;
  } catch (error) {
    return false;
  }

});

export const getAuth = createAsyncThunk('auth/cacheLogin', async () => {
  try {
    return AuthService.get();
  } catch (error) {
    return null;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.loginFetchStatus = 'idle';
      state.loginError = undefined;
    },
    setSellerCurrent: (state, action) => {
      state.sellerCurrent = action.payload;
      state.CODVEND = action.payload.CODVEND;
      AuthService.saveSellerCurrent(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loginFetchStatus = 'loading';
        state.loginError = '';
      })
      .addCase(login.fulfilled, (state, action) => {
        if (!action.payload || action.payload == null) {
          state.loginFetchStatus = 'error';
        } else {
          const isManager = action.payload.user.vendedores.length > 1;

          // const sellerCurrent = action.payload.user.vendedores.length > 0 ? action.payload.user.vendedores[0] : null;
          state.credentials = action.payload.credentials;
          state.user = action.payload.user;
          state.loginFetchStatus = 'success';

          // state.isManager = isManager;
          // state.sellers = action.payload.user.vendedores;
          // state.CODVEND = isManager ? sellerCurrent!.CODVEND : '';
          // state.sellerCurrent = isManager ? sellerCurrent : null;
          // isManager && AuthService.saveSellerCurrent(sellerCurrent!);

          state.isManager = true;
          state.sellers =[
            {
              CODVEND: '000',
              APELIDO: 'GUSTAVO',
            },
        
            {
              CODVEND: '001',
              APELIDO: 'FERNANDO',
            },
        
            {
              CODVEND: '002',
              APELIDO: 'JOSE',
            },
        
            {
              CODVEND: '003',
              APELIDO: 'MARIA',
            },
          ]
           state.CODVEND = isManager ? '000' : '';
          state.sellerCurrent = {
            CODVEND: '000',
            APELIDO: 'GUSTAVO',
          }

          
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.loginError = action.error.message;
        state.loginFetchStatus = 'error';
      })
      .addCase(signOut.pending, (state) => {
        state.loginFetchStatus = 'loading';
        state.loginError = '';
      })
      .addCase(signOut.fulfilled, (state, action) => {
        if (!action.payload) {
          state.loginFetchStatus = 'error';
        } else {
          state.credentials = undefined;
          state.user = undefined;
          state.loginFetchStatus = 'success';
        }
      })
      .addCase(signOut.rejected, (state, action) => {
        state.loginError = action.error.message;
        state.loginFetchStatus = 'error';
      })
      .addCase(getAuth.pending, (state) => {
        state.cacheLoginFetchStatus = 'loading';
        state.cacheLoginError = '';
      })
      .addCase(getAuth.fulfilled, (state, action) => {
        if (!action.payload || action.payload == null) {
          state.loginFetchStatus = 'error';
        } else {
          // const isManager = action.payload.user.vendedores.length > 1;
          state.credentials = action.payload.credentials;
          state.user = action.payload.user;
          state.loginFetchStatus = 'success';

          // state.isManager = isManager;
          // state.sellers = action.payload.user.vendedores;
          
          // state.CODVEND = AuthService.getSellerCurrent() ? AuthService.getSellerCurrent()!.CODVEND : action.payload.user.codvend;
          // state.sellerCurrent = AuthService.getSellerCurrent()


          state.isManager = true;
          state.sellers =[
            {
              CODVEND: '000',
              APELIDO: 'GUSTAVO',
            },
        
            {
              CODVEND: '001',
              APELIDO: 'FERNANDO',
            },
        
            {
              CODVEND: '002',
              APELIDO: 'JOSE',
            },
        
            {
              CODVEND: '003',
              APELIDO: 'MARIA',
            },
          ]
           state.CODVEND = AuthService.getSellerCurrent() ? AuthService.getSellerCurrent()!.CODVEND : '000';
          state.sellerCurrent = AuthService.getSellerCurrent()

          
        }
      })
      .addCase(getAuth.rejected, (state, action) => {
        state.cacheLoginError = action.error.message;
        state.cacheLoginFetchStatus = 'error';
      });
  }
});

export const { resetAuthState, setSellerCurrent } = authSlice.actions;
export default authSlice.reducer;
