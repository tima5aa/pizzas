import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import debounce from 'lodash.debounce';
import { SearchContext } from '../../App';
import styles from './Seach.module.scss';


const Search = () => {
  const [value, setValue] = React.useState('');
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef('');

  const onClickClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  }
  
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    [],
  );
  
  const onChangeInput = event => {
    setSearchValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  React.useEffect(() => {
    document.querySelector('input')
  })
  return (
  <div className={styles.root}>
    <AiOutlineSearch className={styles.icon} />
      <input 
      ref={inputRef}
    value={searchValue}
    onChange={ onChangeInput }
    className={styles.input} placeholder='Поиск пиццы...'/>
    {searchValue && (
    <AiOutlineClose onClick={ onClickClear } className={styles.close} />
    )}
  </div>
  )
}
export default Search;