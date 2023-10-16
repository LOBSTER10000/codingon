import React from 'react';

export default function Text({ text }) {
  const onClickMessage = () => {
    console.log(text);
  };
  return (
    <div>
      <button onClick={onClickMessage}>콘솔메세지</button>
    </div>
  );
}
