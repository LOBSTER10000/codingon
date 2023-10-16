import React, { useState } from 'react';

export default function Handler_ex() {
  const [strings, setStrings] = useState('안녕하세요');

  const StringExchange = () => {
    setStrings('');
  };

  return (
    <div>
      <h2>{strings}</h2>
      <button onClick={StringExchange}>사라져라</button>
    </div>
  );
}
