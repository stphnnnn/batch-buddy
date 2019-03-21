import React from 'react';
import { Price } from './Price';

export const TotalPrice = ({ ingredients, quantity }) => {
  const totalPrice = ingredients.reduce((total, ingredient) => {
    const price = ingredient.price ? ingredient.price.value * quantity : 0;
    return total + price;
  }, 0);

  return <Price value={totalPrice} />;
};
