const divide = function(dividend, divisor) {
    const MIN_VALUE = -2147483648;
    const MAX_VALUE = 2147483647;
    const positive = (dividend ^ divisor) >= 0;
    let t = Math.abs(dividend);
    const d = Math.abs(divisor);
    let res = 0;
    for(let i = 31; i >= 0; i--) {
        if(Math.abs(t >> i) >= d) {
            res += Math.abs(1 << i);
            t -= Math.abs(d << i);
        }
    }

    if(positive) {
        return res > MAX_VALUE ? MAX_VALUE : res;
    }

    return res < MIN_VALUE ? MIN_VALUE : -res;
}