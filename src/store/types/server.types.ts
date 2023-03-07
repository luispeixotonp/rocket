import { Server } from "src/types/server/server.type";
import { FetchStatus } from ".";

export interface ServerState {
  servers: Server[];
  currentServer: Server | null;
  status: FetchStatus;
  serverListModal: boolean;
}