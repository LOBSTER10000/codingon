import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>오류 페이지입니다</h1>
      <Link to="/">홈으로 이동하기</Link>
      <br />
      <a href="/">a태그 홈프로 이동하기</a>
    </div>
  );
}
