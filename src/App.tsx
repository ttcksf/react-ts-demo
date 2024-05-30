import React from 'react';
import logo from './logo.svg';
import './App.css';
import Polymorphic from './screens/polymorphic/Polymorphic';

function App() {
  // npx create-react-app フォルダ名 --template typescript
  // npm start

  return (
    <div className="App">
      <Polymorphic />
    </div>
  );
}

export default App;
