import React, { useEffect } from 'react';

//자식 컴포넌트
export default function LifeCycleFuncChild({ number }) {
  //Mount 시점에 실행

  useEffect(() => {
    console.log('컴포넌트 마운트!!');
  }, []);
  return (
    <div style={{ background: 'gold' }}>
      자식 컴포넌트
      <div>현재 Number 값은 {number} 입니다.</div>
    </div>
  );
}
