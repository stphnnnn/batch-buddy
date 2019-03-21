import React from 'react';
import { convertToBaseUnit } from '../global/units';
import { Number } from './Number';

export const TotalWeight = ({ ingredients, quantity }) => {
  const totalValue = ingredients.reduce((total, ingredient) => {
    const weight = convertToBaseUnit(
      ingredient.amount * quantity,
      ingredient.unit
    );
    return total + weight.val;
  }, 0);

  return <Number val={totalValue} unit={'g'} />;
};
