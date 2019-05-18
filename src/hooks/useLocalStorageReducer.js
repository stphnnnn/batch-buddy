import React from 'react';

function getInitialState(key, initialState) {
  try {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse stored json or if none return initialState
    return item ? JSON.parse(item) : initialState;
  } catch (error) {
    console.log(error);
    return initialState;
  }
}

function useLocalStorageReducer(key, reducer, initialState) {
  // Pass initial state function to useReducer so logic is only executed once
  const [state, dispatch] = React.useReducer(
    reducer,
    getInitialState(key, initialState)
  );

  // Update local storage whenever the state changes
  React.useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.log(error);
    }
  }, [state.items]);

  return [state, dispatch];
}

export default useLocalStorageReducer;
