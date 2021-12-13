import React from 'react';
import { Header } from './app/components';

const App: React.FC = React.memo(function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
});

export default App;
