//let other steps happen while a slower step take place
//let cake bake while making the frosting
  //sourcing data from elsewhere, disk, network etc: you should do it asynchronously 

/*
Async/await
*/

async function getLotsOfThings() {
  var response1 = await axios.get("https://httpbin.org/get");
  var response2 = await axios.get("https://httpbin.org/get");
  var response3 = await axios.get("https://httpbin.org/get");
}