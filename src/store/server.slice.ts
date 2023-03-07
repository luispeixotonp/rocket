import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ServerState } from "./types/server.types";
import { ServerService } from "src/service/server/server.service";
import { Server } from "src/types/server/server.type";

const initialState: ServerState = {
  servers: [],
  currentServer: null,
  status: 'idle',
  serverListModal: false,
}

export const addServer = createAsyncThunk(
  'server/add',
  (params: Server) => {
    try {
      return ServerService.save(params);

    } catch (error) {
      console.error('error', error);

      return null;
    }
  },
);

export const getServer = createAsyncThunk(
  'server/get',
  () => {
    try {
      return ServerService.get();
    } catch (error) {
      console.error('error', error);

      return null;
    }
  },
);

export const deleteServer = createAsyncThunk(
  'server/delete',
  (id: string) => {
    try {
      return ServerService.delete(id);
    } catch (error) {
      console.error('error', error);

      return null;
    }
  },
);

export const setCurrentServer = createAsyncThunk(
  'server/setCurrent',
  (server: Server) => {
    try {
      return ServerService.setCurrent(server);
    } catch (error) {
      console.error('error', error);

      return null;
    }
  },
);

export const getCurrentServer = createAsyncThunk(
  'server/getCurrent',
  () => {
    try {
      return ServerService.getCurrent();
    } catch (error) {
      console.error('error', error);

      return null;
    }
  },
);

const serverSlice = createSlice({
  name: 'servers',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle';
    },
    setServerListModal: (state, action) => {
      state.serverListModal = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addServer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addServer.fulfilled, (state) => {
        state.status = 'success';
        state.servers = ServerService.get();
      })
      .addCase(addServer.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(getServer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getServer.fulfilled, (state, action) => {
        state.status = 'success';
        if (action.payload === null) return;
        state.servers = action.payload;
      })
      .addCase(getServer.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(deleteServer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteServer.fulfilled, (state) => {
        state.status = 'success';
        state.servers = ServerService.get();
        state.currentServer = ServerService.getCurrent();
      })
      .addCase(deleteServer.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(setCurrentServer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(setCurrentServer.fulfilled, (state) => {
        state.status = 'success';
        state.currentServer = ServerService.getCurrent();
      })
      .addCase(setCurrentServer.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(getCurrentServer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCurrentServer.fulfilled, (state, action) => {
        state.status = 'success';
        state.currentServer = action.payload;
      })
      .addCase(getCurrentServer.rejected, (state) => {
        state.status = 'error';
      });
  }
});

export const { resetStatus, setServerListModal } = serverSlice.actions;
export default serverSlice.reducer;