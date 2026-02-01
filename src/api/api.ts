const API_URL = 'http://localhost:3000'

export interface RestaurantInterface {
  id: string
  name: string
  description: string
  raiting: number
  url: string
}

export type RestaurantType=RestaurantInterface

//получение данных из файла
export const getRestaurants = async () => {
  const response = await fetch(`${API_URL}/restaurants`)
    .then((res) => res.json())
  return response;
}
//фильтрация
export const filtredRestaurants = (filtredList: any[]) => {
  const restaurantFiltredList = filtredList.map((item) => (item))
  return restaurantFiltredList;
}


export interface UpdateRestaurantRaitingArgs {
  id: RestaurantInterface['id']
  raiting: RestaurantInterface['raiting']
}

export type RatingType=UpdateRestaurantRaitingArgs

//ф-я изменения данных о реитинге в файле
export const updateRestaurantRating = async ({ id, raiting, }: RatingType) => {
  fetch(`${API_URL}/restaurants/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ raiting }),
  }).then((res) => res.json())
}
