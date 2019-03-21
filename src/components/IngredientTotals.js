import React from 'react';
import { StoreContext } from '../global/storeContext';
import { convertToBaseUnit } from '../global/units';

import { IngredientsTable } from './IngredientsTable';

const getIngredientTotals = items => {
  const ingredientsObject = items.reduce((totals, item) => {
    const newTotals = { ...totals };

    item.ingredients.forEach(ingredient => {
      const amount = convertToBaseUnit(
        ingredient.amount * item.quantity,
        ingredient.unit
      ).val;

      newTotals[ingredient.name] = newTotals[ingredient.name]
        ? newTotals[ingredient.name] + amount
        : amount;
    });

    return newTotals;
  }, {});

  return Object.keys(ingredientsObject).map(ingredient => ({
    name: ingredient,
    amount: ingredientsObject[ingredient],
    unit: 'g',
  }));
};

const IngredientTotals = () => {
  const [state] = React.useContext(StoreContext);
  const totals = React.useMemo(() => getIngredientTotals(state.items), [
    state.items,
  ]);

  return (
    <div className="pa5 br3 bg-near-white">
      <h2 className="f4">Totals</h2>
      <IngredientsTable ingredients={totals} />
    </div>
  );
};

export { IngredientTotals };
