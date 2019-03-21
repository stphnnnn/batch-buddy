import React from 'react';
import Modal from 'react-mega-modal';

import { StoreProvider } from '../global/storeContext';
import { RecipeList } from './RecipeList';
import { AddModal } from './AddModal';
import { IngredientTotals } from './IngredientTotals';

const App = props => {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <StoreProvider>
      <div>
        <header className="Header pv4 flex items-center justify-between">
          <h1 className="f4 ma0 red">BatchBuddy®</h1>
          <Modal modal={AddModal}>
            {({ openModal }) => (
              <button
                className="f5 link br-pill dim pv3 ph4 dib white bg-red"
                onClick={openModal}
              >
                + Add
              </button>
            )}
          </Modal>
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
