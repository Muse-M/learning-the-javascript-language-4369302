//functions can take multiple arguments 

function speakSomething(text='Default', reps=5){

  for(var i=0 ;i<reps;i++) { //remember ; in forloop conditions
    console.log(text + "(" + i +")");
  }
}

//there are different methods for handeling functions that can take in arguments in any order 

function addingmachine(){
  var sum = 0;
  for(var i=0; i< arguments.length; i++){
    if (typeof arguments[i]=== 'number'){
      sum += arguments[i];
    }
  }
  return sum;
}
//arguments is an array like structure that returns all the arguments entered into the function