import React from "react";

function Categories() {
  const [activeCategory, setActiveCategory] = React.useState(0);

  const categories = ['Все' ,'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (index) => {
    setActiveCategory(index);
  }
  return (
      <div className="categories">
              <ul>
                {categories.map((value, index) => (
                  <li
                    key={index}
                    onClick={() => onClickCategory(index)} className={activeCategory === index ? 'active' : ''}>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
  );
}
export default Categories;