const lengthOfLongestSubstring = function(s) {
    let current = 0;
    let max = 0;
    const list = [];
    const len = s.length;
    for(; current < len; current++) {
        if(list.indexOf(s[current]) === -1) {
            list.push(s[current]);
        } else {
            do{
                list.shift();
            } while(list.indexOf(s[current] !== -1));
            list.push(s[current]);
        }
        max = Math.max(list.length, max);
    }

    return max;
}