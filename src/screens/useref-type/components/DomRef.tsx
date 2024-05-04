import React, { useEffect, useRef } from 'react';

const DomRef = () => {
  // const inputRef = useRef<HTMLInputElement>(null);
  // nullチェックの回避
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    // inputRef.current?.focus();
    // nullチェックの回避
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default DomRef;
