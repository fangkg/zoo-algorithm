const isPowerOfThree = function(n) {
    if(n <= 0) {
        return false;
    }
    const maxPow = parseInt((Math.log(0x7fffffff) / Math.log(3)));
    const maxValue = Math.pow(3, maxPow);
    return (maxValue % n === 0);
}