function isPrime(n) {
    if(n === 2 || n === 3) {
        return true;
    }
    if(n % 6 !== 1 && n % 6 !== 5) {
        return false;
    }
    const sqrtN = Math.sqrt(n);
    for(let i = 3; i < sqrtN; i+= 2) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

function countPrimes(n) {
    let count = 0;
    for(let i = 2; i < n; i++) {
        if(isPrime(i)) {
            count++;
        }
    }
    return count;
}