import React from 'react';
import { StoreContext } from '../global/storeContext';
import { IngredientsTable } from './IngredientsTable';
import { useIngredientTotals } from '../hooks/useIngredientTotals';

const IngredientTotals = () => {
  const [state] = React.useContext(StoreContext);
  const totals = useIngredientTotals(state.items);

  return (
    <div className="pa5 br3 bg-near-white">
      <h2 className="f4">Totals</h2>
      <IngredientsTable ingredients={totals} />
    </div>
  );
};

export { IngredientTotals };
