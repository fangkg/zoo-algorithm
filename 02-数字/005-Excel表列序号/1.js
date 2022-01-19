const titleToNumber = function(s) {
    let sum  = 0;
    let i = s.length - 1;
    let carry = 1;
    while(i >= 0) {
        const cur = s[i].charCodeAt() - 64;
        sum += cur * carry;
        carry *= 26;
        i--;
    }
    return sum;
}