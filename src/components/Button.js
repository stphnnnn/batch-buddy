import React from 'react';
import classNames from 'classnames';

export const Button = ({ type = 'button', className, children, ...props }) => (
  <button
    className={classNames(
      'f5',
      'link',
      'br-pill',
      'dim',
      'pv3',
      'ph4',
      'dib',
      'w',
      className
    )}
    type={type}
    {...props}
  >
    {children}
  </button>
);
