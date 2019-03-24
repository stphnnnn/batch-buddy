import React from 'react';
import units from '../global/units';

import { FieldGroup } from './FieldGroup';

export const UnitInput = props => (
  <FieldGroup component="select" {...props}>
    {units.map(unit => (
      <option key={unit} value={unit}>
        {unit}
      </option>
    ))}
  </FieldGroup>
);
