import { currencyFormatter } from '../global/units';

export const Price = ({ value = 0 }) => currencyFormatter.format(value);
