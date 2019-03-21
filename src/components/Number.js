import { convertToBestUnit } from '../global/units';

export const Number = ({ val, unit, precision = 1000 }) => {
  const converted = convertToBestUnit(val, unit);
  return `${Math.round(converted.val * precision) / precision}${
    converted.unit
  }`;
};
