> var a=2
undefined
> if (a=2){
... a;
... }
2
> if (a=2)a
2

//first method uses curly brakets, second puts everything in 1 line without curly brakets 

//truthy and falsey values 
/*
generally if a varaiable has something in it it is truthy 
if a varaiable is empty then it is falsey 
    i.e. you can treat that as a boolean rather than evalute and expression to check if it is empty or not 
*/
//empty array is however truthy 
//empty array.length is falsey