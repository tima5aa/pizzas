import React from 'react';
import './scss/app.scss';
import Header  from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
// import pizzas from './components/pizzas.json';
import Skeleton from './components/PizzaBlock/Skeleton';
function App() {
//const для загрузки пицц из бєка
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
// хук для  сообщения React, что ваш компонент должен что-то сделать после рендеринга
  React.useEffect(() => {
  fetch('https://63e219cdad0093bf29c7b7ab.mockapi.io/items')
 .then((res) => res.json())
 .then((arr) => {
  setItems(arr);
  setIsLoading(false);
});
  }, []);
  return (
    <div className="wrapper">
    <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
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
      </div>
      </div>
    );
}

export default App;
