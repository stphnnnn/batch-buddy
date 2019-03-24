import React from 'react';
import NumberFormat from 'react-number-format';

export const PriceInput = ({ field, ...props }) => (
  <NumberFormat
    className={props.className}
    onValueChange={valueObject => props.setFieldValue(field.name, valueObject)}
    placeholder={props.placeholder}
    prefix="£"
    thousandSeparator
  />
);
