const threeSum = function(nums) {
    const res = [];
    const uniqueMap = {};
    nums.sort();
    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                if(nums[i] + nums[j] + nums[k] === 0) {
                    const item = [nums[i], nums[j], nums[k]];
                    if(!uniqueMap[item.join(',')]) {
                        res.push(item);
                        uniqueMap[item.join(',')] = 1;
                    }
                }
            }
        }
    }
    return res;
}