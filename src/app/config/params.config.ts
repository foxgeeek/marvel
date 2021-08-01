import { environment } from "src/environments/environment";
import { Md5 } from "ts-md5";

// Order by
export const ORDER_BY_NAME = '&orderBy=name';

// Hash
export const HASH_KEY = '&hash=' + Md5.hashStr(`${Date.now()}${environment.apiPrivateKey}${environment.apiPublicKey}`);

// TS
export const TIMESTAMP = '?ts=' + Date.now();