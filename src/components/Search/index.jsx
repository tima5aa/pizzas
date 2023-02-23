import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import { SearchContext } from '../../App';

import styles from './Seach.module.scss';

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
   <div className={styles.root}>
    <AiOutlineSearch className={styles.icon} />
      <input 
    value={searchValue}
    onChange={event => setSearchValue(event.target.value)}
    className={styles.input} placeholder='Поиск пиццы...'/>
    {searchValue && (
    <AiOutlineClose onClick={() => setSearchValue('')} className={styles.close} />
    )}
   </div>
  )
}
export default Search;