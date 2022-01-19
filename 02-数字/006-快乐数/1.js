const fn = function(n, once) {
    if(once[n]) {
        return false;
    }

    const list = n.toString().split('');
    let result = 0;
    once[n] = true;
    list.forEach(val => {
        result += Math.pow(parseInt(val, 10), 2);
    })

    if(result === 1) {
        return true;
    } else {
        return fn(result, once)
    }
}

const isHappy = function(n) {
    const once = {};
    return fn(n, once);
}