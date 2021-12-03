import React from 'react';
import './Character.css';

export default function Character({ head, middle, pants }) {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/assets/${head}.png`} />
      <img src={`${process.env.PUBLIC_URL}/assets/${middle}.png`} />
      <img src={`${process.env.PUBLIC_URL}/assets/${pants}.png`} />
    </div>
  );
}
