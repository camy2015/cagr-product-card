import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ className, style }: Props) => {
  const { product } = useContext(ProductContext);
  const { img = '' } = product;

  return (
    <img
      src={img ? img : noImage}
      alt="Product"
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};
