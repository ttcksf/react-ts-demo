import React from 'react';
import Auth from './Auth';
import Dashboard from './Dashboard';

const ComponentProps = () => {
  // ユーザーがログインしているかどうかで表示するかを制御するための認証コンポーネントに渡して検証してもらう作業
  return (
    <div>
      {/* <Auth isLogin={false} Component={Dashboard} /> */}
      <Auth isLogin={true} Component={Dashboard} />
    </div>
  );
};

export default ComponentProps;
