import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Categories from '../components/Categories';
import { setCategoryId } from '../redux/slices/filterSlice';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filter);
  const sortType =  sort.sortProperty;

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);


  const onChangeCategory = (index) => {
    dispatch(setCategoryId(index));
  }

  React.useEffect(() => {
    setIsLoading(true);

    const order = sortType.includes('-') ? 'acs' : 'desc';
    const sortBy = sortType.replace('-','');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

          axios
        .get(
          `https://63e219cdad0093bf29c7b7ab.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
          )
      .then((res) =>  {
        setItems(res.data);
          setIsLoading(false);
      });

  window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage ]);
  const pizzas = items.map((obj) =><PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  
  return (
    <div className='container'>
              <div className="content__top">
            <Categories value={categoryId} onChangeCategory={onChangeCategory} />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">{isLoading ? skeletons: pizzas }</div>
          <Pagination onChangePage={number => setCurrentPage(number)}/>
</div>
    )
};
export default Home;
