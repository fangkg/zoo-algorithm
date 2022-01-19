function pow(x, n) {
    if(n === 0) {
        return 1;
    } else if(n === 1) {
        return x;
    } else if(n === -1) {
        return 1/x;
    }

    const base = n > 0 ? x : 1/x;
    const half = parseInt(n/2, 10);
    const midResult = pow(x, half);

    if(n%2) {
        return base * midResult * midResult;
    }

    return midResult * midResult;
} 