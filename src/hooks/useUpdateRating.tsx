import { updateRestaurantRating, RatingType, getRestaurants } from '../api/api';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from "../api/queryQlient";

export const useMutateRaiting=({ id, raiting }: RatingType) => {
    const { isSuccess, mutate, isPending } = useMutation({
    mutationFn: ()=>(updateRestaurantRating({ id, raiting }), getRestaurants()),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['restaurants'] })
    },
  }, queryClient)
  return { isSuccess, mutate, isPending }
}
