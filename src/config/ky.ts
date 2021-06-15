import { Options } from 'ky';

// TODO リクエストURLの絶対パス対応

export const DEFAULT_API_OPTIONS: Options = {
  prefixUrl: '/api/',
  retry: 0,
};
