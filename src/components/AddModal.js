import React from 'react';
import Modal from 'react-mega-modal';
import { StoreContext } from '../global/storeContext';
import { Button } from './Button';
import { AddModalContent } from './AddModalContent';

export const AddModal = () => {
  const [state, dispatch] = React.useContext(StoreContext);
  return (
    <Modal
      modal={({ closeModal }) => (
        <AddModalContent closeModal={closeModal} dispatch={dispatch} />
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
