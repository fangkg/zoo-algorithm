const longestPalindrome = function(s) {
    if(s == null || s.length < 1) {
        return '';
    }
    let start = 0;
    let end = 0;

    const expandFromCenter = (s, left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left -= 1;
            right += 1;
        }

        return right - left -1;
    }

    for(let i =0; i < s.length; i+= 1) {
        // 及对称偶对称选取中心
        const len1 = expandFromCenter(s, i, i);
        const len2 = expandFromCenter(s, i, i + 1);
        // 取两种组合最大的回文子串长度
        const len = Math.max(len1, len2);
        if(len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}