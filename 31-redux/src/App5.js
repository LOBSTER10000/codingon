import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function App5() {
  return (
    <div>
      <h2>React Redux 실습</h2>
      <hr />
      <h2>코딩온 은행</h2>
      <h3>잔액 : </h3>
      <div>
        <input type="text" />
        <br />
        <button onClick>입금</button>
        <button onClick>출금</button>
      </div>
    </div>
  );
}
