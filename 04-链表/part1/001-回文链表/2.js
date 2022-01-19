let pointer;

function reverseLinkList(head) {
    if(!head) return true;
    const res = reverseLinkList(head.next) && (pointer.val === head.val);
    pointer = pointer.next;
    return res;
}

function isPalindrome(head) {
    pointer = head;
    return reverseLinkList(head);
}