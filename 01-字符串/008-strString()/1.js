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
        for(let  index = 0; index <= hayLen - nedLen; index++) {
            if(haystack[index] !== needle[0]) {
                continue;
            }
            if(haystack.substring(index, index + nedLen) === needle) {
                return index;
            }
        }
    }

    return -1;
}