import React from 'react';

type UserProps = {
  username: string;
  notification: number;
  isLogin: boolean;
};
const Dashboard = (props: UserProps) => {
  return (
    <div>
      {/* <h1>CodeTipsさん、おかえりなさい</h1> */}
      <h1>{props.username}さん、おかえりなさい</h1>
      {/* <p>新着の通知が3件あります。</p> */}
      <p>新着の通知が{props.notification}件あります。</p>
    </div>
  );
};

export default Dashboard;
