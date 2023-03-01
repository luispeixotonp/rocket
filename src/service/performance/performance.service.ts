import { PerformanceRequest, PerformanceResponse, PerformanceResponsePage } from "src/types/performance/performance.types";
import base64 from 'base-64';
import api from "../api";

const performanceUrl = 'http://api.rocket.vidyacode.com.br:1500/ppid';

export class PerformanceService {
  static async getHome(
    params: PerformanceRequest,
    user: string,
    password: string,
  ): Promise<PerformanceResponse[] | null> {
    try {
      const response = await api.post<PerformanceResponse[]>(
        `${performanceUrl}/performance/`,
        { ...params },
        {
          headers: {
            Authorization: `Basic ${base64.encode(`${user}:${password}`)}`,
          },
        },
      );

      console.log('response', response);

      return response.data;
    } catch (error) {
      console.error('PerformanceService.getHome', error);

      return null;
    }
  };

  static async getPage(
    url: string,
    user: string,
    password: string,
    URLERP: string,
    CODVEND: string,
  ): Promise<PerformanceResponsePage | null> {
    try {
      console.log({
        URLERP,
        CODVEND,
        url,
        user,
        password,
      });
      const response = await api.post<PerformanceResponsePage>(
        `${performanceUrl}/${url}/`,
        {
          URLERP,
          CODVEND,
        },
        {
          headers: {
            Authorization: `Basic ${base64.encode(`${user}:${password}`)}`,
          },
        },
      )


      return response.data;
    } catch (error) {
      console.error('PerformanceService.getPage', error);

      return null;

    }
  }
}

