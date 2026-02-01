import { Card } from '../Card/Card';
import './cardList.css'
import { RestaurantType } from '../../api/api';

export interface RestaurantListProps {
    restaurantList: RestaurantType
}

type RestaurantProps = {
    restaurantList: RestaurantType[];
    onUpdateStars: (cardId: RestaurantType['id']) => void
}

export const CardList = ({ restaurantList, onUpdateStars }: RestaurantProps) => {

    return (
        <div className='card__wrapper'>
            {restaurantList.map((item) => (
                <Card
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    raiting={item.raiting}
                    url={item.url}
                    onUpdateStars={onUpdateStars}
                />
            ))}
        </div>
    )

}

