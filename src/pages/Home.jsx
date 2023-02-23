import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);

  //const для загрузки пицц из бєка
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'популярности ↑',
    sortProperty: 'rating',
  });

// хук для  сообщения React, что ваш компонент должен что-то сделать после рендеринга
  React.useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes('-') ? 'acs' : 'desc';
    const sortBy = sortType.sortProperty.replace('-','');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

  fetch(
`https://63e219cdad0093bf29c7b7ab.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
)
  .then((res) => res.json())
  .then((arr) => {
  setItems(arr);
  setIsLoading(false);
});
window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage ]);
  const pizzas = items
.map((obj) =><PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  
  return (
    <div className='container'>
              <div className="content__top">
            <Categories value={categoryId} onChangeCategory={(index) => setCategoryId(index)} />
            <Sort value={sortType} onChangeSort={(index) => setSortType(index)}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">{isLoading ? skeletons: pizzas }</div>
          <Pagination onChangePage={number => setCurrentPage(number)}/>
</div>
    )
};
export default Home;
