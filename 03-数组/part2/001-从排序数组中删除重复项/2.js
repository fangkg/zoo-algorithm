const removeDuplicates = function(nums) {
    let count = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[count] !== nums[i]) {
            nums[count + 1] = nums[i];
            count++
        }
    }

    return count + 1;
}