//Список
//Принимает на вход список данных data
import { RestaurantType } from '../../api/api';
import './searchString.css'

export type RestaurantProps = {
    restaurantList: RestaurantType[];
    onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchableList = ({ onSearch }: RestaurantProps) => {
    //[значение, функция]=хук

    return (
        <div className='search__wrap'>
            {/* поисковая строка */}
            <label className='label'>
                <input
                    className='input'
                    type="text"
                    onChange={onSearch}
                    placeholder='Search for restaurants'
                />
            </label>
        </div>
    )
}