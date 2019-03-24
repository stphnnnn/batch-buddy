import React from 'react';
import { convertToBaseUnit } from '../global/units';

export const useRecipeTotals = ({ ingredients, quantity }) =>
  React.useMemo(
    () =>
      ingredients.reduce(
        (totals, ingredient) => {
          const amount = convertToBaseUnit(
            ingredient.amount * quantity,
            ingredient.unit
          );

          const price = ingredient.price
            ? ingredient.price.value * quantity
            : 0;

          return [totals[0] + amount.val, totals[1] + price];
        },
        [0, 0]
      ),
    [ingredients, quantity]
  );
