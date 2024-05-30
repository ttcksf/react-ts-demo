import React from 'react';
import Text from './Text';

const Polymorphic = () => {
  return (
    <div>
      {/* <Text size="lg" color="red">
        タイトル
      </Text>
      <Text size="sm" color="blue">
        本文です
      </Text> */}
      <Text as="h1" size="lg" color="red">
        タイトル
      </Text>
      <Text as="p" size="sm" color="blue">
        本文です
      </Text>
    </div>
  );
};

export default Polymorphic;
