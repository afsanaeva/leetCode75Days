/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let min = Number.MAX_VALUE; // Initialize min to the maximum possible value
    let mid = Number.MAX_VALUE; // Initialize mid to the maximum possible value
    
    for (let num of nums) {
        if (num <= min) {
            // update min if num is smaller than or equal to min
            min = num;
        } else if (num <= mid) {
            // Update mid if num is smaller than or equal to mid
            mid = num;
        } else {
            // Found a number greater than both min and mid
            return true;
        }
    }
    
    // No triplet found
    return false;
};
