const sortList = function(head) {
    if(head === null || head.next === null) {
        return head;
    }
    let slow = head;
    let fast = head;
    while(slow.next && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    const middle = slow.next;
    slow.next = null;
    const left = head;
    const right = middle;
    return merge(sortList(left), sortList(right));
}

const merge = function(left, right) {
    const temp = new ListNode(null);
    let p1 = left;
    let p2 = right;
    let p = temp;
    while(p1 && p2) {
        if(p1.val < p2.val) {
            const s = p1;
            p1 = p1.next;
            s.next = null;
            p.next = s;
            p = s;
        } else {
            const s = p2;
            p2 = p2.next;
            s.next = null;
            p.next = s;
            p = s;
        }
    }
    if(p1) p.next = p1;
    if(p2) p.next = p2;
    return temp.next;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}