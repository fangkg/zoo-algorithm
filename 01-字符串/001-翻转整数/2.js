// 类似欧几里得思路：通过模10取到最低位，然后通过乘10将最低位迭代到最高位
// 1、这只边界极值
// 2、取给定数绝对值遍历循环生成的每一个数字，借鉴欧几里得算法从num的最后一位开始取值拼成新的数
// 3、同步剔除被消费的部分
// 4、最终结果为异常值直接返回0，原本数据为负数对结果取反
// 5、返回最终结果

const reverse = (x) => {
    let init = Math.abs(x);
    const MAX = Math.pow(2, 31);
    const MIN = Math.pow(-2, 31);
    let num = 0;

    // 遍历循环生成每一位数字
    while(init !== 0) {
        // 借鉴欧几里得算法从num的最后一位开始取值并拼成新的数
        num = (init % 10) + (num * 10);
        // 剔除被消费的部分
        init = Math.floor(init / 10);
    }

    // 异常值
    if(num >= MAX || num <= MIN) {
        return 0;
    }
    if(x < 0) {
        return num * -1;
    }
    return num;
}