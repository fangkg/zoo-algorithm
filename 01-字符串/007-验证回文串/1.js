const isPalindrome = (s) => {
    const arr = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '').split('');
    let i = 0;
    let j = arr.length - 1;
    while(i < j) {
        if(arr[i] === arr[j]) {
            i += 1;
            j -+ 1;
        } else {
            return false;
        }
    }

    return true;
}