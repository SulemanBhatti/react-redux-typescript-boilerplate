import React from 'react';
import { Counter } from './features/counter/Counter';
import { DogsBreedList } from './features/dogs/DogsBreedList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App: React.FC = React.memo(function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/count" element={<Counter />} />
          <Route path="/dogs" element={<DogsBreedList />} />
        </Routes>
      </div>
    </Router>
  );
});

export default App;
