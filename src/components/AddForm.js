import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import { Button } from './Button';
import { FieldGroup } from './FieldGroup';
import { IngredientInput } from './IngredientInput';
import { UnitInput } from './UnitInput';

const defaultIngredient = {
  name: '',
  amount: '',
  price: 0,
  percentage: '',
  unit: 'g',
};

export const AddForm = ({ handleSubmit, closeModal }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        useBakerPercentages: false,
        baseAmount: '',
        baseUnit: 'g',
        ingredients: [{ ...defaultIngredient }],
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmit(values);
        resetForm();
        setSubmitting(false);
        closeModal();
      }}
    >
      {props => {
        console.log(props);
        return (
          <Form>
            <h2 className="mt0">Add a recipe</h2>
            <FieldGroup
              labelText="Recipe Name"
              name="name"
              placeholder="Enter a name"
              type="text"
              className="w-100"
              required
            />

            <FieldGroup
              labelText="Description"
              name="description"
              placeholder="Enter a description"
              type="text"
              className="w-100"
            />

            <FieldGroup
              labelText="Use baker percentages"
              name="useBakerPercentages"
              type="checkbox"
              className="w-100 flex justify-between"
              fieldClassName="w-auto"
            />

            {props.values.useBakerPercentages && (
              <div className="flex">
                <FieldGroup
                  labelText="Total Flour"
                  className="w-60 mr1"
                  name={`baseAmount`}
                  placeholder="0.00"
                  type="number"
                />
                <UnitInput
                  labelText="Unit"
                  className="w-40"
                  fieldClassName="input-reset"
                  name="baseUnit"
                />
              </div>
            )}

            <FieldArray
              name="ingredients"
              render={arrayHelpers => (
                <div>
                  <div className="flex justify-between bt b--light-gray pt3 mt3" />
                  {props.values.ingredients.map((ingredient, index) => (
                    <IngredientInput
                      formProps={props}
                      index={index}
                      ingredient={ingredient}
                      key={index}
                      remove={arrayHelpers.remove}
                      setFieldValue={props.setFieldValue}
                      showPercentages={props.values.useBakerPercentages}
                      values={props.values}
                    />
                  ))}
                  <button
                    className="f6 underline pa0"
                    onClick={() =>
                      arrayHelpers.insert(props.values.ingredients.length, {
                        ...defaultIngredient,
                      })
                    }
                    type="button"
                  >
                    Add an ingredient
                  </button>
                </div>
              )}
            />

            <div className="mt4">
              <Button
                className="white bg-red mr2"
                disabled={props.isSubmitting}
                type="submit"
              >
                Add Recipe
              </Button>
              <Button className="black bg-light-gray" onClick={closeModal}>
                Cancel
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
