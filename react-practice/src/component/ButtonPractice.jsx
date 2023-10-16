import React from 'react';
import { useState, useEffect } from 'react';

export default function ButtonPractice() {
  const [num, setNum] = useState(0);
  const onClickEvent = () => {
    setNum((prev) => prev + 1);
  };
  const onClickPrev = () => {
    setNum((prev) => prev - 1);
  };

  if (num < 0) {
    alert('음수가 나올 수 없습니다');
    setNum(0);
  }
  useEffect(() => {
    alert();
  }, [num]);
  return (
    <>
      <div>
        <button onClick={onClickEvent}>플러스 이벤트 연습</button>
        <button onClick={onClickPrev}>마이너스 이벤트</button>
        <p>{num}</p>
      </div>
    </>
  );
}
