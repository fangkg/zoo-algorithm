const intersect = function(nums1, nums2) {
    const longerArr = nums1.length > nums2.length ? nums1 : nums2;
    const shorterArr = nums1.length > nums2.length ? nums2 : nums1;
    const result = [];
    for(let i = 0; i < shorterArr.length; i++) {
        if(longerArr.indexOf(shorterArr[i]) > -1) {
            result.push(shorterArr[i]);
            longerArr.splice(longerArr.indexOf(shorterArr[i]), 1);
        }
    }
    return result;
}