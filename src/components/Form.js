import React from 'react';
import { Formik, Field, FieldArray } from 'formik';
import NumberFormat from 'react-number-format';

import units from '../global/units';

const defaultIngredient = {
  name: '',
  amount: 0,
  price: 0,
  unit: 'g',
};

const Price = ({ field, ...props }) => {
  const handleValueChange = valueObject => {
    props.setFieldValue(field.name, valueObject);
  };

  return (
    <NumberFormat
      value={field.value.value}
      onValueChange={handleValueChange}
      thousandSeparator={true}
      prefix={'£'}
    />
  );
};

const Form = ({ handleSubmit, handleCancel }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        ingredients: [{ ...defaultIngredient }],
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmit(values);
        resetForm();
        setSubmitting(false);
      }}
    >
      {props => {
        return (
          <form onSubmit={props.handleSubmit}>
            <label htmlFor="name" style={{ display: 'block' }}>
              <h2>Recipe name</h2>
            </label>
            <Field placeholder="Enter a name" type="text" name="name" />

            <label htmlFor="description" style={{ display: 'block' }}>
              <h2>Description</h2>
            </label>
            <Field
              placeholder="Enter a description"
              type="text"
              name="description"
            />

            <h2>Ingredients</h2>

            <FieldArray
              name="ingredients"
              render={arrayHelpers => (
                <div>
                  {props.values.ingredients.map((friend, index) => (
                    <div key={index}>
                      <Field
                        name={`ingredients[${index}].name`}
                        placeholder="Ingredient name"
                      />
                      <Field
                        name={`ingredients.${index}.price`}
                        component={Price}
                        setFieldValue={props.setFieldValue}
                      />
                      <Field
                        name={`ingredients.${index}.amount`}
                        type="number"
                      />
                      <Field
                        name={`ingredients.${index}.unit`}
                        component="select"
                      >
                        {units.map(unit => (
                          <option key={unit} value={unit}>
                            {unit}
                          </option>
                        ))}
                      </Field>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      arrayHelpers.insert(props.values.ingredients.length, {
                        ...defaultIngredient,
                      })
                    }
                  >
                    Add an ingredient
                  </button>
                </div>
              )}
            />

            <div>
              <button onClick={handleCancel}>Cancel</button>
              <button type="submit" disabled={props.isSubmitting}>
                Submit
              </button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Form;
