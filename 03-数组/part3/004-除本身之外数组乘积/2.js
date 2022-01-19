const productExceptSelf = (nums) => {
    const len = nums.length;
    const result = [1];
    let right = 1;
    for(let i = 1; i < len; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    for(let j = len - 1; j >= 0; j--) {
        result[j] *= right;
        right *= nums[j];
    }

    return result;
}