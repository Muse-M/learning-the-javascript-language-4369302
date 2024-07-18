//allows you to iterate over an array 


// iterate over an array
var pageNames = [
  "Home",
  "About Us",
  "Contact Us",
  "JavaScript Playground",
  "News",
  "Blog",
];

for (var p in pageNames) // each time p is set to the next key/index
  {  
  console.log(p, pageNames[p]);
}

//note that keys DON'T HAVE to come starting at 0 and then go up


for (var p of pageNames) { // each time p is set to the next VALUE
  console.log(p);
}

//if the order in which  what is brought from the array is important then use a sequential for loop
