const productExceptSelf = (nums) => {
    const len = nums.length;
    const result = [];
    const leftProduct = [];
    const rightProduct = [];
    leftProduct[0] = 1;
    rightProduct[len - 1] = 1;
    for(let i = 1; i < len; i++) {
        leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
    }
    for(let j = len - 2; j >= 0; j--) {
        rightProduct[j] = rightProduct[j + 1] * nums[j + 1];
    }
    for(let k = 0; k < len; k++) {
        result[k] = leftProduct[k] * rightProduct[k]; 
    }

    return result;
}