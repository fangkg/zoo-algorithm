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
    let remainder = numerator % denominator;
    if(remainder) {
        result += '.';
    }
    let decimal = '';
    let index = 0;
    const remainders = {};
    while(remainder) {
        const target = remainders[remainder];
        if(!isNaN(target)) {
            decimal = `${decimal.substring(0, target)}(${decimal.substring(target)})`;
            break;
        }
        remainders[remainder] = index++;
        remainder *= 10;
        const num = Math.floor(remainder/denominator);
        decimal = `${decimal}${num}`;
        remainder = remainder % denominator;
    }

    result += decimal;
    return result;
}