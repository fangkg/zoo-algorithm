const increasingTriplet = function(nums) {
    let small = Number.MAX_SAFE_INTEGER;
    let big = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] <= small) {
            small = nums[i];
        } else if(nums[i] <= big) {
            big = nums[i];
        } else {
            return true;
        }
    }
    return false;
}