import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useStore } from '../global/storeContext';
import RecipeListItem from './RecipeListItem';

export const RecipeList = ({ searchValue }) => {
  const { state, dispatch } = useStore();

  const filteredItems = state.items.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    dispatch({
      type: 'moveItem',
      payload: {
        firstIndex: source.index,
        secondIndex: destination.index,
      },
    });
  };

  return (
    <div>
      {state.items.length ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="recipe-list">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {filteredItems.map((item, index) => (
                  <RecipeListItem
                    item={item}
                    key={item.id}
                    index={index}
                    dispatch={dispatch}
                  />
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <h2>You haven't added any recipes yet</h2>
      )}
    </div>
  );
};
