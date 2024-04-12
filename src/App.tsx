import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseReducerStrict from './screens/usereducer-strict/UseReducerStrict';

function App() {
  // npx create-react-app フォルダ名 --template typescript
  // npm start

  return (
    <div className="App">
      <UseReducerStrict />
    </div>
  );
}

export default App;
