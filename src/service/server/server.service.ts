import { Server } from "src/types/server/server.type";

export class ServerService {
  static save(server: Server): boolean {
    try {
      let servers: Server[] = [];
      const serverList = ServerService.get();
      console.log(serverList);
      servers = [...serverList, server];
      localStorage.setItem('server-list', JSON.stringify(servers));

      return true;
    } catch (error) {
      console.error('ServerService.save: ', error);

      return false;
    }
  }

  static get(): Server[] {
    try {
      const server = localStorage.getItem('server-list');
      if (server === null) return [];

      return JSON.parse(server);
    } catch (error) {
      console.error('ServerService.get: ', error);

      return [];
    }
  }

  static delete(id: string): boolean {
    try {
      if (this.getCurrent()?.id === id) this.deleteCurrent();
      const serverList = ServerService.get();
      const servers = serverList.filter(server => server.id !== id);
      localStorage.setItem('server-list', JSON.stringify(servers));

      return true;
    } catch (error) {
      console.error('ServerService.delete: ', error);

      return false;
    }
  }

  static setCurrent(server: Server): boolean {
    try {
      localStorage.setItem('current-server', JSON.stringify(server));

      return true;
    } catch (error) {
      console.error('ServerService.setCurrent: ', error);

      return false;
    }
  }

  static getCurrent(): Server | null {
    try {
      const server = localStorage.getItem('current-server');
      if (server === null) return null;

      return JSON.parse(server);
    } catch (error) {
      console.error('ServerService.getCurrent: ', error);

      return null;
    }
  }

  static deleteCurrent(): boolean {
    try {
      localStorage.removeItem('current-server');

      return true;
    } catch (error) {
      console.error('ServerService.deleteCurrent: ', error);

      return false;
    }
  }

}