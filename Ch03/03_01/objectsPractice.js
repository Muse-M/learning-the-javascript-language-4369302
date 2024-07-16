/*
so far - seen : numbers, strings and booleans 

objects are the main way of making a more complex representation than allowed by simple types above 
*/

/* 
Object Literal:

> var emptyObject= {};
undefined
> emptyObject.
emptyObject.__proto__             emptyObject.constructor
emptyObject.hasOwnProperty        emptyObject.isPrototypeOf
emptyObject.propertyIsEnumerable  emptyObject.toLocaleString
emptyObject.toString              emptyObject.valueOf
*/

/* for all intensive purposes the object above is empty  */

/*An object has a series of labels knowns as keys and set of values */
//e.g.
var notEmptyObject= {
label: "value"
 }

var notEmptyObject= {
  label: "value",
  "label2": "value2"
} 
//note the keys are strings hence label2 and "label2" both work however when calling the key 
//the quotation mark is not required

