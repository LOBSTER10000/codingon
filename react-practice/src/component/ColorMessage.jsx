import React from 'react';

export default function (props) {
  const reactCss = {
    color: props.color,
    fontSize: '30px',
  };
  return (
    <>
      <div>
        <p style={reactCss}>{props.children}</p>
      </div>
    </>
  );
}
