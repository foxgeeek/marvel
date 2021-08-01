import { environment } from 'src/environments/environment';
import { HASH_KEY, TIMESTAMP } from './params.config';

/*
Default API URL: API_ENDPOINT + API_URL_ITEM + TIMESTAMP + PUBLIC_KEY + HASH_KEY
*/

// Version API
export const API_V1 = '/v1';

// Type API Public | Private
export const PUBLIC_API = '/public';

// API Key Public
export const PUBLIC_KEY = '&apikey=' + environment.apiPublicKey;

// Base config
export const API_BASE_CONFIG = TIMESTAMP + PUBLIC_KEY + HASH_KEY;

// Endpoint API V1 - Public | Private
export const API_ENDPOINT = environment.api + API_V1 + PUBLIC_API;

// Endpoints for characters
export const API_GET_CHARACTERS = API_ENDPOINT + '/characters';