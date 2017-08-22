require('../css/style.scss');
import * as test from './test';
import {Person} from './class';

console.log(test.spread);
let Max = new Person('Max');

console.log(Max.greet());
