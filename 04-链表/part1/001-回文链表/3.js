function isPalindrome(head) {
    if(!head || !head.next) {
        return true;
    }

    let slowRef = head;
    let fastRef = head;
    let reverseRef;
    let reversePreRef;
    while(fastRef && fastRef.next) {
        fastRef = fastRef.next.next;
        reverseRef = slowRef;
        slowRef = slowRef.next;
        reverseRef.next = reversePreRef;
        reversePreRef = reverseRef;
    }

    if(fastRef) {
        slowRef = slowRef.next;
    }

    while(reverseRef && slowRef) {
        if(reverseRef.val !== slowRef.val) {
            return false;
        }
        reverseRef = reverseRef.next;
        slowRef = slowRef.next;
    }

    return true;
}