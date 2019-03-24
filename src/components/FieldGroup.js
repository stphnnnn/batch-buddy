import React from 'react';
import { Field } from 'formik';
import classNames from 'classnames';

export const FieldGroup = ({
  className = '',
  labelText,
  showLabel = true,
  fieldClassName = '',
  ...props
}) => (
  <div className={classNames('w-25', className)}>
    {labelText && showLabel && (
      <label className="f6 db mb2" htmlFor={props.name}>
        {labelText}
      </label>
    )}
    <Field
      className={classNames(
        'bg-transparent ba b--black-20 pa3 mb3 w-100',
        fieldClassName
      )}
      {...props}
    />
  </div>
);
