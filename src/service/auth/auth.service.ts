import { User } from "src/types/user/user.types";
import api from "../api";
import base64 from 'base-64';
import { Auth } from "src/store/types/auth.type";
import { Seller } from "src/types/seller/seller.types";

const loginUrl = `ppid/login/`;

export class AuthService {
  static async signIn(
    cred: { user: string; password: string },
    ipServer: string,
  ): Promise<User | null> {
    try {
      const { user, password } = cred; 
      const credencials = user + ':' + password;
      const basicAuth = 'Basic ' + base64.encode(credencials);

      const response = await api.post<User>(
        `${ipServer}/${loginUrl}`,
        { usuario: user, senha: password },
        {
          headers: { Authorization: +basicAuth },
        },
      );

      if (response.data.erro !== 'OK') return null;

      const data = {
        credentials: cred,
        user: response.data,
      }

      this.save(data);


      return response.data;
    } catch (e) {
      console.error('LoginService.signIn: ', e);

      return null;
    }
  }

  static save(data: Auth): boolean {
    try {
      localStorage.setItem('auth', JSON.stringify(data));

      return true;
    } catch (error) {
      console.error('ServerService.save: ', error);

      return false;
    }
  }

  static get(): Auth | null {
    try {
      const user = localStorage.getItem('auth');
      if (user === null) return null;

      return JSON.parse(user);
    } catch (error) {
      console.error('ServerService.get: ', error);

      return null;
    }
  }

  static saveSellerCurrent(seller: Seller): boolean {
    try {
      localStorage.setItem('sellerCurrent', JSON.stringify(seller));
      
      return true;
    } catch (error) {
      console.error('ServerService.saveSellerCurrent: ', error);

      return false;
    }
  }

  static getSellerCurrent(): Seller | null {
    try {
      const seller = localStorage.getItem('sellerCurrent');
      if (seller === null) return null;

      return JSON.parse(seller);
    } catch (error) {
      console.error('ServerService.getSellerCurrent: ', error);

      return null;
    }
  }

  static removeSellerCurrent(): boolean {
    try {
      localStorage.removeItem('sellerCurrent');
      
      return true;
    } catch (error) {
      console.error('ServerService.removeSellerCurrent: ', error);

      return false;
      
    }
  }

  static signOut(): boolean {
    try {
      localStorage.removeItem('auth');
      this.removeSellerCurrent();

      return true;
    } catch (error) {
      console.error('ServerService.signOut: ', error);

      return false;
    }
  }
}