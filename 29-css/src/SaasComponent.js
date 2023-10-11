import React from 'react';
import './css/SaasComponent.scss';

export default function SaasComponent() {
  return (
    <>
      <div className="container">
        <div className="box red"></div>
        <div className="box orange"></div>
        <div className="box yellow"></div>
      </div>
      <div className="box yellow"></div>
      <button className="btn">button</button>
      <button className="btn-primary">button</button>
    </>
  );
}
