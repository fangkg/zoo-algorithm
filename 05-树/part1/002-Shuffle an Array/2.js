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
    const nums = this.nums.slice(0);
    const len = nums.length;
    for(let i = len - 1; i > 0; i--) {
        const targetIndex = Math.floor(Math.random() * (i + 1));
        const temp = nums[i];
        nums[i] = nums[targetIndex];
        nums[targetIndex] = temp;
    }
    return nums;
}