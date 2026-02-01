import "./card.css";
import { RestaurantType } from "../../api/api";
import { useEffect, useState } from "react";
import { useMutateRaiting } from "../../hooks/useUpdateRating";

export type CardType = {
  //принимает пропсы
  id: RestaurantType["id"]; //идентификатор
  name: RestaurantType["name"]; //заголовок-название
  description: RestaurantType["description"]; //местоположение и рейиинг
  raiting: RestaurantType["raiting"]; //кол-во звезд
  url: RestaurantType["url"]; //путь к картинке
  onUpdateStars: (cardId: string) => void;
};
//адреса звзд
const starArr = { StarIcon: "/star.svg?react", StarGold: "/starGold.svg" };

export const Card = ({
  id,
  name,
  description,
  raiting,
  url,
  onUpdateStars,
}: CardType) => {
  const starsСalculation = function StarsСalculation(
    i: number,
    raiting: number
  ) {
    if (i < raiting)
      return <img src={starArr.StarGold} alt="" className="abode__star" />;
    return <img src={starArr.StarIcon} alt="" className="abode__star" />;
  };

  const handleStarsClick = () => {
    onUpdateStars(id);
    mutate();
  };

  //---------------------------- рейтинг звезд
  const [value, setValue] = useState(raiting.toString());
  raiting = Number(value);
  const { isSuccess, mutate, isPending } = useMutateRaiting({ id, raiting });

  useEffect(() => {
    if (isSuccess) {
      alert("Спасибо! Мы изменили рейтинг ресторана.");
    }
  }, [isSuccess]);

  if (isPending) {
    <div>Заявка отправляется...</div>;
  }

  return (
    <div className="card" key={id}>
      <img className="cartoon" src={url} />
      <h3 className="title">{name}</h3>
      <p className="description" onClick={handleStarsClick}>
        {description}
      </p>
      <ul className="list__reset">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <li
              className="abode__item-stars"
              key={i}
              onClick={() => {
                const newRating = (i + 1).toString();
                handleStarsClick();
                setValue(newRating);
              }}
            >
              {starsСalculation(i, raiting)}
            </li>
          ))}
      </ul>
    </div>
  );
};
