import { getRestaurants, RestaurantType } from '../api/api';
import { useQuery } from '@tanstack/react-query';
import { queryClient } from "../api/queryQlient";

//хук возвращающийй список номеров доступных для бронирования
export type Response = {
  data: RestaurantType[];
  isError: boolean;
  isLoading: boolean;
}

export const useRestaurantList = (): Response => {
  const { data, isError, isLoading } = useQuery({
    queryFn:()=> getRestaurants(),
    queryKey: ['restaurants'],
  }, queryClient);
  return {data, isError, isLoading};
}