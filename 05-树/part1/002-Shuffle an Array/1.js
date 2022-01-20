const Solution = (nums) => {
    this.nums = nums;
    this.original = nums.slice(0);
}

Solution.prototype.reset = () => {
    this.nums = this.original;
    this.original = this.original.slice(0);
    return this.original;
}

Solution.prototype.shuffle = () => {
    const any = [];
    const nums = this.nums.slice(0);
    const len = nums.length;
    for(let i = 0; i < len; i++) {
        const targetIndex = Math.floor(Math.random() * nums.length);
        ary[i] = nums[targetIndex];
        nums.splice(targetIndex, 1);
    }
    return ary;
}