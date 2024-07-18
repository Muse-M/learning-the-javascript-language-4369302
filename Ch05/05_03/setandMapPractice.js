//Set and Map are types of objects 
//to create use constructor function:

let mySet = new Set(); //to prep-populate data add inbetween brackets 
let myMap = new Map();

//sets are simmilar to arrays, a set will only store each value extractly once 
    //can only access data in sets using methods 
    //myset.add('var') to add
      // you can pass an array into a set to add lots of data at the same time and the set will remove any duplicates
    //myset.has('var') to check if it exists

//map is similar to objects but they preserve the order of key 
    // you can only accsess the data using methods 
    // mymap.get('key')
    //looping over a akp will get you an entry list [key, value] lists
    //to turn an object to a map, pass a Object.entries(objectName) into the map() constructor