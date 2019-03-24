import nanoid from 'nanoid';

export function reducer(state, action) {
  switch (action.type) {
    case 'addItem':
      return {
        ...state,
        items: [
          ...state.items,
          { ...action.payload, quantity: 1, id: `item_${nanoid()}` },
        ],
      };
    case 'removeItem':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'setQuantity':
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id !== action.id) return item;
          return {
            ...item,
            quantity: action.payload,
          };
        }),
      };
    case 'moveItem':
      function moveItem(items, firstIndex, secondIndex) {
        const results = items.slice();
        const firstItem = items[firstIndex];
        results[firstIndex] = items[secondIndex];
        results[secondIndex] = firstItem;
        return results;
      }
      return {
        ...state,
        items: moveItem(
          state.items,
          action.payload.firstIndex,
          action.payload.secondIndex
        ),
      };
    default:
      throw new Error();
  }
}
