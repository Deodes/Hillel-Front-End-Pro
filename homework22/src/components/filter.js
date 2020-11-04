import React, { useState } from 'react';

const Filter = ({ articles, handlerSort }) => {
  const [selectValue, setSelectValue] = useState('Все')

  const handleButtonSort = () => {
    handlerSort(articles, selectValue);
  }

  return (
    <>
      <select 
      value={selectValue} 
      onChange={(e) => {
        setSelectValue(e.target.value);
      }}>
        <option value={'Все'}>Все</option>
        <option value={'Образование'}>Образование</option>
        <option value={'Музыка'}>Музыка</option>
        <option value={'Новости'}>Новости</option>
        <option value={'Игры'}>Игры</option>
        <option value={'Здоровье'}>Здоровье</option>
        <option value={'Психология'}>Психология</option>
        <option value={'Наука'}>Наука</option>
      </select>
      <button onClick={() => handleButtonSort(selectValue)}>Sort</button>
    </>
  )
}

export default Filter;