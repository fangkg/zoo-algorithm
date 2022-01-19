const containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b);
    let res = false;
    nums.forEach((ele, index) => {
        if(index < nums.length - 1) {
            res = res || (ele === nums[index + 1]);
        }
    });

    return res;
}