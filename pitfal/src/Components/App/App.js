
import React,{useState,useReducer,useCallback } from 'react';
import CharacterMap from '../CharacterMap/CharacterMap';

import './App.css';
function App() {
  const [text, setText] = useState('');
  const [showExplanation, toggleExplanation] = useReducer(state => !state, false)
  const transformer = item => item.toLowerCase((), []);
  return (
    <div className="wrapper">
    <label htmlFor="text">
      <p>Add Your Text Here:</p>
      <textarea
        id="text"
        name="text"
        rows="10"
        cols="100"
          onChange={event => setText(event.target.value)}
      >
      </textarea>
      </label>
      <div>
        <button onClick={toggleExplanation}>Show Explanation</button>
      </div>
      

      <CharacterMap showExplanation={showExplanation} text={text} transformer={transformer} />
  </div>
)
};
export default App;
