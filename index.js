/**
 * Write a function named containsDuplicate that takes an array of integers (nums) as input 
 * and returns true if any value appears at least twice in the array, and false if every element is distinct.
 *
 * Problem: Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 *
 * Examples:
 * - containsDuplicate([1,2,3,1]) → true
 * - containsDuplicate([1,2,3,4]) → false  
 * - containsDuplicate([1,1,1,3,3,4,3,2,4,2]) → true
 */

const containsDuplicate = (nums) => {
  let numAmounts ={};//makes object to store in numbers and amount of times it shows up
  for(let i =0;i<nums.length;i++){//for loop to run for number of items in nums length
    let num = nums[i];//just to better read the element we are at in the array
    if(num in numAmounts){//checks if the element is already in the object
      numAmounts[num] ++;//adds to the value of the object
      return true;//since we know there is a least one pair we can return true
    }else{
      numAmounts[num] = 1;//adds the key and value to the object since its not in the object
    }
  }
  return false;//all other cases will return false
};

// Export the function for testing
module.exports = { containsDuplicate };

// Example usage (commented out to avoid interference with tests)
console.log(containsDuplicate([1,2,3,1])); // → true
console.log(containsDuplicate([1,2,3,4])); // → false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // → true