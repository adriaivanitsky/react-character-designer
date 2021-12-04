import React, { useState } from 'react';
import Character from '../../components/Character/Character';
import Picker from '../../components/Picker/Picker';
import './Home.css';

export default function Home() {
  const [head, setHead] = useState('horse-head');
  const [middle, setMiddle] = useState('red-middle');
  const [pants, setPants] = useState('leg-pants');
  const [headCount, setHeadCount] = useState(0);
  const [phraseList, setPhraseList] = useState([]);
  const [input, setInput] = useState('');
  return (
    <main>
      <Character {...{ head, middle, pants, headCount, phraseList }} />
      <Picker
        {...{
          head,
          setHead,
          middle,
          setMiddle,
          pants,
          setPants,
          headCount,
          setHeadCount,
          phraseList,
          setPhraseList,
          input,
          setInput,
        }}
      />
    </main>
  );
}
