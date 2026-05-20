import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  { id: 1, name: "Aloe Vera", price: 10 },
  { id: 2, name: "Snake Plant", price: 15 },
  { id: 3, name: "Money Plant", price: 12 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name} - ${product.price}</p>
          <button onClick={() => dispatch(addItem(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;