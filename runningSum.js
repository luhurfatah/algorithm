// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

runningSum = (nums) => {
    let sum = 0;
      for(let i = 0; i<nums.length; i++){
      let temp = nums[i];
          nums[i] = nums[i] + sum;
      sum = sum + temp; 	
    }
    return nums;
  }

// Test
  const arr = [1,2,3,4,5,6]
  console.log(runningSum(arr))