//Creates Array with candy types
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, twix) {
return [twix,...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, twix) {
  chocolateBars.unshift(twix);
  return chocolateBars;
}
function addElementToEndOfArray (chocolateBars, ruth) {
  return [...chocolateBars, ruth];
}
function destructivelyAddElementToEndOfArray (chocolateBars, ruth) {
  chocolateBars.push(ruth);
  return chocolateBars;
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

  function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}