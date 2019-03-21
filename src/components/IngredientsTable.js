import React from 'react';

import { TotalWeight } from './TotalWeight';
import { TotalPrice } from './TotalPrice';
import { Number } from './Number';
import { Price } from './Price';

export const IngredientsTable = ({ ingredients, quantity = 1 }) => {
  return (
    <table className="IngredientsTable w-100">
      <tbody>
        <tr className="light-silver">
          <th className="w-70">Ingredients</th>
          <th className="w-15">Price</th>
          <th>Amount</th>
        </tr>

        {ingredients.map(({ name, price, amount, unit }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{price && <Price value={price.value * quantity} />}</td>
            <td className="fw7">
              <Number val={amount * quantity} unit={unit} />
            </td>
          </tr>
        ))}

        <tr className="light-silver">
          <td>Total</td>
          <td>
            <TotalPrice ingredients={ingredients} quantity={quantity} />
          </td>
          <td className="fw7">
            <TotalWeight ingredients={ingredients} quantity={quantity} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
