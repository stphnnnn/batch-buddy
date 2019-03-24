import React from 'react';

export const Search = ({ value, onChange }) => (
  <input
    className="w-100 f4 h3 ph3 mb5 bn bg-near-white br3"
    type="text"
    placeholder="Search"
    value={value}
    onChange={onChange}
  />
);
