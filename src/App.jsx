import React, { useState, useEffect } from 'react';
import PowerBall from './PowerBall.jsx';

const App = () => {
  const [bits, setBits] = useState('');

  const getBits = () => {
    fetch('https://qrng.anu.edu.au/API/jsonI.php?length=16&type=uint16',
      { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then(json => {
        let newbits = json.data.map(n => n.toString(2)).join('') + bits;
        setBits(newbits);
      })
  }

  const checkIfNeedBits = () => {
    if (bits.length < 80) {
      getBits();
    }
  }

  useEffect(checkIfNeedBits, [bits]);

  return (
    <>
      <h1>The app will go here.</h1>
      <h2>But it hasn't been written yet.</h2>
      <PowerBall bits={bits} setBits={setBits} />
    </>
  )
}

export default App;