const reverseList = function(head) {
    if(head === null || head.next === null) {
        return head;
    }
    let p = head.next;
    head.next = null;
    while(p !== null) {
        const temp = p.next;
        p.next = head;
        head = p;
        p = temp;
    }
    return head;
}