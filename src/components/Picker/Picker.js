import React from 'react';
import './Picker.css';

export default function Picker({ head, setHead, middle, setMiddle, pants, setPants, headCount, setHeadCount }) {
  const handleHeadChange = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => (prevState + 1));
  };
  return (
    <div>
      <select value={head} onChange={handleHeadChange}>
        <option value="bird-head">bird</option>
        <option value="dog-head">dog</option>
        <option value="duck-head">duck</option>
        <option value="horse-head">horse</option>
      </select>  
      <select value={middle} onChange={(e) => setMiddle(e.target.value)}>
        <option value="blue-middle"></option>
        <option value="pink-middle"></option>
        <option value="red-middle"></option>
        <option value="dress-middle"></option>
        {/* finish all options and add event listeners to each */}
      </select>   
    </div>
  );
}
