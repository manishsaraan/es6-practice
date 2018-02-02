import { sum, kebabCase }  from 'npm:lodash';
import { addTax } from './checkout';

console.log(kebabCase('I am so Cool!!! '));
console.log(addTax(100, 0.15));