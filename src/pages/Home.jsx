import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
// import pizzas from './components/pizzas.json';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {

  //const для загрузки пицц из бєка
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState(0);

// хук для  сообщения React, что ваш компонент должен что-то сделать после рендеринга
  React.useEffect(() => {
  fetch('https://63e219cdad0093bf29c7b7ab.mockapi.io/items')
 .then((res) => res.json())
 .then((arr) => {
  setItems(arr);
  setIsLoading(false);
});
window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container'>
              <div className="content__top">
            <Categories value={categoryId} onClickCategoryAtive={(id) => setCategoryId(id)} />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading 
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map((obj) =><PizzaBlock key={obj.id} {...obj} />)
            }
          </div>
</div>
    )
};
export default Home;
