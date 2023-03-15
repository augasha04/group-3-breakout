function findLongestString(array){
  let longestString = "";
  for(i=0;i < array.length; i++)
  {
  if(array[i].length > longestString.length) {
      longestString = array[i];
  }
  }
  return longestString;
}

var array = ["Moringa", "bootcamp", "performance", "flabagasted", "programizcompiler"];
const longestString = findLongestString(array);
console.log(longestString);