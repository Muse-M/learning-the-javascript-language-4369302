//fudify turn r sounds into w

fuddify = function(speech) {
  //speech is the parameter
  //first the exceptions: what if speech is not a string
  if (typeof speech != "string") {
    console.error("Not a string");
    return; //shortcurcuits the function
  }

  // otherwise return r into w
  speech = speech.replace(/r/g, "w"); // /g is a global replace, otherwise .replace will only replace the first instance
  speech = speech.replace(/R/g, "W");

  return speech;
}