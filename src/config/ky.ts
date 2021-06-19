import { Options } from 'ky';

export const DEFAULT_API_OPTIONS: Options = {
  prefixUrl: '/api',
  retry: 0,
};
