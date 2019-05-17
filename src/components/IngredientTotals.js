import React from 'react';
import { useStore } from '../global/storeContext';
import { IngredientsTable } from './IngredientsTable';
import { useIngredientTotals } from '../hooks/useIngredientTotals';

const IngredientTotals = () => {
  const { state } = useStore();
  const totals = useIngredientTotals(state.items);
  return (
    <div>
      <div className="mb5">
        <h2 className="f4">Batches</h2>
        {state.items.map(item => (
          <div key={item.id}>{`${item.name}: ${item.quantity}`}</div>
        ))}
      </div>
      <IngredientsTable ingredients={totals} />
    </div>
  );
};

export { IngredientTotals };
