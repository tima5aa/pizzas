import React from "react";

function Categories({ value, onClickCategoryActive }) {
  // const [activeCategory, setActiveCategory] = React.useState(0);

  const categories = ['Все' ,'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые'];

  // const onClickCategory = (index) => {
  //   setActiveCategory(index);
  // }
  return (
      <div className="categories">
              <ul>
                {categories.map((categoryName, index) => (
                  <li
                    key={index}
                    onClick={() => onClickCategoryActive(index)} className={value === index ? 'active' : ''}>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
  );
}
export default Categories;