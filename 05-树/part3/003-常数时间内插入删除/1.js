const RandomizedSet = function() {
    this.arr = [];
    this.values = {};
}

RandomizedSet.prototype.insert = function(val) {
    if(this.values[val] >= 0) {
        return false;
    } else {
        this.values[val] = this.arr.length;
        this.arr.push(val);
        return true;
    }
}

RandomizedSet.prototype.remove = function(val) {
    const i = this.values[val];
    const l = this.arr.length;
    if(i >= 0) {
        this.values[this.arr[l - 1]] = i;
        this.values[val] = -1;
        this.arr.splice(i, 1, this.arr[l - 1]);
        this.arr.pop();
        return true;
    } else {
        return false;
    }
}

RandomizedSet.prototype.getRandom = function() {
    const l = this.arr.length;
    const i = Math.floor(Math.random() * l);
    return this.arr[i];
}

randomSet.insert(1);
randomSet.remove(2);
randomSet.insert(2);
randomSet.getRandom();
