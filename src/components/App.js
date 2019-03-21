import React from 'react';
import Modal from 'react-mega-modal';

import { StoreProvider, StoreContext } from '../global/storeContext';
import { RecipeList } from './RecipeList';
import { AddModal } from './AddModal';
import { IngredientTotals } from './IngredientTotals';
import { Button } from './Button';

const AddModalWrapper = () => {
  const [state, dispatch] = React.useContext(StoreContext);
  return (
    <Modal
      modal={({ closeModal }) => (
        <AddModal closeModal={closeModal} dispatch={dispatch} />
      )}
    >
      {({ openModal }) => (
        <Button className="white bg-red" onClick={openModal}>
          + Add
        </Button>
      )}
    </Modal>
  );
};

const App = props => {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <StoreProvider>
      <div>
        <header className="Header pv4 flex items-center justify-between">
          <h1 className="f4 ma0 red">BatchBuddy®</h1>
          <AddModalWrapper />
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
