// 计数累加：声明一个变量，遍历其中一个字符串s或t对每个字母出现的次数进行累加
const isAnagram = (s, t) => {
    if(s.length !== t.length) {
        return false;
    }
    // 两个单层循环时间复杂度O(n)
    const hash = {};
    for(const k of s) {
        hash[k] = hash[k] || 0;
        hash[k] += 1;
    }

    for(const k of t) {
        if(!hash[k]) {
            return false;
        }
        hash[k] -= 1;
    }

    return true;
}