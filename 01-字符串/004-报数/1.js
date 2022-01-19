// 递归
const countAndSay = function(n) {
    if(n == 1) {
        return '1';
    }
    const preResult = countAndSay(n - 1);
    return preResult.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`);
}