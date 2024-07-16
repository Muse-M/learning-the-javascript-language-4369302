// Properties and Methods 

/*
> var myString= 'Test 1';
undefined
> myString.
myString.__proto__             myString.hasOwnProperty        myString.isPrototypeOf
myString.propertyIsEnumerable  myString.toLocaleString

myString.anchor                myString.at                    myString.big
myString.blink                 myString.bold                  myString.charAt
myString.charCodeAt            myString.codePointAt           myString.concat
myString.constructor           myString.endsWith              myString.fixed
myString.fontcolor             myString.fontsize              myString.includes
myString.indexOf               myString.isWellFormed          myString.italics
myString.lastIndexOf           myString.length                myString.link
myString.localeCompare         myString.match                 myString.matchAll
myString.normalize             myString.padEnd                myString.padStart
myString.repeat                myString.replace               myString.replaceAll
myString.search                myString.slice                 myString.small
myString.split                 myString.startsWith            myString.strike
myString.sub                   myString.substr                myString.substring
myString.sup                   myString.toLocaleLowerCase     myString.toLocaleUpperCase
myString.toLowerCase           myString.toString              myString.toUpperCase
myString.toWellFormed          myString.trim                  myString.trimEnd
myString.trimLeft              myString.trimRight             myString.trimStart
myString.valueOf

> myString.
*/

/*
above are properties and methods of the string myString

.toUpperCase is a method for example 

you can also work with strings literal, i.e without assining them to variables first 
  e.g: 'Test 1'.toUpperCase()
*/

/*
Template literal 

use backticks `` to not have to worry about quotation marks and also allows you to combine strings together
e.g below

> var myString='This is string 1';
undefined
> let decleration= `This is string 2`
undefined
> decleration
'This is string 2'
> decleration=`Decleration is now changed to include ${myString}`
'Decleration is now changed to include This is string 1'
> decleration
'Decleration is now changed to include This is string 1'
*/