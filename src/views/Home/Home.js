import React, { useState } from 'react';
import Character from '../../components/Character/Character';
import Picker from '../../components/Picker/Picker';
import './Home.css';

export default function Home() {
  const [head, setHead] = useState('horse-head');
  const [middle, setMiddle] = useState('red-middle');
  const [pants, setPants] = useState('leg-pants');
  return (
    <main>
      <Character head={head} middle={middle} pants={pants} />
      <Picker />    
    </main>
  );
}
