import React from 'react';
import { AddForm } from './AddForm';

export const AddModalContent = ({ closeModal, dispatch, item }) => {
  const handleSubmit = React.useCallback(
    item => {
      dispatch({ type: item.id ? 'updateItem' : 'addItem', payload: item });
    },
    [dispatch]
  );
  return (
    <div
      style={{
        background: 'white',
        borderRadius: 10,
        padding: 50,
        maxWidth: 825,
        width: '100%',
      }}
    >
      <AddForm
        handleSubmit={handleSubmit}
        closeModal={closeModal}
        item={item}
      />
    </div>
  );
};
