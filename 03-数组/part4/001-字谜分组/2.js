const groupAnagrams = function(strs) {
    const obj = [];
    const arr = [];
    for(let i = 0; i < strs.length; i++) {
        const unit = new Array(26).fill(0);
        for(let j = 0; j < strs[i].length; j++) {
            const index = strs[i].charCodeAt(j) - 97;
            unit[index] += 1;
        }
        const newUnit = JSON.stringify(unit);
        if(!obj[newUnit]) {
            obj[newUnit] = [];
        }
        obj[newUnit].push(strs[i]);
    }
    for(const key in obj) {
        arr.push(obj[key]);
    }

    return arr;
}