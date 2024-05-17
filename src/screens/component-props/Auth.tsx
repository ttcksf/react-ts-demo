import React from 'react';
import Login from './NotLogin';
import { UserProps } from './Dashboard';

type Props = {
  isLogin: boolean;
  // コンポーネントの型はReact.ComponentType
  // Component: React.ComponentType;
  // ComponentはあくまでpropsなのでDashBoardにあるnameというプロパティに何の型が適しているのか型推論できないため指定する（呼び出し元でも型のexportをしておくことが必要）
  Component: React.ComponentType<UserProps>;
};

const Auth = ({ isLogin, Component }: Props) => {
  if (isLogin) {
    return <Component name="山田太郎" />;
  } else {
    return <Login />;
  }
};

export default Auth;
