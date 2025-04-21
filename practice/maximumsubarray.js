function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]); // Decide entre iniciar novo subarray ou continuar
    maxSum = Math.max(maxSum, currentSum); // Atualiza o máximo
  }

  return maxSum;
}

// Feedback
console.log("Maximum Subarray:");
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 → [4,-1,2,1]
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
