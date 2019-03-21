import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { IngredientsTable } from './IngredientsTable';

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
            ingredients={item.ingredients}
            quantity={item.quantity}
          />
          <div className="f7 mt3">
            <button
              onClick={() =>
                dispatch({
                  type: 'removeItem',
                  payload: item.id,
                })
              }
            >
              Remove
            </button>
            <button className="ml2">Edit</button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default RecipeListItem;
