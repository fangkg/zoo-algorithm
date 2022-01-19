const groupAnagrams = function(strs) {
    const obj = [];
    const arr = [];
    for(let i = 0; i < strs.length; i++) {
        const unit = Array.from(strs[i]).sort().join('');
        if(!obj[unit]) {
            obj[unit] = [];
        }
        obj[unit].push(strs[i]);
    }
    for(const i in obj) {
        arr.push(obj[i]);
    }
    return arr;
}
