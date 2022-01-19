const rotate = function(nums, k) {
    const len = nums.length;
    k = k % len;
    for(let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
}