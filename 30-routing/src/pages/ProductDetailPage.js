import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productInfos } from './ProductPage';

export default function ProductDetailPage() {
  const { productId } = useParams(); // {productId : 2}
  console.log(productId);

  const navigate = useNavigate();

  const proId = productInfos.filter((e) => e.id == productId);
  console.log(proId[0]);

  return (
    <div>
      <h1>Product Detail Page</h1>
      <button onClick={() => navigate(-1)}>목록보기</button>
      <button onClick={() => navigate('/')}>홈으로 이동하기</button>
      <ul>
        <li>상품번호 : {proId[0].id}</li>
        <li>상품명 : {proId[0].name}</li>
        <li>판매자 : {proId[0].email}</li>
        <li>상세설명 : {proId[0].body}</li>
      </ul>
    </div>
  );
}
