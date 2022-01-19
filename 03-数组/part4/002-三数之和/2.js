const threeSum = function(nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    const length = nums.length;
    for(let i = 0; i < length; i++) {
        let left = i + 1;
        let right = length - 1;
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if(sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                const leftValue = nums[left];
                while(left < length && nums[left] === leftValue) {
                    left++;
                }
                const rightValue = nums[right];
                while(right > left && nums[right] === rightValue) {
                    right--;
                }
            } else if(sum < 0) {
                left++;
            } else {
                right--;
            }
        }

        while(i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }
    }

    return res;
}