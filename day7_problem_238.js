var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    // Compute prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] *= prefix;
        prefix *= nums[i];
    }

    // Compute suffix products and update the result array
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
};

// Test cases
console.log(productExceptSelf([1, 2, 3, 4]));     // Output: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]));// Output: [0, 0, 9, 0, 0]
