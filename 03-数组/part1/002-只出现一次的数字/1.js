const arr = [1, 2, 3, 4, 5, 1];
// let res = arr.map(num => arr.filter(v => v === num));
// console.log('res:', res);
console.log('异或：', arr.reduce((acc, cur) => acc ^ cur));
console.log(1 ^ 1);
console.log(1 ^ 3);

const singleNumber = (nums) => {
    const numsGroup = nums.map(num => nums.filter(v => v === num));
    return numsGroup.find(num => num.length === 1)[0];
}