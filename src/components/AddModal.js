import React from 'react';
import { AddForm } from './AddForm';

export const AddModal = ({ closeModal, dispatch }) => {
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
        handleSubmit={item => dispatch({ type: 'addItem', payload: item })}
        closeModal={closeModal}
      />
    </div>
  );
};
