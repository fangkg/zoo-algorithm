const lengthOfLongestSubstring = function(s) {
    let num = 0;
    let max = 0;
    let subString = '';
    for(char of s) {
        if(subString.indexOf(char) === -1) {
            subString += char;
            num++;
            max = max < num ? num : max;
        } else {
            subString += char;
            subString = subString.slice(subString.indexOf(char) + 1);
            num = subString.length; 
        }
    }

    return max;
}