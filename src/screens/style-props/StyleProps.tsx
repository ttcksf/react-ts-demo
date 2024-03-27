import React from 'react';
import Title from './components/Title';

const StyleProps = () => {
  return (
    <div>
      StyleProps
      {/* CSSに関係ない文字列を防げる */}
      {/* <Title styles={{ fontSize: '40px', color: 'red', test: 'test' }} /> */}
      <Title styles={{ fontSize: '40px', color: 'red' }} />
    </div>
  );
};

export default StyleProps;
