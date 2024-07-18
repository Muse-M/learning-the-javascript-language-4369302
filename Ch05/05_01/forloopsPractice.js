/* 3 statements when defining a for loop: initialised index ;
                                       condition for when to loop ;
                                       increment index
                                       */
for (let i=0; i<10; i+=1){
  console.log(i)
}

//DOM, interface provided by web browsers to interact with webpages


for (i = 0; i < pageNames.length; i += 1) {
  var currentPageTitle = pageNames[i];

  if (document.title === currentPageTitle) { //document.title is using the DOM interface mentioned
    console.log("We ARE here: " + currentPageTitle);
  } else {
    console.log("We are not here: " + currentPageTitle);
  }
}


var pages = {
  first: "Home",
  second: "About Us",
  third: "Contact Us",
  fourth: "JavaScript Playground",
  fifth: "Blog",
};
for (var p in pages) {
  if (pages.hasOwnProperty(p)) //this line checks if the property p is pages own property and not inherited from other objects, this is a safeguard to make sure you don't enumerate over keys that you don't mean to
    { 
    console.log(p, pages[p]);
  }
}