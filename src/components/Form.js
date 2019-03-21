import React from 'react';
import { Formik, Field, FieldArray } from 'formik';
import NumberFormat from 'react-number-format';
import { Button } from './Button';
import units from '../global/units';
import classNames from 'classnames';

const defaultIngredient = {
  name: '',
  amount: '',
  price: 0,
  unit: 'g',
};

const FieldGroup = ({
  className = '',
  labelText,
  showLabel = true,
  ...props
}) => (
  <div className={classNames('w-25', className)}>
    {labelText && showLabel && (
      <label className="f6 db mb2" htmlFor={props.name}>
        {labelText}
      </label>
    )}
    <Field
      className="input-reset bg-transparent ba b--black-20 pa3 mb3 w-100"
      {...props}
    />
  </div>
);

const Price = ({ field, ...props }) => (
  <NumberFormat
    className={props.className}
    onValueChange={valueObject => props.setFieldValue(field.name, valueObject)}
    placeholder={props.placeholder}
    prefix="£"
    thousandSeparator
    value={field.value.value}
  />
);

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
            <h2 className="mt0">Add a recipe</h2>
            <FieldGroup
              labelText="Recipe Name"
              name="name"
              placeholder="Enter a name"
              type="text"
              className="w-100"
            />

            <FieldGroup
              labelText="Description"
              name="description"
              placeholder="Enter a description"
              type="text"
              className="w-100"
            />

            <FieldArray
              name="ingredients"
              render={arrayHelpers => (
                <div>
                  <div className="flex justify-between bt b--light-gray pt3 mt3" />
                  {props.values.ingredients.map((friend, index) => (
                    <div className="flex" key={index}>
                      <FieldGroup
                        labelText="Ingredient"
                        className="w-100 mr1"
                        name={`ingredients[${index}].name`}
                        placeholder="Enter an ingredient"
                        showLabel={index === 0}
                      />
                      <FieldGroup
                        component={Price}
                        labelText="Price"
                        className="w-25 mr1"
                        name={`ingredients.${index}.price`}
                        placeholder="£0.00"
                        setFieldValue={props.setFieldValue}
                        showLabel={index === 0}
                      />
                      <div className="flex items-end w-35 mr1">
                        <FieldGroup
                          labelText="Amount"
                          className="w-100 mr1"
                          name={`ingredients.${index}.amount`}
                          placeholder="0.00"
                          showLabel={index === 0}
                          type="number"
                        />
                        <FieldGroup
                          labelText="Unit"
                          component="select"
                          className="w-50"
                          name={`ingredients.${index}.unit`}
                        >
                          {units.map(unit => (
                            <option key={unit} value={unit}>
                              {unit}
                            </option>
                          ))}
                        </FieldGroup>
                      </div>
                      <button
                        onClick={() => arrayHelpers.remove(index)}
                        type="button"
                      >
                        x
                      </button>
                    </div>
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
              <Button className="black bg-light-gray" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Form;
