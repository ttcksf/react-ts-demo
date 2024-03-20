import React from 'react';

type UserProps = {
  username: {
    firstName: string;
    lastName: string;
  };
  followers: {
    firstName: string;
    lastName: string;
  }[];
};

const Dashboard = (props: UserProps) => {
  return (
    <div>
      {/* <h1>こんにちは！山田太郎さん</h1> */}
      <h1>
        こんにちは！{props.username.firstName}
        {props.username.lastName}さん
      </h1>
      <h2>フォロワー</h2>
      <div>
        {props.followers.map((follower, i) => (
          <p key={i}>
            {follower.firstName} {follower.lastName}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
