const titleToNumber = function(s) {
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    const len = s.length;
    let sum = 0;
    for(let i = 0; i < len; i++) {
        sum = (arr.indexOf(s[i]) + 1) * Math.pow(26, len - 1 - i) + sum;
    }
    return sum;
}