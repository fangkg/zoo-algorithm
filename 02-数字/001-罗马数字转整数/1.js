const romanToIntOne = function(num) {
    const roman = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
    const list = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0;
    for(const key in roman) {
        if(num.includes(key)) {
            const reg = new RegExp(key);
            num = num.replace(reg, "");
            result += roman[key];
        }
    }
    for(const i of num) {
        result += list[i];
    }
    return result;
}