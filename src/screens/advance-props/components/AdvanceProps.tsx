import React from 'react';
import Status from './components/Status';
import Text from './components/Text';
import Wrapper from './components/Wrapper';
import Optional from './components/Optional';

const AdvanceProps = () => {
  return (
    <div>
      <Status status="loading" />
      {/* 厳密には何が渡るかわからない上、型の種類に外れない限りコンパイルで防げない */}
      {/* <Status status="xxxx" /> */}

      {/* childrenについて */}
      <Text>チルドレンです</Text>
      {/* コンポーネント自体をchildrenとして渡す */}
      <Wrapper>
        <Text>入れ子のチルドレンです。</Text>
      </Wrapper>

      {/* 任意項目の対応 */}
      {/* <Optional name="tanaka" age={20} /> */}
      <Optional name="tanaka" />
    </div>
  );
};

export default AdvanceProps;
