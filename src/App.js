import logo from './logo.svg';
import './App.css';
import Card from './Card';
import CardHolder from './CardHolder';
import StartButton from './StartButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StartButton/>
        <CardHolder></CardHolder>
      </header>
    </div>
  );
}

export default App;
