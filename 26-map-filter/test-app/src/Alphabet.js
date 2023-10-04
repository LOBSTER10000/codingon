import React, { useState } from 'react';

export default function Alphabet() {
  // const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
  const [alphabet, setAlphabet] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);
  const [inputAlpha, setInputAlpha] = useState('');
  const addAlpha = () => {
    // [퀴즈] input이 빈값이라면 alphabet 상태가 변경되지 않도록 하기 (25분까지 쉬는 시간~)
    if (inputAlpha.trim().length === 0) {
      return null;
    } else {
      const newAlpha = alphabet.concat({
        id: alphabet.length + 1,
        alpha: inputAlpha,
      });
      setAlphabet(newAlpha);
      setInputAlpha('');
    }
  };

  const enterAlpha = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.keyCode === 13) {
      addAlpha();
    }
  };
  const deleteAlpha = (targetId) => {
    // targetId : 삭제될 요소의 id
    console.log(targetId);

    const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);
    setAlphabet(newAlpha);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        onKeyDown={(e) => enterAlpha(e)}
      />
      <button onClick={addAlpha}>ADD</button>
      <ol>
        {alphabet.map((value) => (
          //   <li key={index}>{value}</li>
          //   <div key={index}>
          //     <div>
          //       <div>{value}</div>
          //     </div>
          //   </div>
          <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
            {value.alpha}
          </li>
        ))}
      </ol>
    </div>
  );
}
