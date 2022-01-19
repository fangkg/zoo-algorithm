const rotate = function(nums, k) {
    const len = nums.length;
    k = k % len;
    nums.unshift(...nums.splice(l-k, k));
}