import React from 'react';
import { convertToBaseUnit } from '../global/units';

const checkAndSum = (object, property, value) =>
  object.hasOwnProperty(property) ? object[property] + value : value;

const sumIngredients = (totals, { ingredients, quantity }) => {
  ingredients.forEach(ingredient => {
    const amount = convertToBaseUnit(
      ingredient.amount * quantity,
      ingredient.unit
    ).val;

    const price = ingredient.price ? ingredient.price.value * quantity : 0;

    if (totals[ingredient.name]) {
      totals[ingredient.name].amount = checkAndSum(
        totals[ingredient.name],
        'amount',
        amount
      );
      totals[ingredient.name].price = checkAndSum(
        totals[ingredient.name],
        'price',
        price
      );
    } else {
      totals[ingredient.name] = { amount, price };
    }
  });

  return totals;
};

export const useIngredientTotals = items =>
  React.useMemo(() => {
    const ingredientsObject = items.reduce(sumIngredients, {});

    return Object.keys(ingredientsObject).map(ingredient => ({
      name: ingredient,
      amount: ingredientsObject[ingredient].amount,
      price: {
        value: ingredientsObject[ingredient].price,
      },
      unit: 'g',
    }));
  }, [items]);
