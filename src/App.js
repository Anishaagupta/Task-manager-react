import React from 'react';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [inputList, setInputList] = useState('Buy Apple');

  const inputChange = () => {};
  return (
    <div className='App'>
      <div className='main-div'>
        <div className='center-div'>
          <br />
          <h1>TASK MANAGER</h1>
          <br />
          <input onChange={inputChange} type='text' placeholder='Add Task..' />
          <button> + </button>
          <ol>
            <li>{inputList}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default App;
