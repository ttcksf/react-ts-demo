import React, { useState } from 'react';

const Login = () => {
  // シンプルなものは型推論でOK
  const [status, setStatus] = useState(false);
  const isLogIn = () => {
    setStatus(true);
  };
  const isLogOut = () => {
    setStatus(false);
  };
  return (
    <div>
      <button onClick={isLogIn}>ログイン</button>
      <button onClick={isLogOut}>ログアウト</button>
      <p>ユーザーは{status ? 'ログイン' : 'ログアウト'}しています</p>
    </div>
  );
};

export default Login;
