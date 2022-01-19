const news = str.trim();
const returnNum = function(num) {
    if(num >= -Math.pow(2, 31) && num <= Math.pow(2, 31) - 1) {
        return num;
    } else {
        return num > 0 ? Math.pow(2, 31) - 1 : -Math.pow(2, 31);
    }
}
if(parseInt(news)){
    return returnNum(parseInt(news));
} else {
    return 0;
}

