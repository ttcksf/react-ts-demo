import React from 'react';
import Dashboard from './components/Dashboard';

const TypeProps = () => {
  return (
    <div>
      <Dashboard username="CodeTips" notification={10} isLogin={true} />
      {/* 型以外のpropsはエラーになる。 */}
      {/* <TypeProps username=100 /> */}
      {/* typeで定義した数だけpropsを渡さないといけない */}
      {/* <TypeProps username="CodeTips" notification={10} /> */}
      {/* 型間違いや渡し漏れなど表示前にエラーに気づける */}
    </div>
  );
};

export default TypeProps;
