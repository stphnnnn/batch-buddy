import React from 'react';
import classNames from 'classnames';

export const Button = props => (
  <button
    {...props}
    className={classNames(
      'f5',
      'link',
      'br-pill',
      'dim',
      'pv3',
      'ph4',
      'dib',
      'w',
      props.className
    )}
    type="button"
  >
    {props.children}
  </button>
);
