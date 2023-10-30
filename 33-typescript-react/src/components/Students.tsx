import React from 'react';

interface StudentInfo {
  name: string;
  grade: number;
  part?: string; // 있어도 없어도 되는 구문
  handleClick: (name: string, grade: number) => void;
}

// export default function Student({ name, grade }: StudentInfo) {
//   return <div>Students</div>;
// }

// type StudentInfo = {
//   name : string,
//   grade : number,
// }
// const Student: React.FC<StudentInfo> = ({ name, grade }) => {
//   return (
//     <div>
//       <div>
//         <li>이름 : {name}</li>
//         <li>학년 : {grade}</li>
//       </div>
//     </div>
//   );
// };
// React.FC를 사용할 때는 Generic을 이용해서 props 타입을 표현

//type StudentInfo = {...}
const Student = ({ name, grade, part, handleClick }: StudentInfo) => {
  return (
    <div onClick={() => handleClick(name, grade)}>
      <li>이름 : {name}</li>
      <li>학년 : {grade}</li>
      <li>전공 : {part || '자유전공'}</li>
    </div>
  );
};

export default Student;
