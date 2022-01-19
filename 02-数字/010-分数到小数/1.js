const fun = (map, remainder, remainders, denominator) => {
    if(!remainder) {
        return remainders;
    }
    let num = 0;
    if(map.has(remainder)) {
        remainders.splice(map.get(remainder), 0, '(');
        remainders.push(')');
        return remainders;
    } else {
        map.set(remainder, remainders.length);
        remainder *= 10;
        num = Math.floor(remainder/denominator);
        remainder %= denominator;
        remainders.push(num);
        return fun(map, remainder, remainders, denominator);
    }
}

const fractionToDecimal = function(numerator, denominator) {
    if(denominator === 0) {
        return '';
    }
    if(numerator === 0) {
        return '0';
    }
    let result = '';
    if((denominator < 0) ^ (numerator < 0)) {
        result += '-';
        denominator = Math.abs(denominator);
        numerator = Math.abs(numerator);
    }

    const integer = Math.floor(numerator/denominator);
    result += integer;
    const remainder = numerator % denominator;
    if(remainder) {
        result += '.';
    }
    let remainders = [];
    const map = new Map();
    if(remainder) {
        remainders = fun(map, remainder, remainders, denominator);
    }
    result += remainders.join('');
    return result;
}