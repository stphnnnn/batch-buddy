import React from 'react';
import Modal from 'react-mega-modal';
import classNames from 'classnames';
import { useStore } from '../global/storeContext';
import { Button } from './Button';
import { AddModalContent } from './AddModalContent';

export const AddModal = ({ className }) => {
  const { dispatch } = useStore();
  return (
    <Modal
      modal={({ closeModal }) => (
        <AddModalContent closeModal={closeModal} dispatch={dispatch} />
      )}
      customStyles={({ overlay }) => ({
        overlay: {
          ...overlay,
          pointerEvents: 'none',
        },
      })}
    >
      {({ openModal }) => (
        <Button
          className={classNames('white bg-red', className)}
          onClick={openModal}
        >
          + Add
        </Button>
      )}
    </Modal>
  );
};
