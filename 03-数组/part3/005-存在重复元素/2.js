const containsDuplicate = function(nums) {
    const newArr = Array.from(new Set(nums));
    return newArr.length !== nums.length;
}