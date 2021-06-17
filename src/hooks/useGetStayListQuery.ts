import ky, { Options, HTTPError } from 'ky';
import {
  QueryClient,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from 'react-query';
import { DEFAULT_API_OPTIONS } from '@/config/ky';
import { Stay } from '@/models/Stay';
import stays from '@/data/stays.json';

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

// getServerSidePropsでprefetchする用の関数
const stayListPrefetchQuery = (queryClient: QueryClient) => {
  // フェッチ関数に関して、外部APIであれば上記のリクエスト関数を使えばいいが、今回は内部APIなのでデータ部分を直接取得
  return queryClient.prefetchQuery(queryKey, async () => stays);
};

const useGetStayListQuery = <TData = Stay[]>(
  options?: UseQueryOptions<Stay[], HTTPError, TData>
): UseQueryResult<TData, HTTPError> => {
  return useQuery(queryKey, () => getStays(), options);
};

export { stayListPrefetchQuery, useGetStayListQuery };
