const sqrt = function(x) {
    let start = 1;
    let end = Math.floor(x/2) + 1;
    let mid;
    while(start <= end) {
        mid = Math.floor((start + end) / 2);
        if(mid * mid > x) {
            end = mid - 1;
        } else if(mid * mid < x) {
            start = mid + 1;
        } else {
            return mid
        }
    }

    return mid;
}