function doubleIt(number) { //applies to single numbers 
  return (number *= 2);
}

var myNumbers = [1, 2, 3, 4, 5];

var myDoubles = myNumbers.map(doubleIt); //map methods applies callback function to every item in array

//a method that loops over an array is .foreach

myNumbers.forEach(function (number) {
  console.log(number);
});
