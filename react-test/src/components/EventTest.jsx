import React, { useState } from 'react';

export default function EventTest() {
  const [background, setBackground] = useState('white');
  const [color, setColor] = useState('black');
  const [strings, setStrings] = useState('text');
  const stringEvent = (e) => {
    setStrings(e.target.value);
  };

  const styles = {
    background,
    color,
  };

  const setBack = (e) => {
    const selectedValue = e.target.value; // 선택한 옵션의 값을 가져옵니다.
    setBackground(selectedValue);
  };

  const setColors = (e) => {
    setColor(e.target.selectedOptions[0].value);
  };
  return (
    <div>
      <div>
        <div>
          과일 :
          <select name="fruits">
            <option value="apple">사과</option>
            <option value="grape">포도</option>
            <option value="pear">배</option>
          </select>
          배경색 :
          <select name="background" onChange={(e) => setBack(e.target.value)}>
            <option value="black">검정</option>
            <option value="skyblue">하늘색</option>
            <option value="orange">오렌지색</option>
          </select>
          색상 :
          <select name="color" onChange={(e) => setColors(e.target.value)}>
            <option value="red">레드</option>
            <option value="blue">블루</option>
            <option value="green">그린</option>
          </select>
        </div>
        <div>
          내용 :
          <input
            type="text"
            onChange={(e) => stringEvent(e)}
            placeholder="입력해주세요"
          />
        </div>
        <div></div>
        <div style={styles}>{strings}</div>
      </div>
    </div>
  );
}
