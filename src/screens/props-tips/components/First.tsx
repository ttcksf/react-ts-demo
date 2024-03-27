import React from 'react';

type FirstProps = {
  firstName: string;
  lastName: string;
};

// 分割代入ができる
// const First = (props: FirstProps) => {
const First = ({ firstName, lastName }: FirstProps) => {
  return (
    <div>
      {/* <h1>
        {props.firstName} {props.lastName}
      </h1> */}
      <h1>
        {firstName} {lastName}
      </h1>
    </div>
  );
};

export default First;
