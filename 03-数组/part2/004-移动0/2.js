const moveZeroes = function(nums) {
    let j = 0;
    let temp = '';
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            temp = nums[i];
            nums[j] = nums[i];
            nums[i] = temp;
            j++;
        }
    }
}