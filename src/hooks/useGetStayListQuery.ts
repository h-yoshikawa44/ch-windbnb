import ky, { Options, HTTPError } from 'ky';
import {
  QueryClient,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from 'react-query';
import { DEFAULT_API_OPTIONS } from '@/config/ky';
import { Stay } from '@/models/Stay';

const queryKey = 'stays';

const getStays = async (options?: Options): Promise<Stay[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get('stays', mergedOptions);
  const data = await response.json();

  return data;
};

const stayListPrefetchQuery = (queryClient: QueryClient) => {
  return queryClient.prefetchQuery(queryKey, () => getStays());
};

const useGetStayListQuery = <TData = Stay[]>(
  options?: UseQueryOptions<Stay[], HTTPError, TData>
): UseQueryResult<TData, HTTPError> => {
  return useQuery(queryKey, () => getStays(), options);
};

export { stayListPrefetchQuery, useGetStayListQuery };
