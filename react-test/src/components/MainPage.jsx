import React from 'react';

export default function MainPage() {
  let animal = '강아지';
  let name = '시고르자브종';
  let a = 5;
  let b = 3;
  let title = 'Hello World';
  return (
    <div>
      <div>
        이것은 div입니다
        <h3>이것은 div안의 h3입니다</h3>
      </div>
      <div>
        <h2>
          제 반려동물 이름은 <span>{name}</span>입니다.
        </h2>
        <h2>
          <span>{name}</span>은 <span>{animal}</span>입니다.
        </h2>
      </div>
      <div>{3 + 5 === 8 ? '정답입니다' : '틀렸습니다!'}</div>
      <div>{a > b && 'a가 b보다 큽니다'}</div>
      <div className="test">{title}</div>
      <div className="input">
        아이디 : <input type="text" />
      </div>
      <div className="input">
        비밀번호 : <input type="text" />
      </div>
      <div className="realDiv">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
    </div>
  );
}
