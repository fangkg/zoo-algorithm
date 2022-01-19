const increasingTriplet = function(nums) {
    if(nums.length < 3) return false;
    let one, two;
    for(const num of nums) {
        if(num > two) {
            return true;
        } else if(num > one) {
            two = num;
        } else {
            one = num;
        }
    }
    return false;
}