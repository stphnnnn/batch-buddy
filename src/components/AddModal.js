import React from 'react';
import Form from './Form';
import { StoreContext } from '../global/storeContext';

export const AddModal = ({ closeModal }) => {
  const [state, dispatch] = React.useContext(StoreContext);

  return (
    <div
      style={{
        background: 'white',
        borderRadius: 10,
        padding: 50,
        maxWidth: 650,
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
