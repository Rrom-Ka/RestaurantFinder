
import './styles.css'
import { CardList } from "./ui/CardList/CardList";
import { SearchableList } from "./ui/SearchString/SearchString";
import { useRestaurantList} from "./hooks/useRestaurantList";
import { SetStateAction, useState } from 'react';
import { LogoHeader } from "./ui/LogoHeader/LogoHeader";
import { Avatar } from "./ui/Avatar/Avatar";
import { RestaurantType } from "./api/api";

function App() {

  const [searchString, setSearchString] = useState("");
  // обработчик событий поиска
  //изменять переменную во время изменения посиковой строки
  const handleSearch = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearchString(event.target.value)
  }

  const handlOnUpdateStars = (cardId: RestaurantType['id']) => {
    data.find(restList => restList.id === cardId);
  }
  //получаем данные списка карточек
  const {  data, isError ,isLoading } = useRestaurantList()
  
  let restList = data || [];
  //списко после поиска
  const filtredList = restList.map((item) => (item)).filter((
    item: { name: string; }) => item.name
    .toLowerCase()
    .includes(searchString.toLowerCase()
  ))

//ожидание
  if (isLoading) {
    return <div>
      <p>Пожалуйста, подождите</p>
    </div>
  }
//ощибка
  if(isError) {
    return <div>
      <p>Произошла ошибка</p>
    </div>
  }

  return (
    <>
      <header>
        <LogoHeader />
        <Avatar />
      </header>

      <main>
        <SearchableList restaurantList={data || []} onSearch={handleSearch} />
        <section>
          <CardList onUpdateStars={handlOnUpdateStars} restaurantList={filtredList} />
        </section>
      </main>
      
      <footer>
        <p>Privacy Policy</p>
        <p className="corporation">2022 Eats</p>
        <p>Terms Of Service</p>
      </footer>
    </>
  )
}

export default App


