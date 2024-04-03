import React, { useState } from 'react';

type User = {
  name: string;
  email: string;
};

const User = () => {
  // 初期値をnullとしたことで型推論からオブジェクトまでは推測できない
  // const [user, setUser] = useState<User | null>(null);
  // ログアウト（null）がないときはユニオン型での型指定とオプショナル型での表示でnullチェックしなくて良いわけだが初期値を空のオブジェクトにするとコンパイルエラーになる
  // 空のオブジェクトは型推論で中身が文字列か数値、真偽値かまでは推測できないため。
  // そこでオブジェクトの中身を知らせるために型アサーションを使うと良い
  const [user, setUser] = useState<User>({} as User);
  const isLogIn = () => {
    setUser({
      name: 'yamada',
      email: 'test@test.com',
    });
  };
  // const isLogOut = () => {
  //   setUser(null);
  // };
  return (
    <div>
      <button onClick={isLogIn}>ログイン</button>
      {/* <button onClick={isLogOut}>ログアウト</button> */}
      {/* <p>ユーザー名：{user?.name}</p> */}
      <p>ユーザー名：{user.name}</p>
      {/* <p>メールアドレス：{user?.email}</p> */}
      <p>メールアドレス：{user.email}</p>
    </div>
  );
};

export default User;
