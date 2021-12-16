import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { DogsBreedList } from './features/dogs/DogsBreedList';
import './App.css';

const App: React.FC = React.memo(function App() {
  return (
    <div className="App">
      <DogsBreedList />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
});

export default App;
