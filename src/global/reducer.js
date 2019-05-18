import nanoid from 'nanoid';

export function reducer(prevState, action) {
  switch (action.type) {
    case 'addItem':
      return {
        ...prevState,
        items: [
          ...prevState.items,
          { ...action.payload, quantity: 1, id: `item_${nanoid()}` },
        ],
      };
    case 'updateItem':
      return {
        ...prevState,
        items: prevState.items.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };
    case 'removeItem':
      return {
        ...prevState,
        items: prevState.items.filter(item => item.id !== action.payload),
      };
    case 'setQuantity':
      return {
        ...prevState,
        items: prevState.items.map(item => {
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
        ...prevState,
        items: moveItem(
          prevState.items,
          action.payload.firstIndex,
          action.payload.secondIndex
        ),
      };
    default:
      throw new Error();
  }
}
