const MinStack = function() {
    this.stack = [];
    this.min = Number.MAX_VALUE;
}

MinStack.prototype.push = function(x) {
    const min = this.min;
    this.stack.push(x - min);
    if(x < min) {
        this.min = x;
    }
}

MinStack.prototype.pop = function() {
    const value = this.stack.pop();
    const min = this.min;
    if(value > 0) {
        return value + min;
    } else {
        this.min = min - value;
        return min;
    }
}

MinStack.prototype.top = function() {
    const value = this.stack[this.stack.length - 1];
    if(value > 0) {
        return value + this.min;
    } else {
        return min;
    }
}

MinStack.prototype.getMin = function() {
    return this.min;
}