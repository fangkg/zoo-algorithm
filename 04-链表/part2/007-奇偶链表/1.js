const oddEvenList = function(head) {
    if(head === null || head.next === null || head.next.next === null) {
        return head;
    }
    let odd = head;
    let even = head.next;
    const evenHeadPointer = head.next;
    while(even !== null && even.next !== null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHeadPointer;
    return head;
}