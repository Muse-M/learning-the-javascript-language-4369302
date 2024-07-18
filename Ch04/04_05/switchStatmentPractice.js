//has less repetition than if statements 

switch (variable){
  case "Yes":
    console.log('Yes');
    break;
  case "No":
    console.log('No');
    break;
  case "maybe":
    console.log('Maybe');
    break;
  default:
    console.log('None of the above')
}

//note without the break the switch statment can cascade and excute the next statment 

/*
Note colon after each case
and variable is only mentioned once
*/