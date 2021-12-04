import React from 'react';
import './Picker.css';

export default function Picker({
  head,
  setHead,
  middle,
  setMiddle,
  pants,
  setPants,
  setHeadCount,
  setPhraseList,
  input,
  setInput,
}) {
  const handleHeadChange = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  };

  const handleButton = () => {
    setPhraseList((prevState) => [...prevState, input]);
    setInput('');
  };
  return (
    <div className="dropdowns">
      <select value={head} onChange={handleHeadChange}>
        <option value="bird-head">bird</option>
        <option value="dog-head">dog</option>
        <option value="duck-head">duck</option>
        <option value="horse-head">horse</option>
      </select>
      <select value={middle} onChange={(e) => setMiddle(e.target.value)}>
        <option value="blue-middle">blue</option>
        <option value="pink-middle">pink</option>
        <option value="red-middle">red</option>
        <option value="dress-middle">dress</option>
      </select>
      <select value={pants} onChange={(e) => setPants(e.target.value)}>
        <option value="white-pants">white</option>
        <option value="leg-pants">leg</option>
        <option value="dog-pants">dog</option>
        <option value="blue-pants">blue</option>
      </select>

      <input
        value={input}
        type="text"
        placeholder="Make your own catchphrase"
        onChange={(e) => setInput(e.target.value)}
      />
      <button id="button" onClick={handleButton}>
        enter
      </button>
    </div>
  );
}
