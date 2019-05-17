import React from 'react';
import classNames from 'classnames';

export const Search = ({ value, onChange, className }) => (
  <input
    className={classNames(
      'w-100',
      'f4',
      'h3',
      'ph3',
      'bn',
      'bg-near-white',
      'br3',
      className
    )}
    type="text"
    placeholder="Search"
    value={value}
    onChange={onChange}
  />
);
