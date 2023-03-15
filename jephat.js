// QUESTION 1



//creating funtion
function calculateSum(array) {
    const Array = [56, 89,64, 74];
    let sum = 0;
    // iterate through the elements.
    for (let i = 0; i < Array.length; i ++) {
    //add array to sum
      sum += Array[i];
    }
    
return sum;
  }
  console.log(calculateSum([56, 89,64,74]));