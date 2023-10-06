import React, { useState } from 'react';
import LifeCycleFuncChild from './LifeCycleFuncChild';

// 부모 컴포넌트
export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div style={{ background: 'green' }}>
      <button onClick={changeNumber}>Plus</button>
      <LifeCycleFuncChild number={number} />
    </div>
  );
}
