import React from 'react';
import Form from './Form';
import { StoreContext } from '../global/storeContext';

export const AddModal = ({ closeModal, dispatch }) => {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: 10,
        padding: 50,
        maxWidth: 750,
        width: '100%',
      }}
    >
      <Form
        handleCancel={closeModal}
        handleSubmit={item => {
          dispatch({ type: 'addItem', payload: item });
          closeModal();
        }}
      />
    </div>
  );
};
