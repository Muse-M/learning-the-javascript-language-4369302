var counties = ["Belknap", "Strafford", "Carroll", "Rockingham"];

counties[0] //Belknap

//index 0 might also be called a subscript 

//to add to array
counties.push['Thing to add to end']

//to remove last item from array 
counties.pop()

//to add to front of array 
counties.shift('item')

//to remove from start of array
counties.unshift()

//to remove specific items 

delete counties[2]
//but note length of list stays same and the value at index 2 becomes and empty item


//to actually delete from middle use .splice(indexToRemove, numberofItemstoRemove)

counties.splice(2,1) //removes the index 2 item


