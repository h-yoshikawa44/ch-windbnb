import ky, { Options, HTTPError } from 'ky';
import {
  QueryClient,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from 'react-query';
import { DEFAULT_API_OPTIONS } from '@/config/ky';
import { Stay, isStays } from '@/models/Stay';
import stays from '@/data/stays.json';
import { Guests } from '@/hooks/stay';

const queryKey = 'stays';

const defaultSearchParam = { location: '', guests: { adults: 0, children: 0 } };

type SearchParam = {
  location: string;
  guests: Guests;
};

const filterStays = ({
  searchParam = defaultSearchParam,
  stays,
}: Partial<{ searchParam: SearchParam }> & { stays: Stay[] }): Stay[] => {
  return stays.filter((stay) => {
    if (searchParam.location) {
      if (searchParam.location !== `${stay.city}, ${stay.country}`) {
        return false;
      }
    }

    const guests = searchParam.guests.adults + searchParam.guests.children;
    if (guests > stay.maxGuests) {
      return false;
    }
    return true;
  });
};

const getStays = async (
  searchParam?: SearchParam,
  kyOptions?: Options
): Promise<Stay[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...kyOptions,
  };
  const response = await ky.get('stays', mergedOptions);
  const data = (await response.json()) as unknown[];

  if (!isStays(data)) {
    throw Error('API Type error');
  }

  if (searchParam) {
    return filterStays({ searchParam, stays: data });
  }

  return data;
};

// getServerSidePropsでprefetchする用の関数
const stayListPrefetchQuery = (queryClient: QueryClient) => {
  // フェッチ関数に関して、外部APIであれば上記のリクエスト関数を使えばいいが、今回は内部APIなのでデータ部分を直接取得
  return queryClient.prefetchQuery(queryKey, async () => stays);
};

const useGetStayListQuery = <TData = Stay[]>(
  searchParam?: SearchParam,
  options?: UseQueryOptions<Stay[], HTTPError, TData>
): UseQueryResult<TData, HTTPError> => {
  return useQuery(queryKey, () => getStays(searchParam), options);
};

export { stayListPrefetchQuery, useGetStayListQuery };
