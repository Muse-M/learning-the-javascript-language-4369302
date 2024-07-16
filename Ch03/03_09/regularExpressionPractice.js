// //is a comment 

//but if you place something between the slashes it becomes a regular expression, which is it's own data type 
//allows for serching for a pattern 
//e.g.
var string1 = "This is the longest string ever.";
var string2 = "This is the shortest string ever.";
var string3 = "Is this the thing called Mount Everest?";
var string4 = "This is the Sherman on the Mount.";
var regEx= /this/;

regEx.test(string1) //searchs string1 for the string 'this' (case sensative) and return a boolean 

//you can add modifiers on the regular expression 
//e.g.

regEx = /this/i; //case insensative 
regEx= /^this/; //checks the  beginning of the string 
//etc etc....