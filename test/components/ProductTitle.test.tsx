import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src/components';
import { product1 } from '../data/products';
import { describe, test, expect } from "@jest/globals";

describe('Tests in <ProductTitle/>', () => {
  test('should display the component with the product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
