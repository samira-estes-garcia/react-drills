import React from 'react';
import HelloWorld from './HelloWorld/HelloWorld';
import Bomb from './Bomb/Bomb';
import RouletteGun from './RouletteGun/RouletteGun';

function App() {
  return (
    <main className='App'>
      <h2>Hello World Component</h2>
      <HelloWorld />
      <h2>Bomb Component</h2>
      <Bomb />
      <h2>Roulette Gun Component</h2>
      <RouletteGun />
    </main>
  );
}

export default App;
