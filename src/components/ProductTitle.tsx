import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ className, style }: Props) => {
  const { product } = useContext(ProductContext);
  const { id, title } = product;

  return (
    <>
      <span
        className={`${styles.productDescription} ${className}`}
        style={style}
      >
        {title}
      </span>
      <span
        className={`${styles.productDescription} ${className}`}
        style={style}
      >
        {id}
      </span>
    </>
  );
};
