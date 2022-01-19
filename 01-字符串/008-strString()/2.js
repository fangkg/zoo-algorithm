const strString = function(haystack, needle) {
    const hayLen = haystack.length;
    const nedLen = needle.length;

    if(!needle) {
        return 0;
    } else if(nedLen > hayLen) {
        return -1;
    } else if(nedLen === hayLen) {
        return haystack === needle ? 0 : -1;
    } else {
        for(let index = 0; index <= hayLen - nedLen; index ++) {
            if(haystack[index] === needle[0] && haystack[index + nedLen -1] === needle[nedLen - 1]) {
                if(nedLen === 1) {
                    return index;
                }
                for(let nedIndex = 1; nedIndex < nedLen; nedIndex++) {
                    if(haystack[index + nedIndex] !== needle[nedIndex]) {
                        break;
                    }
                    if(nedIndex === nedLen - 1) {
                        return index;
                    }
                }
            }
        }
    }
    return -1;
}