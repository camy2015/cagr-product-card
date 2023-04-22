import { describe, test, expect } from '@jest/globals';
import { ProductCard, ProductImage } from '../../src/components';
import renderer from 'react-test-renderer';
import { product2 } from '../data/products';
import React from 'react';

describe('Tests in <ProductImage/>', () => {
  test('should display the component with the image of product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
