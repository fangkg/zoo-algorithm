const firstUniqueChar = function(s) {
    for(let i = 0; i < s.length; i += 1) {
        console.log('s.indexOf(s[i]):', s.indexOf(s[i]))
        console.log('s.lastIndexOf(s[i]):', s.lastIndexOf(s[i]))
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }

    return -1;
}

const str = 'loveleetcode';

firstUniqueChar(str);
