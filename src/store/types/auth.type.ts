import { Company } from "src/types/company/company.types";
import { Seller } from "src/types/seller/seller.types";
import { User } from "src/types/user/user.types";
import { Entity, FetchStatus } from ".";

export interface AuthState {
  loginFetchStatus: FetchStatus;
  cacheLoginFetchStatus: FetchStatus;
  companyFetchStatus: FetchStatus;
  isLoggedIn: boolean;
  user?: User;
  company: Partial<Company>;
  CODEMP?: string;
  companies?: Entity<Company>;
  credentials?: Credentials;
  cacheLoginError?: string;
  loginError?: string;
  companyError?: string;
  isManager: boolean;
  sellers: Seller[];
  CODVEND: string;
  sellerCurrent: Seller | null;
}

export interface Credentials {
  user: string;
  password: string;
}

export interface Auth {
  credentials: Credentials;
  user: User;
}
