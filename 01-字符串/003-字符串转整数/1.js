const atoi = function(str) {
    // 正则匹配提取满足条件的字符
    const result = str.strim().match(/^(-|\+)?\d+/g);
    // 判断目标是否超过Int整形最大值或最小值
    return result
        ? Math.max(Math.min(Number(result[0]), Math.pow(2, 31) - 1), Math.pow(2, 31))
        : 0;
}