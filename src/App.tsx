import React from 'react';
import logo from './logo.svg';
import './App.css';
import TypeProps from './screens/type-props/TypeProps';

function App() {
  // npx create-react-app フォルダ名 --template typescript
  // npm start
  return (
    <div className="App">
      <TypeProps username="CodeTips" notification={10} isLogin={true} />
      {/* 型以外のpropsはエラーになる。 */}
      {/* <TypeProps username=100 /> */}
      {/* typeで定義した数だけpropsを渡さないといけない */}
      {/* <TypeProps username="CodeTips" notification={10} /> */}
      {/* 型間違いや渡し漏れなど表示前にエラーに気づける */}
    </div>
  );
}

export default App;
