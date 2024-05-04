import React, { useEffect, useRef, useState } from 'react';

const MutableRed = () => {
  const [timer, setTimer] = useState(0);
  // DOM参照のフックなのでDOMの値を指定する
  const intervalRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    });
    return () => {
      stopTimer();
    };
  }, []);
  return (
    <div>
      {timer}
      <button onClick={() => stopTimer()}>ストップ</button>
    </div>
  );
};

export default MutableRed;
