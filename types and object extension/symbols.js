const Calculate_Event_Symbol = Symbol('calculate event');
console.log(Calculate_Event_Symbol);
console.log(Calculate_Event_Symbol.toString());

const s1 = Symbol('event');
const s2 = Symbol('event');
console.log(s1 === s2);

const s3 = Symbol.for('event');
const s4 = Symbol.for('event');
console.log(s3 === s4);

let article = {
   title : 'title',
   [Symbol.for('article')] : 'this article'
};
console.log(article[Symbol.for('article')]);

//well know symbols
let values = [1,2,3];
values[Symbol.isConcatSpreadable] = false;
console.log([].concat(values)); // output [[1,2,3]]

let values1 = [8, 12, 16];
values1[Symbol.toPrimitive] = function(hint){
  console.log(hint);
  return 42;
};
let sum = values1 + 100;
console.log(sum);
