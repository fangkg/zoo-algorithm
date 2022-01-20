const oddEvenList = function(head) {
    if(head === null || head.next === null || head.next.next === null) {
        return head;
    }
    const linkArr = [];
    while(head != null) {
        linkArr.push(head);
        const len = linkArr.length;
        if(len > 2) {
            linkArr[len - 3].next = linkArr[len - 1];
        }
        head = head.next;
        if(head === null) {
            linkArr[len - 2].next = null;
        }
        const isOdd = len % 2 !== 0;
        if(!isOdd) {
            linkArr[len - 2].next = linkArr[1];
        } else {
            linkArr[len - 1].next = linkArr[1];
        }
    }
    return linkArr[0];
}