import React from 'react';

export type UserProps = {
  name: string;
};

const Dashboard = ({ name }: UserProps) => {
  return <div>ユーザー名：{name}</div>;
};

export default Dashboard;
