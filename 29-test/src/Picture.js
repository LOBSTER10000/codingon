import React from 'react';
import './css/picture.scss';

export default function Picture() {
  return (
    <>
      <div>
        <div className="container">
          <img className="pic1" src="/images/1.png"></img>
          <img className="pic2" src="/images/2.png"></img>
          <img className="pic3" src="/images/3.png"></img>
          <img className="pic4" src="/images/4.png"></img>
          <img className="pic5" src="/images/5.png"></img>
        </div>
      </div>
    </>
  );
}
