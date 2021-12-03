import React from 'react';
import './Character.css';

export default function Character({ head, middle, pants, headCount, phraseList }) {
  return (
    <div>
      <div className="images">
        <img src={`${process.env.PUBLIC_URL}/assets/${head}.png`} />
        <img src={`${process.env.PUBLIC_URL}/assets/${middle}.png`} />
        <img src={`${process.env.PUBLIC_URL}/assets/${pants}.png`} />
      </div>

      <div className="counters">
        <span>You&apos;ve changed your head {headCount} times</span>
      </div>

      <div className="phrases">
        {phraseList.map((phrase) => (
          <span key={phrase}>{phrase}</span>
        ))}
      </div>

    </div>
  );
}
