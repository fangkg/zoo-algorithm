const moveZeroes = function(nums) {
    let j = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[j] = nums[i];
            j++;
        }
    }
    nums.fill(0, j, nums.length);
}