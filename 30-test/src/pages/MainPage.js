import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={['Main', searchParams.get('mode')].join(' ')}>
      <h2>여기는 홈</h2>
      <button
        onClick={() => {
          setSearchParams({ mode: 'Dark' });
        }}
      >
        Dark Mode
      </button>
    </div>
  );
}
