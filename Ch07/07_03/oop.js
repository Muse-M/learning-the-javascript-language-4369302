//objects in JS use prototypal inheritance 
//each object has a parent it inhereits methods from 
    //chocolateCake inherits from cake which inherits from Object
    // they are called __proto__ internally, all together making the prototypal chain 

cake.prototype.bake= function(temp, minutes){

};//creates a bake method to cake which can be accsessed by any object that inherits from cake, i.e chocoloate cake