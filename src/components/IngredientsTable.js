import React from 'react';
import { useRecipeTotals } from '../hooks/useRecipeTotals';
import { Number } from './Number';
import { Price } from './Price';

export const IngredientsTable = ({ ingredients, quantity = 1 }) => {
  const [totalAmount, totalPrice] = useRecipeTotals({ ingredients, quantity });

  return (
    <table className="IngredientsTable w-100">
      <tbody>
        <tr className="light-silver">
          <th className="w-70">Ingredients</th>
          {totalPrice > 0 && <th className="w-15">Price</th>}
          <th>Amount</th>
        </tr>

        {ingredients.map(({ name, price, amount, unit }) => (
          <tr key={name}>
            <td>{name}</td>
            {totalPrice > 0 && (
              <td>{price && <Price value={price.value * quantity} />}</td>
            )}
            <td className="fw7">
              <Number val={amount * quantity} unit={unit} />
            </td>
          </tr>
        ))}

        <tr className="light-silver">
          <td>Total</td>
          {totalPrice > 0 && (
            <td>
              <Price value={totalPrice} />
            </td>
          )}
          <td className="fw7">
            <Number val={totalAmount} unit={'g'} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
