// app/component/ProductCart.tsx

import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <h1>Product card</h1>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
