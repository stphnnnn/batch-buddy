import convert from 'convert-units';

const baseUnits = {
  mass: 'g',
  volume: 'ml',
};

const units = [
  'g',
  'kg',
  'oz',
  'lb',
  'ml',
  'l',
  'tsp',
  'Tbs',
  'fl-oz',
  'cup',
  'pnt',
];

const exclude = [
  'mm3',
  'mcg',
  'mg',
  'cm3',
  'kl',
  'm3',
  'km3',
  'in3',
  'qt',
  'gal',
  'ft3',
  'yd3',
  'msk',
  'cl',
  'tsk',
  'glas',
  'kkp',
  'dl',
  'kanna',
];

const getBaseUnit = unit => {
  const { measure } = convert().describe(unit);
  return baseUnits[measure];
};

export const convertToBaseUnit = (value, unit) => {
  const newUnit = getBaseUnit(unit);
  const newValue = convert(value)
    .from(unit)
    .to(newUnit);
  return {
    val: newValue,
    unit: newUnit,
  };
};

export const convertToBestUnit = (value, unit) => {
  return convert(value)
    .from(unit)
    .toBest({ exclude });
};

export const currencyFormatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

// export default options.reduce(
//   (units, unit) => ({
//     ...units,
//     [unit]: convert().describe(unit),
//   }),
//   {}
// );

export default units;
