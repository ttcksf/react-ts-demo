import React, { useContext } from 'react';
import { UserContext } from './UserContextProvider';

const User = () => {
  const isLogin = () => {
    userContext?.setUser({
      name: 'yamada',
      email: 'yamada@sample.com',
    });
  };
  const isLogout = () => {
    // 1.userContextにデータがあるかnullチェックする場合
    // if (userContext) {
    //   userContext.setUser(null);
    // }
    // 2.userContextにデータがあるかnullチェックしない場合
    userContext.setUser(null);
  };

  const userContext = useContext(UserContext);
  return (
    <div>
      <button onClick={isLogin}>ログイン</button>
      <button onClick={isLogout}>ログアウト</button>
      {/* 1.userContextにデータがあるかnullチェックする場合 */}
      {/* <h1>ユーザー名：{userContext?.user?.name}</h1> */}
      {/* <h1>メールアドレス：{userContext?.user?.email}</h1> */}
      {/* 2.userContextにデータがあるかnullチェックしない場合 */}
      <h1>ユーザー名：{userContext.user?.name}</h1>
      <h1>メールアドレス：{userContext.user?.email}</h1>
    </div>
  );
};

export default User;
