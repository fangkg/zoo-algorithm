const singleNumber = (nums) => {
    return nums.reduce((accumulator, currentValue) => accumulator ^ currentValue);
}