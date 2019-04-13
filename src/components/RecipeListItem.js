import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Modal from 'react-mega-modal';
import { IngredientsTable } from './IngredientsTable';
import { AddModalContent } from './AddModalContent';

const RecipeListItem = ({ item, index, dispatch }) => {
  const dispatchQuantity = quantity =>
    dispatch({
      type: 'setQuantity',
      id: item.id,
      payload: quantity,
    });

  const handleChange = event => {
    const { value } = event.target;
    dispatchQuantity(value);
  };

  const handleBlur = event => {
    const { value } = event.target;
    if (!value || parseInt(value) < 0) {
      dispatchQuantity(0);
    }
  };

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="RecipeListItem mb5 bg-white"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="RecipeListItem__Header mb3">
            <div>
              <h2 className="f3 mt0 ma0">{item.name}</h2>
            </div>
            <div className="flex items-center">
              {` × `}
              <input
                className="b f3 pv2 input-reset tr w3 bn bg-transparent"
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                min={0}
                value={item.quantity}
              />
            </div>
          </div>
          <IngredientsTable
            showBakerPercentages={item.useBakerPercentages}
            ingredients={item.ingredients}
            quantity={item.quantity}
          />
          <div className="f7 mt3">
            <Modal
              modal={({ closeModal }) => (
                <div
                  style={{
                    background: 'white',
                    borderRadius: 10,
                    padding: 50,
                    maxWidth: 650,
                    width: '100%',
                  }}
                >
                  <h2 className="mt0">
                    Are you sure want to remove this recipe?
                  </h2>
                  <p>This action can not be undone, be careful!</p>
                  <button
                    className="f5 link br-pill dim pv3 ph4 dib white bg-red"
                    onClick={() =>
                      dispatch({
                        type: 'removeItem',
                        payload: item.id,
                      })
                    }
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    className="f5 link br-pill dim pv3 ph4 dib black bg-light-gray ml2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              )}
            >
              {({ openModal }) => <button onClick={openModal}>Remove</button>}
            </Modal>
            <Modal
              modal={({ closeModal }) => (
                <AddModalContent
                  closeModal={closeModal}
                  item={item}
                  dispatch={dispatch}
                />
              )}
            >
              {({ openModal }) => (
                <button className="ml2" onClick={openModal}>
                  Edit
                </button>
              )}
            </Modal>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default RecipeListItem;
