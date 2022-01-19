function isPalindrome(head) {
    let positiveStr = '';
    let reverseStr = '';
    while(head) {
        const nodeVal = head.val;
        positiveStr += nodeVal;
        reverseStr = nodeVal + reverseStr;
        head = head.next;
    }

    return positiveStr === reverseStr;
}