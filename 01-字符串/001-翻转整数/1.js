// 给出一个32位有符号整数，将这个整数中每位上的数字进行反转
// 32位有符号整数 数值范围[-2^31, 2^31]
// 反转后整数溢出返回0

// 反转字符串思路：
// 1、设置边界极值
// 2、使用字符串的翻转函数进行主逻辑
// 3、补充符号
// 4、拼接最终结果
const reverse = (x) => {
    // 非空判断
    if(typeof x !== 'number') {
        return;
    }

    const MAX = Math.pow(2, 31);
    const MIN = Math.pow(-2, 31);

    // 识别数字剩余部分并翻转
    const rest = x > 0 
        ? String(x).split('').reverse().join('') 
        : String(x).slice(1).split('').reverse().join(''); 

    // 转换为正常值，区分正负数
    const result = x > 0 
        ? parseInt(rest, 10) 
        : 0 - parseInt(rest, 10);

    // 边界情况
    if(result >= MIN && result <= MAX) {
        return result;
    }
    return 0;
}