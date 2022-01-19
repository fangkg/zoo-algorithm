const divide = function(dividend, divisor) {
    const MIN_VALUE = -2147483648;
    const MAX_VALUE = 2147483647;
    const positive = (dividend ^ divisor) >= 0;

    let d = Math.abs(dividend);
    let b = Math.abs(divisor);
    let res = 0;

    while(d >= b) {
        let temp = b;
        let p = 1;
        while(d >= temp << 1 && temp < 1073741823) {
            temp <<= 1;
            p <<= 1;
        }
        d -= temp;
        res += p;
    }

    if(positive) {
        return res > MAX_VALUE ? MAX_VALUE : res;
    }

    return res < MIN_VALUE ? MIN_VALUE : -res;
}