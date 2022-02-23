import logo from './logo.svg';
import './App.css';
import Card from './Card';
import CardHolder from './CardHolder';
import StartButton from './StartButton';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <StartButton/>
      </header>
    </div>
  );
}

export default App;
