import React, { useState } from 'react';
import Character from '../../components/Character/Character';
import Picker from '../../components/Picker/Picker';
import './Home.css';

export default function Home() {
  const [head, setHead] = useState('horse-head');
  const [middle, setMiddle] = useState('red-middle');
  const [pants, setPants] = useState('leg-pants');
  const [headCount, setHeadCount] = useState(0);
  return (
    <main>
      <Character head={head} middle={middle} pants={pants} headCount={headCount} />
      <Picker head={head} setHead={setHead} middle={middle} setMiddle={setMiddle} pants={pants} setPants={setPants} headCount={headCount} setHeadCount={setHeadCount} />    
    </main>
  );
}
