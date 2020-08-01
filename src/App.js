import React from 'react';
import './App.css';
import { useState } from 'react';
import TodoList from './Components/container/TodoList/TodoList';

const App = () => {
  const [inputList, setInputList] = useState('');
  const [items, setItems] = useState([]);

  const inputChange = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className='App'>
      <div className='main-div'>
        <div className='center-div'>
          <br />
          <h1>TASK MANAGER</h1>
          <br />
          <input
            value={inputList}
            onChange={inputChange}
            type='text'
            placeholder='Add Task..'
          />
          <button onClick={listOfItems}> + </button>
          <ol>
            {items.map((val, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                  text={val}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default App;
