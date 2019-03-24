import React from 'react';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import { reducer } from './reducer';

const initialState = { items: [] };

const StoreContext = React.createContext(initialState);

function StoreProvider({ children }) {
  const [state, dispatch] = useLocalStorageReducer(
    'batch_buddy_data',
    reducer,
    initialState
  );

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreProvider };
