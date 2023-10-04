import React, { useState } from 'react';

export default function Event_ex() {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [data, setData] = useState([]);
  const [nextId, setNextId] = useState(2);

  const addInfo = () => {
    const nextData = data.concat({
      id: nextId,
      name: inputName,
      email: inputEmail,
    });
    setNextId(nextId + 1);
    setData(nextData);
  };

  const changeName = (e) => {
    setInputName(e.target.value);
  };
  const changeEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const deleteList = (id) => {
    const newData = data.filter((val) => val.id !== id);
    setData(newData);
  };

  const dataList = data.map((data) => (
    <h2 key={data.id} onDoubleClick={() => deleteList(data.id)}>
      {data.name}: {data.email}
    </h2>
  ));

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="이름"
          value={inputName}
          onChange={changeName}
        />
        <input
          type="email"
          placeholder="이메일"
          value={inputEmail}
          onChange={changeEmail}
        />
        <button onClick={addInfo}>등록</button>
      </div>
      <div>
        <ol>
          <ui>{dataList}</ui>
        </ol>
      </div>
    </div>
  );
}
