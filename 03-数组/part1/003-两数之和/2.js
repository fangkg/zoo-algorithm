const twoSum = function(nums, target) {
    const lookup = {};
    let res = [];
    nums.some((v, i) => {
        if(lookup[target -v]) {
            res = [lookup[target -v], i];
            return true;
        } else {
            lookup[v] = i;
            return false;
        }
    })
    return res;
}