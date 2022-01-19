const longestCommonPrefix = function(strs) {
    if(strs.length === 0) {
        return '';
    }
    let i = 0;
    let flag = true;
    while(flag) {
        if(strs[0].length > i) {
            const c = strs[0].charAt(i);
            for(let j = 1; j < strs.length; j++) {
                if(strs[j].length <= i || strs[j].charAt(i) !== c) {
                    flag = false;
                    break;
                }
            }
        } else {
            falg = false;
        }
        i++;
    }
    return strs[0].substring(0, i - 1);
}