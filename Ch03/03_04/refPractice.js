var animal = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky",
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};
animal;

let animal2= animal
// this assigment doesn't create a copy of the animal object to animal2 
//but rather sets the memoery location of animal2 to the same location as animal 
//the 2 variables refrence the same memory

//to make animal2 its own memory ref 

var animal2 = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky",
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};

//or 

animal2 = Object.assign({}, animal); 
//creates empty object, copy property from animal object to empty object, assign new object to animal2 

animal2 = { ...animal };
// uses spread operator ...
//spread out all data from animal to animal2

animal2 = JSON.parse(JSON.stringify(animal));
//turn animal object to json then parse json and set animal2 
//js in json stand for javascript