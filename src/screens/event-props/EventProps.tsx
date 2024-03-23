import React from 'react';
import Button from './components/Button';
import Input from './components/Input';

const EventProps = () => {
  // const click = () => alert('OK');
  return (
    <div>
      {/* <Button click={click}} /> */}
      <Button click={(e, text) => alert(text)} />
      <Input change={(e) => console.log(e.target.value)} />
    </div>
  );
};

export default EventProps;
