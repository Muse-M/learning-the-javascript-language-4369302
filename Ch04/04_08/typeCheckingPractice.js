//JS is a loosly typed language 

let thing =12 
thing='twelve' //this is fine, won't throw any errors 

//to check data type uses typeof operator

> typeof thing 
'string'
> thing=[]
[]
> typeof thing //arrays are objects but to check if it is specifically an array object you need to uses the .hasownproperty method and check if it has the length property 
'object'
> typeof thing === 'object' && thing.hasOwnProperty('length')
true

//to check if something is NaN ,as typeof would return it is a number, you need to use Number.isNaN(variable)

//to check for null varaibles you need to uses strict equality
thing === null

//checking typeof something undefined will return 'undefined'
//checking typeof something that doesn't exist will return 'undefined'


//better typechecking does exist outside of base JS, e.g. type script