const trailingZeroes = function(n) {
    let count = 0;
    for(let i = 1; i <= n; i++) {
        let num = i;
        if(num % 5 === 0) {
            while(num % 5 === 0 && num !== 0) {
                count += 1;
                num = parseInt(num / 5);
            }
        }
    }
    return count;
}