import React from 'react';

type StatusProps = {
  // status: string;
  status: 'loading' | 'success' | 'error';
};

const Status = (props: StatusProps) => {
  let msg;
  if (props.status === 'loading') {
    msg = 'ローディング中';
  } else if (props.status === 'success') {
    msg = 'データ取得完了';
  } else if (props.status === 'error') {
    msg = 'エラー';
  }
  return (
    <div>
      <p>{msg}</p>
    </div>
  );
};

export default Status;
