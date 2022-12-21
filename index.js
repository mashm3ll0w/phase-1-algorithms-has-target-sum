function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++){
        if(array[i] + array[j] === target){
            return true
        }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  Quadratic Time => O(n*n) => For every n elements in the input array, we need to add it to each of the remaining n elements and compare against the target

  for (let i = 0; i < array.length; i++){              // loop through the n elements
    for (let j = i + 1; j < array.length; j++){        // loop through the remaining n elements
        if(array[i] + array[j] === target){            // Constant time since we are just referencing an element at an exact location
            return true
        }

*/

/* 
  Add your pseudocode here
  initialize a for loop with the first digit
    initialize a second for loop with the second digit
      if digit-1 + digit-2 equals target
        return true
  return false if we've ran through the entire array with no exact answer
*/

/*
  Add written explanation of your solution here
  1. Initialize a for loop with integer i
  2. Initialize a second for loop with integer j
  3. Add i + j and check if they equal to the target
  4. If we get a positive result we return true
  5. If we iterate through the entire array and get no exact answer we return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
