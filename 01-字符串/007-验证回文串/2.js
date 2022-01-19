const isPalindrome = (s) => {
    const arr = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    const newArr = arr.split('').reverse().join('');
    return arr === newArr;
}