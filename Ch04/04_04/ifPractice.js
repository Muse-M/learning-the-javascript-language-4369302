//if statments are an example of branching 

var answer=window.confirm('Ok to set to True,Cancel to set to false')

if (answer===true){
  console.log('You said True');
}
else {
  console.log('You said False');
}

//semicolons are required to signifiy end of line 
//sometime js adds a virtual ; if it thinks it you missed one

//any place that is the end of logic requires a semicolon

//you can add logic in the if conditions and you can nest if statements