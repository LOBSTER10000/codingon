import React from 'react';
import '../styles/PhotoListItem.css';
export default function PhotoListItem({ photo }) {
  return (
    <div className="photoDetail">
      <ul>
        <li>사진 제목 : {photo.title}</li>
        <img src={photo.url} width={200} height={200}></img>
      </ul>
    </div>
  );
}
