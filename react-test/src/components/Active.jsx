import React, { useState } from 'react';

export default function Active() {
  const [number, setNumber] = useState(0);
  const plusButton = () => {
    setNumber(number + 2);
  };

  const minusButton = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <button onClick={plusButton}>+2</button>
      <button onClick={minusButton}>-1</button>
      <p>{number}</p>
    </div>
  );
}
