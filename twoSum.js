// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

const twoSum = (nums, target) => {
    let result = [];
    for(let i = 0; i < nums.length; i++){
      for(let j = 0; j < nums.length; j++){
        if(nums[i] + nums[j] == target && i !== j){
          result.push(i);
          result.push(j);
          return result;
        }
      }
    }
    
  }
  
// Test

const arr = [3,2,4];
console.log(twoSum(arr,6))