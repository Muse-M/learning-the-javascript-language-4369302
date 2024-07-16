

var bird = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky",
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};

var bear = {
  genus: "ursus",
  species: "arctos",
  commonName: "brown bear",
  callType: "roar",
  quote: "",
  maxOffspring: 3,
  noisy: true,
  deadly: true,
};

//to access an object and one of its keys you uses object.key or object["key"]
//e.g.

bear.quote
bear["quote"]

//to assign a value ou uses object.key= value
//e.g.

bird.color ='Black' //creates and sets key 
bird["whereItLives"] = "In a tree"

//to remove a property use delete
//e.g.

delete bear.color

