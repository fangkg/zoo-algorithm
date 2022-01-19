function pow(x, n) {
    if(n === 0) {
        return 1;
    }
    const base = n > 0 ? x : 1/x;
    let result = 1;
    for(let i  = 1; i <= Math.abs(n); i++) {
        result *= base;
    }
    return result;
}