const rotate = function(nums, k) {
    const len = nums.length;
    k = k % len;
    for(let i = l - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }
    for(let j = k - 1; j >= 0; j--) {
        nums[j] = nums[len + j];
        nums.pop();
    }
}