import React from 'react';
import moomin from '../1.png';
export default function Book({ book }) {
  return (
    <div>
      <div
        style={{
          fontSize: '50px',
          color: 'orange',
          background: 'skyblue',
          textAlign: 'center',
        }}
      >
        이번주 베스트 셀러
      </div>
      <div style={{ fontSize: '50px' }}>{book.title}</div>
      <img src={moomin} />
      <div>
        <p>저자 : {book.author}</p>
        <p>판매가 : {book.price}</p>
        <p>구분 : {book.type}</p>
      </div>
    </div>
  );
}
