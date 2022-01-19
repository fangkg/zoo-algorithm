function pow(x, n) {
    if(n === 0) {
        return 1;
    } else if(n === 1) {
        return x;
    } else if(n === -1) {
        return 1/x;
    }

    let pow = Math.abs(n);
    let result = 1;
    let base = x;

    while(pow) {
        if(pow & 1 === 1) {
            result = result * base;
        }
        base *= base;
        pow = pow >> 1;
    }

    return n > 0 ? result : 1/result;
}