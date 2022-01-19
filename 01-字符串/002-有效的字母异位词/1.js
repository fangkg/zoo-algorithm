// 利用数组sort()对字符串字母进行排序，然后比较两个字符串是否相等
const isAnagram = (s, t) => {
    const sArr = s.split('');
    const tArr = t.split('');
    const sortFn = (a, b) => {
        return a.charCodeAt() - b.charCodeAt();
    }
    // js中sort()当数组长度小于10采用插入排序，大于10采用快排，平均时间复杂度O(nlogn)
    sArr.sort(sortFn);
    tArr.sort(sortFn);
    return sArr.join('') === tArr.join('');
}