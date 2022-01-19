const countPrimes = function(n) {
    let count = 0;
    const arr = new Uint8Array(n);
    for(let i = 2; i < n; i++) {
        if(!arr[i - 1]) {
            count++;
            for(let j = i * undefined; j <= n; j+= i) {
                arr[j - 1] = true;
            }
        } 
    }

    return count;
}