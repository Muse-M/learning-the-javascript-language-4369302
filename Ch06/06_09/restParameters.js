//...      this is a rest parameter 

//previously we've seen functions with the array like parameter argument

//rest parameters are actualy arrays 
    //so they have all the methods arrays have for sorting and manipulation etc 

    
function bake(temp = 350, time = 35, ...flavors) {
  console.log(`Let's bake this cake at ${temp} degrees,`);//using ` backticks (aka template literals) to replace the $() with the variable 
  
  console.log(`for ${time} minutes\n`);

  if (flavors.length > 0) {
    console.log("And let's not forget these flavors", flavors); //flavours is an array of the last items given to bake()
  }

  console.log("Arguments contains everything", arguments);
}

bake(425, 30, "chocolate", "lemon", "black forest");
bake(300, 30, "vanilla");
bake();


