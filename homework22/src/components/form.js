import React, {useState} from 'react';
import shortid from 'shortid';



const Form = ({ handlerSubmit }) => {

  const [inputValue, setInputValue] = useState({
    title: '',
    text: '',
    tag: 'Образование',
    id: '',
  });
  
  return (
    <form 
    style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' , width: '600px', height: '600px', margin: '0 auto'}}
    onSubmit={(e) => {
      e.preventDefault();
      handlerSubmit(
        {...inputValue,
        id: shortid(),
      });
    }}>
      <input 
      placeholder='...title'
      style={{height: '30px', padding: '0 10px', width: '50%'}}
      required
      onChange={(e) => setInputValue({
        ...inputValue,
        title: e.target.value,
      })}
      className="form__title"
      name="title" 
      type="text"/>
      <textarea
      placeholder='...text'
      style={{minWidth: '100%', height: '450px', padding: '10px', textAlign: ''}}
      required
      onChange={(e) => setInputValue({
        ...inputValue,
        text: e.target.value,
      })}
       name="text" 
       type="text"/>
      <select
      style={{width: '110px', height: '30px'}}
      value={inputValue.tag}
      onChange={(e) => setInputValue({
        ...inputValue,
        tag: e.target.value,
      })}
      name="select">
        <option value={'Образование'}>Образование</option>
        <option value={'Музыка'}>Музыка</option>
        <option value={'Новости'}>Новости</option>
        <option value={'Игры'}>Игры</option>
        <option value={'Здоровье'}>Здоровье</option>
        <option value={'Психология'}>Психология</option>
        <option value={'Наука'}>Наука</option>
      </select>
      <button>Добавить</button>
    </form>
  );
}

export default Form;