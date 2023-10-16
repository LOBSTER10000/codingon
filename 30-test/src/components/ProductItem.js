import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <ul>
          <li>상품명 : {product.id}</li>
          <li>상세설명 : {product.name}</li>
        </ul>
      </Link>
    </div>
  );
}
