import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productInfos } from './Product';
import '../styles/ProductDetail.css';
export default function ProductDetailPage() {
  const { id } = useParams(); // {productId : 2}
  console.log(id);

  const navigate = useNavigate();

  const list = productInfos[id - 1];
  return (
    <div className="detail">
      <h1>Product Detail Page</h1>
      <button onClick={() => navigate(-1)}>목록보기</button>
      <button onClick={() => navigate('/')}>홈으로 이동하기</button>
      <ul>
        <li>상품번호 : {list.id}</li>
        <li>상품명 : {list.name}</li>
        <li>판매자 : {list.email}</li>
        <li>상세설명 : {list.body}</li>
      </ul>
    </div>
  );
}
