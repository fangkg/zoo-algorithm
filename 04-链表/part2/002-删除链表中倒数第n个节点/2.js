const removeNthFromEnd = (head, n) => {
    let cur = head;
    while(cur.next) {
        cur.next.prev = cur;
        cur = cur.next;
    }
    if(n === 1) {
        if(!cur.prev) {
            return null;
        } else {
            cur.prev.next = null;
            return head;
        }
    }
    while(n > 0 && cur) {
        if(n === 1) {
            if(!cur.prev) {
                cur.next.prev = null;
                return cur.next;
            } else {
                cur.prev.next = cur.next;
                cur.next.prev = cur.prev;
                return head;
            }
        }
        cur = cur.prev;
        n--;
    }
}