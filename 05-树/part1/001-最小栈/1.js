const MinStack = function() {
    this.stack = [];
    this.minStack = [];
}

MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if(this.minStack.length === 0) {
        this.minStack.push(x);
    } else {
        const min = Math.min(this.minStack[this.minStack.length - 1], x);
        this.minStack.push(min);
    }
}

MinStack.prototype.pop = function() {
    this.minStack.pop();
    return this.stack.pop();
}

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
}

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
}