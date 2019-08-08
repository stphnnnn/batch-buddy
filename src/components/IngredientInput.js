import React from 'react';
import { FieldGroup } from './FieldGroup';
import { PriceInput } from './PriceInput';
import { UnitInput } from './UnitInput';

export const IngredientInput = ({
  remove,
  setFieldValue,
  index,
  showPercentages,
  formProps,
  ...props
}) => {
  const isFirst = index => index === 0;

  const handlePercentageChange = () => {
    // do custom stuff here
  };

  const handleAmountChange = event => {
    formProps.handleChange(event);
    if (showPercentages) {
      // do custom stuff here
    }
  };
  return (
    <div className="flex">
      <FieldGroup
        labelText="Ingredient"
        className="w-75 mr1"
        name={`ingredients[${index}].name`}
        placeholder="Enter an ingredient"
        showLabel={isFirst(index)}
        required={isFirst(index)}
      />
      <FieldGroup
        component={PriceInput}
        labelText="Price"
        className="w-10 mr1"
        name={`ingredients.${index}.price`}
        placeholder="£0.00"
        setFieldValue={setFieldValue}
        showLabel={isFirst(index)}
      />
      {showPercentages && (
        <FieldGroup
          labelText="Percentage"
          className="w-10 mr1"
          name={`ingredients.${index}.percentage`}
          placeholder="0"
          showLabel={isFirst(index)}
          type="number"
          step="any"
        />
      )}
      <div className="flex items-end w-15 mr1">
        <FieldGroup
          labelText="Amount"
          className="w-60 mr1"
          name={`ingredients.${index}.amount`}
          placeholder="0.00"
          onChange={handleAmountChange}
          showLabel={isFirst(index)}
          type="number"
          step="any"
        />
        <UnitInput
          labelText="Unit"
          className="w-40"
          fieldClassName="input-reset"
          name={`ingredients.${index}.unit`}
          showLabel={isFirst(index)}
        />
      </div>
      <button
        onClick={() => remove(index)}
        disabled={isFirst(index)}
        type="button"
      >
        x
      </button>
    </div>
  );
};
