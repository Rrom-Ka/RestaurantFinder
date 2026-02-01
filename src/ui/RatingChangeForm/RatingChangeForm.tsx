import { FormEventHandler, SetStateAction, useEffect, useState } from "react";
import { RestaurantType } from "../../api/api";
import { useMutateRaiting } from "../../hooks/useUpdateRating";
import './ratingChangeForm.css'

type RatingChangeTypeProps = {
  restaurant: RestaurantType
  onBack: () => void; 
}


export const RatingChangeForm = ({ restaurant, onBack }: RatingChangeTypeProps) => {
  //--для формы отправки данных рейтинга
  const [value, setValue] = useState('1');
  
  function chengeSelect(event: { target: { value: SetStateAction<string>; }; }) {
    setValue(event.target.value);
  }
  
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    mutate()
    onBack()
  }
  const id = restaurant.id
  const raiting = Number(value)
  const { isSuccess, mutate, isPending } = useMutateRaiting({ id, raiting })

  useEffect(() => {
    if (isSuccess) {
      alert('Спасибо! Мы изменили рейтинг ресторана.')
    }
  }, [isSuccess]);

  if (isPending) {
    <div>Заявка отправляется...</div>
  }
  

  return (
    <div className="wrapper">
      <p className="descr">Текущий рейтинг: {restaurant.raiting}</p>
      <form onSubmit={handleSubmit} >
        <label className="label">
          Оцените рестроран:
          <select value={value} onChange={chengeSelect} className="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <input type="submit" value="Отправить?" />
      </form>
    </div>
  )
}