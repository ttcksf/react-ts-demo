import React from 'react';
import Button from './Button';

const CustomComponent = () => {
  return (
    <div>
      CustomComponent
      <Button color="red" onClick={() => console.log('クリック')}>
        お問い合わせ
      </Button>
    </div>
  );
};

export default CustomComponent;
