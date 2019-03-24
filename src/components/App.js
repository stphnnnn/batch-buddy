import React from 'react';
import { StoreProvider } from '../global/storeContext';
import { RecipeList } from './RecipeList';
import { IngredientTotals } from './IngredientTotals';
import { AddModal } from './AddModal';

const App = props => {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <StoreProvider>
      <div>
        <header className="Header pv4 flex items-center justify-between">
          <h1 className="f4 ma0 red">BatchBuddy®</h1>
          <AddModal />
        </header>
        <input
          className="w-100 f4 h3 ph3 mb5 bn bg-near-white br3"
          type="text"
          placeholder="Search"
          onChange={event => setSearchValue(event.target.value)}
        />
        <RecipeList searchValue={searchValue} />
        <IngredientTotals />
      </div>
    </StoreProvider>
  );
};

export default App;
