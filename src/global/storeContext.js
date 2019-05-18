import React from 'react';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import { reducer } from './reducer';

const initialState = { items: [] };

const StoreContext = React.createContext();

function StoreProvider(props) {
  const [state, dispatch] = useLocalStorageReducer(
    'batch_buddy_data',
    reducer,
    initialState
  );

  const value = React.useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state.items]
  );

  return <StoreContext.Provider value={value} {...props} />;
}

function useStore() {
  const context = React.useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  const { state, dispatch } = context;
  return {
    state,
    dispatch,
  };
}

export { StoreProvider, useStore };
